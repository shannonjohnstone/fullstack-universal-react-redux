/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */

const express = require('express')

// const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const expressValidator = require('express-validator')

const customExpressValidator = require('./validators/customExpressValidator')

// const errorHandlers = require('./handlers/errorHandlers')

const appServer = express()

// appServer.use(logger('dev'))
appServer.use(bodyParser.json())
appServer.use(bodyParser.urlencoded({ extended: false }))
appServer.use(expressValidator(customExpressValidator()))
appServer.use(cookieParser())

appServer.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 2 * 24 * 60 * 60 })
  // ttl: 2 days * 24 hours * 60 minutes * 60 seconds
}))

// appServer.get('/test', (req, res) => {
//   res.json({ test: 'test' })
// })
// // appServer.use(require('./routes/books'))
require('./routes')(appServer)

module.exports = appServer
