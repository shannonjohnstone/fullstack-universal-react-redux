/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const errorHandlers = require('./handlers/errorHandlers')

// const index = require('./routes/index')
// const users = require('./routes/users')

const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// APIS
console.log('MONGOOSE APIS')

// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGOOSE_URL)
// mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
//
// mongoose.connection.on('error', (err) => {
//   console.error(err, 'There was a error connecting to the database') // eslint-disable-line
//   return false
// })
// mongoose.connection.on('open', () => { console.log('Connection to mongoose success') })

app.use(require('./routes/books'))

// END APIS

// app.use('/', index)
// app.use('/users', users)
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound)

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors)

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// production error handler
app.use(errorHandlers.productionErrors)

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   const err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })
//
// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}
//
//   // render the error page
//   res.status(err.status || 500)
//   res.render('error')
// })

module.exports = app
