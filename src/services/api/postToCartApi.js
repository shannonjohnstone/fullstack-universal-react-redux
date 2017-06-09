import apiCaller from './index'

export default function postToCartApi(book) {
  return apiCaller('post', 'api/services/v1/cart', book)
}
