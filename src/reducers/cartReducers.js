function findIndexOfItemFromId(array, id) {
  return array.findIndex(item => item.id === id)
}

export default function (state = { cart: [] }, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { cart: [...state.cart, action.payload] }
    case 'INCREMENT_QTY': {
      const itemIndex = findIndexOfItemFromId(state.cart, action.payload)
      const updatedItem = { ...state.cart[itemIndex], quantity: state.cart[itemIndex].quantity + 1 }
      return { cart: [...state.cart.slice(0, itemIndex), updatedItem, ...state.cart.slice(itemIndex + 1)] }
    }
    case 'DECREMENT_QTY': {
      const itemIndex = findIndexOfItemFromId(state.cart, action.payload)
      const updatedItem = { ...state.cart[itemIndex], quantity: state.cart[itemIndex].quantity - 1 < 1 ? 1 : state.cart[itemIndex].quantity - 1 }
      return { cart: [...state.cart.slice(0, itemIndex), updatedItem, ...state.cart.slice(itemIndex + 1)] }
    }
    case 'REMOVE_ITEM': {
      const itemIndex = findIndexOfItemFromId(state.cart, action.payload)
      return { cart: [...state.cart.slice(0, itemIndex), ...state.cart.slice(itemIndex + 1)] }
    }
    default:
      return state
  }
}
