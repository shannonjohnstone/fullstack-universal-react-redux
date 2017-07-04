/* eslint func-names: 0 */
/* eslint prefer-arrow-callback: 0 */

const passport = require('passport')
const mongoose = require('mongoose')

const config = require('../config')

const User = mongoose.model('User')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

// localLogin is for when an existing user is logging in via login page
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  console.log('localLogin....');
  User.findOne({ email }, function (err, user) {
    if (err) return done(err, false)
    if (!user) return done(null, false) // did not find user

    return user.comparePassword(password, function (_err, isMatch) {
      if (_err) return done(_err)
      if (!isMatch) return done(null, false)
      return done(null, user)
    })
  })
})

// jwtLogin is for when a new user is created
const jwtOptions = { jwtFromRequest: ExtractJwt.fromHeader('authorization'), secretOrKey: config.secret }
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub, function (err, user) {
    if (err) return done(err, false)

    if (user) return done(null, user) // found user
    return done('null', false) // did not find user
  })
})

passport.use(jwtLogin)
passport.use(localLogin)
