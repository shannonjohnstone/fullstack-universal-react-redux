const mongoose = require('mongoose')

// const Books = mongoose.model('Cart')

module.exports = async (req, res) => {
  if (typeof req.session.cart !== 'undefined') res.json(req.session.cart)
}
