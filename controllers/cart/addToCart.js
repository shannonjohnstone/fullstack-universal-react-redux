const mongoose = require('mongoose')

// const Books = mongoose.model('Cart')

module.exports = async (req, res) => {
  req.session.cart = req.body

  req.session.save((err) => {
    if (err) console.log(err, 'addToCart error') // eslint-disable-line
    res.json(req.session.cart)
  })
}
