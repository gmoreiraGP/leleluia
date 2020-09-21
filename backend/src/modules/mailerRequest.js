require('dotenv').config()
const request = require('request')

const apiKey = process.env.SENDGRID_API_KEY
const template = process.env.TEMPLATE_ID

const options = {
  method: 'POST',
  url: 'https://api.sendgrid.com/v3/mail/send',
  proxy: 'http://proxy.policiamilitar.sp.gov.br:3128',
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${apiKey}`
  },
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

module.exports = request
