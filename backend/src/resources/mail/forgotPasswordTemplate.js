require('dotenv').config()

const forgotPasswordTemplate = (email, token) => ({
  personalizations: [
    {
      to: `${email}`,
      from: 'no-reply@geekplug.com.br',
      dynamicTemplateData: {
        name: 'LELELUIA',
        id: '123'
      },
      headers: {},
      customArgs: {
        token: `${token}`
      }
    }
  ],
  templateId: process.env.TEMPLATE_ID
})

module.exports = forgotPasswordTemplate
