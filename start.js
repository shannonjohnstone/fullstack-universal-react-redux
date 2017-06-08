/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */
/* eslint no-console: 0 */

const mongoose = require('mongoose')
const path = require('path')
const env = require('node-env-file')
// const endpointConfig = require('./config/services/api')

switch (process.env.NODE_ENV) {
  case 'development': {
    console.log('DEVELOPMENT MODE') // eslint-disable-line
    env(path.resolve(__dirname, '.env.dev'))
    break
  }
  default: {
    env(path.resolve(__dirname, '.env'))
    console.log('PRODUCTION MODE') // eslint-disable-line
  }
}

// endpointConfig(process.env.NODE_ENV, process.env.API_URL)

mongoose.connect(process.env.MONGOOSE_URL)
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises

mongoose.connection.on('error', (err) => {
  console.error(err, 'There was a error connecting to the database') // eslint-disable-line
  return false
})

mongoose.connection.on('open', () => { console.log('Connection to mongoose success') })

require('./models/books')

const app = require('./app')

// app.set('port', process.env.PORT || 3000)
// const server = app.listen(app.get('port'), () => {
//   console.log(`Express running → PORT ${server.address().port}`)
// })

module.exports = app
