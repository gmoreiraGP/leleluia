const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./usersRoute')
const invoice = require('./invoiceRoute')
const auth = require('./authenticateRoute')

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE'
}

module.exports = app => {
  app.use(bodyParser.json({ limit: '50mb', extended: true }))
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      parameterLimit: 100000,
      extended: true
    })
  )
  app.use(cors(corsOptions))
  app.use('/uploads', express.static('uploads'))
  app.use(users)
  app.use(invoice)
  app.use(auth)
}
