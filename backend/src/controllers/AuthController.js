require('dotenv').config()
const database = require('../models')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const generateToken = require('../config/generateToken')
//const sender = require('../modules/mailer')
// const mailer = require('../modules/mailer')
const mailer = require('../modules/mailer')
//const mailerRequest = require('../modules/mailerRequest')
// const forgotPasswordTemplate = require('../resources/mail/forgotPasswordTemplate')

const request = require('request')

const apiKey = process.env.SENDGRID_API_KEY
const template = process.env.TEMPLATE_ID

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

      // let data = {
      //   sender: 'no-reply@geekplug.com.br',
      //   receiver: email,
      //   token
      // }
      // var emailTemplate = {
      //   to: email,
      //   from: 'no-reply@geekplug.com.br',
      //   subject: 'Hi there',
      //   text: 'Awesome sauce',
      //   html: `<b>Awesome sauce ${token}</b>`
      // }

      // await sender.sendEmail(data)

      // mailer.sendMail(
      //   {
      //     to: email,
      //     from: 'no-reply@geekplug.com.br',
      //     template: 'auth/forgot',
      //     context: { token }
      //   },
      //   err => {
      //     if (err) {
      //       return res.status(400).json(err)
      //     }

      //     return res.status(200).json('Email enviado')
      //   }
      // )

      const options = {
        method: 'POST',
        url: 'https://api.sendgrid.com/v3/mail/send',
        proxy:
          'http://38464613857:22783195@proxy.policiamilitar.sp.gov.br:3128',
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

        console.log(body)
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
