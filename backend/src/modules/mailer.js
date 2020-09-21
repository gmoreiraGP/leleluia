require('dotenv').config()
const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
// const sgTransport = require('nodemailer-sendgrid-transport')
// const mailer = require('@sendgrid/mail')

const apiKey = process.env.SENDGRID_API_KEY
const template = process.env.TEMPLATE_ID
const { host, port, user, pass } = require('../config/mail.json')

// var options = {
//   auth: {
//     api_key: apiKey
//   }
// }

const transport = nodemailer.createTransport({
  host,
  port,
  secure: false,
  auth: {
    user,
    pass
  },
  tls: {
    rejectUnauthorized: false
  }
})

transport.use(
  'compile',
  hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail/')
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'
  })
)

// const mailer = nodemailer.createTransport(sgTransport(options))

// mailer.setApiKey(apiKey)

// function sendEmail(data) {
//   const msg = {
//     //extract the email details
//     to: data.receiver,
//     from: data.sender,
//     templateId: template,
//     //extract the custom fields
//     dynamic_template_data: {
//       token: data.token
//     }
//   }
//   //send the email
//   mailer.send(msg, (error, result) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(result)
//     }
//   })
// }
// exports.sendEmail = sendEmail

module.exports = transport
