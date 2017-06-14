const mongoose = require('mongoose')

const User = mongoose.model('User')
const { tokenForUser } = require('./authToken')

module.exports = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  // if (!email || !password) return res.status(422).send('Please provide both email and password')

  try {
    const isUser = await User.findOne({ email })
    if (!isUser) return res.status(422).send({ error: 'Incorrect username or passowrd' })
    return res.send({ token: tokenForUser(req.user) })
  } catch (e) {
    return next(e)
  }
}
