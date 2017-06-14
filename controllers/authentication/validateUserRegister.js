module.exports = (req, res, next) => {
  req.sanitizeBody('email')
  req.checkBody('email', 'You must supply a email').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })
  req.checkBody('password', 'Password can not be blank').notEmpty()
  req.checkBody('password', 'Password must 6 characters or more').lengthIsGreaterThan(6)
  const errors = req.validationErrors()
  if (errors) return res.json(errors)
  return next()
}
