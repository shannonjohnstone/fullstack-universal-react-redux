/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */
const books = require('./books')
const cart = require('./cart')
const auth = require('./auth')

module.exports = function (appServer) {
  appServer.use(books)
  appServer.use(cart)
  appServer.use(auth)
}
