function findIndexOfItemFromId(array, id) {
  return array.findIndex(item => item._id === id)
}

function totals(payloadArr) {
  const totalAmount = payloadArr.map(cartArr => cartArr.price * cartArr.quantity).reduce((a, b) => a + b, 0)
  const totalQty = payloadArr.map(item => item.quantity).reduce((a, b) => a + b, 0)

  return { amount: totalAmount.toFixed(2), qty: totalQty }
}

export default function (state = { cart: [] }, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const updatedCart = [...state.cart, ...action.payload]
      return {
        cart: updatedCart,
        totalAmount: totals(updatedCart).amount,
        totalQty: totals(updatedCart).qty
      }
    }
    case 'INCREMENT_QTY': {
      const itemIndex = findIndexOfItemFromId(state.cart, action.payload)
      const updatedItem = { ...state.cart[itemIndex], quantity: state.cart[itemIndex].quantity + 1 }
      const updatedCart = [...state.cart.slice(0, itemIndex), updatedItem, ...state.cart.slice(itemIndex + 1)]
      return {
        cart: updatedCart,
        totalAmount: totals(updatedCart).amount,
        totalQty: totals(updatedCart).qty
      }
    }
    case 'DECREMENT_QTY': {
      const itemIndex = findIndexOfItemFromId(state.cart, action.payload)
      const updatedItem = { ...state.cart[itemIndex], quantity: state.cart[itemIndex].quantity - 1 < 1 ? 1 : state.cart[itemIndex].quantity - 1 }
      const updatedCart = [...state.cart.slice(0, itemIndex), updatedItem, ...state.cart.slice(itemIndex + 1)]
      return {
        cart: updatedCart,
        totalAmount: totals(updatedCart).amount,
        totalQty: totals(updatedCart).qty
      }
    }
    case 'REMOVE_ITEM': {
      const itemIndex = findIndexOfItemFromId(state.cart, action.payload)
      const updatedCart = [...state.cart.slice(0, itemIndex), ...state.cart.slice(itemIndex + 1)]
      return {
        cart: updatedCart,
        totalAmount: totals(updatedCart).amount,
        totalQty: totals(updatedCart).qty
      }
    }
    default:
      return state
  }
}
