export function addToCartAction(book) {
  return {
    type: 'ADD_TO_CART',
    payload: book
  }
}

export function incrementDecrementQtyAction(id, type) {
  const actionType = type === 'increment' ? 'INCREMENT_QTY' : 'DECREMENT_QTY'
  return {
    type: actionType,
    payload: id
  }
}

export function removeItemFromCartAction(id) {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}
