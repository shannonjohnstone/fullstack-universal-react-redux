/* eslint-disable */
module.exports = async (req, res) => {
  console.log('updateQty controller...');
  const _id = req.params._id
  const updateType = req.body.updateType

  // update the session cart qty
  const updatedCart = req.session.cart.map(cartItem => {
    if (cartItem._id === _id) {
      if (updateType === 'increment') cartItem.quantity += 1
      else cartItem.quantity -= 1
      return cartItem
    } else {
      return cartItem
    }
  })

  req.session.cart = updatedCart
  req.session.save((err) => {
    if (err) console.log(err, 'updateQty error')
    res.json(req.session.cart)
  })
}
