function findIndexOfItemFromId(array, id) {
  return array.findIndex(item => item._id === id)
}

function totals(payloadArr) {
  const totalAmount = payloadArr.map(cartArr => cartArr.price * cartArr.quantity).reduce((a, b) => a + b, 0)
  const totalQty = payloadArr.map(item => item.quantity).reduce((a, b) => a + b, 0)

  return { amount: totalAmount.toFixed(2), qty: totalQty }
}

export default function (state = { cart: [], totalQty: 0, totalAmount: 0 }, action) {
  switch (action.type) {
    case 'FETCH_CART': {
      return {
        ...state,
        isSet: false,
        isFetching: true
      }
    }
    case 'FETCH_CART_SUCCESS': {
      return {
        ...state,
        isSet: true,
        isFetching: false,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
      }
    }
    case 'FETCH_CART_FAILED': {
      return {
        ...state,
        isSet: false,
        isFetching: false,
        error: 'There has been a technical error.'
      }
    }
    case 'ADD_TO_CART': {
      return {
        ...state,
        isSet: false,
        isPosting: true
      }
    }
    case 'ADD_TO_CART_SUCCESS': {
      const updatedCart = action.payload
      return {
        cart: updatedCart,
        totalAmount: totals(updatedCart).amount,
        totalQty: totals(updatedCart).qty
      }
    }
    case 'INCREMENT_DECREMENT_QTY': {
      return {
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
      }
    }
    case 'INCREMENT_DECREMENT_QTY_SUCCESS': {
      return {
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
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
