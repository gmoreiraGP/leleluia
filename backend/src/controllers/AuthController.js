require('dotenv').config()
const database = require('../models')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const request = require('request')

const generateToken = require('../config/generateToken')

const apiKey = process.env.SENDGRID_API_KEY
const template = process.env.TEMPLATE_ID
const proxy = process.env.PROXY

class AuthController {
  static async auth(req, res) {
    const { email, password } = req.body

    const user = await database.Users.findOne({
      where: { email }
    })

    if (!user) return res.status(400).json('Usuário não encontrado.')

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).json('Senha inválida')

    user.password = undefined

    res.status(200).json({ user, token: generateToken({ id: user.id }) })
  }

  static async forgot(req, res) {
    const { email } = req.body
    try {
      const user = await database.Users.findOne({ where: { email } })

      if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado' })

      const token = crypto.randomBytes(20).toString('hex')

      const now = new Date()
      now.setHours(now.getHours() + 1)

      await database.Users.update(
        { passwordResetToken: token, passwordResetExpires: now },
        { where: { email } }
      )

      const options = {
        method: 'POST',
        url: 'https://api.sendgrid.com/v3/mail/send',
        proxy,
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${apiKey}`
        },
        rejectUnauthorized: false, //add when working with https sites
        requestCert: false, //add when working with https sites
        //agent: false,
        body: {
          personalizations: [
            {
              to: [{ email: `${email}` }],
              dynamic_template_data: {
                token: `${token}`
              },
              subject: 'Reset pass'
            }
          ],
          from: { email: 'no-reply@geekplug.com.br', name: 'No Reply' },

          template_id: `${template}`
        },
        json: true
      }

      request(options, function (error, response, body) {
        if (error) throw new Error(error)

        res.send(body)
      })
    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  }

  static async reset(req, res) {
    const { email, token, password } = req.body
    try {
      const user = await database.Users.findOne({ where: { email } })

      if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado' })

      if (token !== user.passwordResetToken)
        return res.status(400).send({ error: 'Token inválido' })

      const now = new Date()
      if (now > user.passwordResetExpires)
        return res
          .status(400)
          .send({ error: 'Token expirado, por favor refaça a solicitação' })

      const updateUser = await user.update(generateHash(password))
      return res.status(200).json(updateUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = AuthController
