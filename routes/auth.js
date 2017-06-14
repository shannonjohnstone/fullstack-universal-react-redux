const express = require('express')
const passport = require('passport')

const passportServices = require('../services/passport')
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

const router = express.Router()
const authentication = require('../controllers/authentication')
// const { catchErrors } = require('../handlers/errorHandlers')


router.get('/', requireAuth, (req, res) => {
  res.send('Hi there!')
})

router.post('/signin', requireSignin, authentication.signin)
router.post('/signup', authentication.validateUserRegister, authentication.signup)

router.use('/api/services/v1/auth', router)

module.exports = router
