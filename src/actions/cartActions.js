export function addToCartAction(book) {
  return {
    type: 'ADD_TO_CART',
    payload: book
  }
}
