import apiCaller from './index'

export default function apiFetchBooks(books) {
  return apiCaller('post', `${process.env.API_URL}api/services/v1/books`, books)
}
