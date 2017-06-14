/* eslint func-names: 0 */
/* eslint prefer-arrow-callback: 0 */

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt-nodejs')

const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: { validator: v => validator.isEmail(v), message: 'Please supply a valid email.' },
    required: 'Please supply a valid email.'
  },
  password: {
    type: String,
    validate: { validator: v => v.length >= 6, message: 'Password must be 6 characters or more.' },
    required: 'Please supply a password.'
  }
})

// on save hook
userSchema.pre('save', function (next) {
  const user = this
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    return bcrypt.hash(user.password, salt, null, function (_err, hash) {
      if (_err) return next(_err)
      user.password = hash
      return next()
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err)
    return cb(null, isMatch)
  })
}

module.exports = mongoose.model('User', userSchema)
