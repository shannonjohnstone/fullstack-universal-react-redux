function findIndexOfItemFromId(array, _id) {
  return array.findIndex(item => item._id === _id)
}

function calculateQty(cart, type, itemIndex) {
  if (type === 'increment') return cart[itemIndex].quantity + 1
  return cart[itemIndex].quantity - 1 < 1 ? 1 : cart[itemIndex].quantity - 1
}

export function addToCartAction(updatedCart) {
  return {
    type: 'ADD_TO_CART',
    isSet: false,
    isFetching: true,
    payload: updatedCart
  }
}

export function addToCartSuccessAction(book) {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    isSet: true,
    isFetching: false,
    payload: book
  }
}

export function addToCartFailedAction() {
  return {
    type: 'ADD_TO_CART_FAILED',
    isSet: false,
    isFetching: false,
    error: 'There has been a technical error.'
  }
}

export function fetchCartAction() {
  return {
    type: 'FETCH_CART',
    isSet: false,
    isFetching: true,
  }
}

export function fetchCartSuccessAction(cart) {
  return {
    type: 'FETCH_CART_SUCCESS',
    isSet: true,
    isFetching: false,
    payload: cart
  }
}

export function fetchCartFailedAction() {
  return {
    type: 'FETCH_CART_FAILED',
    isSet: false,
    isFetching: false,
    error: 'There has been a technical error.'
  }
}

export function incrementDecrementQtyAction(_id, type, cart) {
  const actionType = 'INCREMENT_DECREMENT_QTY'
  const itemIndex = findIndexOfItemFromId(cart, _id)
  //
  const updatedItem = { ...cart[itemIndex], quantity: calculateQty(cart, type, itemIndex) }
  const updatedCart = [...cart.slice(0, itemIndex), updatedItem, ...cart.slice(itemIndex + 1)]

  return {
    isUpdating: true,
    type: actionType,
    updateType: type,
    _id,
    payload: updatedCart
  }
}

export function incrementDecrementQtySuccessAction(data) {
  return {
    type: 'INCREMENT_DECREMENT_QTY_SUCCESS',
    isUpdating: false,
    payload: data
  }
}


export function removeItemFromCartAction(id) {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}
