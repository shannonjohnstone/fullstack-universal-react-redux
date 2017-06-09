function findIndexOfItemFromId(array, _id) {
  return array.findIndex(item => item._id === _id)
}

function calculateQty(cart, type, itemIndex) {
  if (type === 'increment') return cart[itemIndex].quantity + 1
  return cart[itemIndex].quantity - 1 < 1 ? 1 : cart[itemIndex].quantity - 1
}

export function addToCartAction(book) {
  return {
    type: 'ADD_TO_CART',
    payload: book
  }
}

export function incrementDecrementQtyAction(_id, type, cart) {
  const actionType = 'INCREMENT_DECREMENT_QTY'
  const itemIndex = findIndexOfItemFromId(cart, _id)

  const updatedItem = { ...cart[itemIndex], quantity: calculateQty(cart, type, itemIndex) }
  const updatedCart = [...cart.slice(0, itemIndex), updatedItem, ...cart.slice(itemIndex + 1)]

  return {
    type: actionType,
    payload: updatedCart
  }
}

export function removeItemFromCartAction(id) {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}
