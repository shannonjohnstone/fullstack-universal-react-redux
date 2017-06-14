const mongoose = require('mongoose')

const User = mongoose.model('User')
const { tokenForUser } = require('./authToken')

module.exports = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  // if (!email || !password) return res.status(422).send('Please provide both email and password')

  try {
    const isUser = await User.findOne({ email })
    if (isUser) return res.status(422).send({ error: 'Email is in use' })
    const newUser = new User({ email, password }) // password needs salting
    return newUser.save((err) => {
      // handle errors, the client should never let the api get to this point but this is a catch
      if (err) {
        if (err.errors) return res.status(422).json(err.errors)
        return res.status(422).json(err)
      }

      return res.json({ token: tokenForUser(newUser._id) })
    })
  } catch (e) {
    return next(e)
  }
}
