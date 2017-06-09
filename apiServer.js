/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */

const express = require('express')

// const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// const errorHandlers = require('./handlers/errorHandlers')

const appServer = express()

// appServer.use(logger('dev'))
appServer.use(bodyParser.json())
appServer.use(bodyParser.urlencoded({ extended: false }))
appServer.use(cookieParser())

appServer.use(require('./routes/books'))

module.exports = appServer
