const jwt = require('jwt-simple')

const config = require('../../config')

function tokenForUser(sub) {
  const iat = new Date().getTime()
  return jwt.encode({ sub, iat }, config.secret)
}

module.exports = {
  tokenForUser
}
