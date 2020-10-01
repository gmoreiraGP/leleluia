require('dotenv').config()
const { models } = require('../models')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')

const generateToken = require('../config/generateToken')

const apiKey = process.env.API_KEY
const templateId = process.env.TEMPLATE_ID

const mailTransport = nodemailer.createTransport(
  postmarkTransport({
    auth: {
      apiKey
    }
  })
)

class AuthController {
  static async auth(req, res) {
    const { email, password } = req.body

    const user = await models.Users.findOne({
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
      const user = await models.Users.findOne({ where: { email } })

      if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado' })

      const token = generateToken({ id: user.id })
      const now = new Date()
      now.setHours(now.getHours() + 1)

      await models.Users.update(
        { passwordResetToken: token, passwordResetExpires: now },
        { where: { email } }
      )

      function sendEmail(user) {
        const mailOptions = {
          from: '"Não Responda" <nao-responda@geekplug.com.br>',
          to: 'guilhermemoreira@geekplug.com.br',
          templateId,
          templateModel: {
            product_name: 'Leleluia Transportes',
            product_url: 'http://leleluiatransportes.com.br',
            email,
            company_name: 'Geek Plug',
            token
          }
        }

        return mailTransport
          .sendMail(mailOptions)
          .then(() => console.log('Email sent successfully!'))
          .catch(error =>
            console.error('There was an error while sending the email:', error)
          )
      }

      return sendEmail(), res.status(200).json({ ok: 'OK' })
    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  }

  static async reset(req, res) {
    const { email, token, password } = req.body
    try {
      const user = await models.Users.findOne({ where: { email } })

      if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado' })

      if (token !== user.passwordResetToken)
        return res
          .status(400)
          .send({ error: 'Token inválido, por favor refaça a solicitação' })

      const now = new Date()
      if (now > user.passwordResetExpires)
        return res
          .status(400)
          .send({ error: 'Token expirado, por favor refaça a solicitação' })

      const hashedPass = await bcrypt.hash(password, 10)

      const updateUser = await user.update({
        password: hashedPass,
        passwordResetToken: ''
      })

      return res.status(200).json(updateUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = AuthController
