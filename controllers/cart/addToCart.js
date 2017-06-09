const mongoose = require('mongoose')

// const Books = mongoose.model('Cart')

module.exports = async (req, res) => {
  const cart = req.body
  req.session.cart = cart
  req.session.save((err) => {
    if (err) console.log(err, 'addToCart error') // eslint-disable-line
    res.json(req.session.cart)
  })
  console.log('in addToCart controller...') // eslint-disable-line
  // const books = await (Books.create(req.body)) // use create instead of the above line so we can insert arrays of objects
  // res.json(books)
}
