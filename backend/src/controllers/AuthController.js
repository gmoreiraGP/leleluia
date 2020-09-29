require('dotenv').config()
const database = require('../models')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')

const generateToken = require('../config/generateToken')

const mailTransport = nodemailer.createTransport(
  postmarkTransport({
    auth: {
      apiKey: '<apikey>'
    },
    proxy: 'http://proxy.policiamilitar.sp.gov.br'
  })
)

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

      function sendEmail(user) {
        // Set email optins
        const mailOptions = {
          from: '"Dave" <dave@example.net>',
          to: email,
          subject: 'Welcome!',
          text: `Veja seu token: ${token}`,
          html: `teste`
        }
        // Send via nodemailer & custom transport
        return mailTransport
          .sendMail(mailOptions)
          .then(() => console.log('Email sent successfully!'))
          .catch(error =>
            console.error('There was an error while sending the email:', error)
          )
      }

      return sendEmail({
        email: '<USERS-EMAIL-HERE>'
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
