const jwt = require('jsonwebtoken')

require('dotenv').config()

const secret = process.env.SECRET

function generateToken(params = {}) {
  return jwt.sign(params, secret, {
    expiresIn: 86400
  })
}
module.exports = generateToken
