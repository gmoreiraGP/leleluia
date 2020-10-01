require('dotenv').config()

const express = require('express')
const session = require('express-session')
const routes = require('../routes')

const customExpress = express()

customExpress.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 //Igual a 1 dia
    }
  })
)

routes(customExpress)

module.exports = customExpress
