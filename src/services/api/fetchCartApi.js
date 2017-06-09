import apiCaller from './index'

export default function fetchCartApi() {
  return apiCaller('get', 'api/services/v1/cart')
}
