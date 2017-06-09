import apiCaller from './index'

export default function apiFetchBooks() {
  return apiCaller('get', 'api/services/v1/books')
}
