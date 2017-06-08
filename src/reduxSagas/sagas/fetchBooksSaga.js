// import { put } from 'redux-saga/effects'
import apiCaller from '../../services/api'

export default function* fetchBooksSaga() {
  console.log(process.env, 'fetchBooksSaga...') // eslint-disable-line
  const result = yield apiCaller('get', `${process.env.API_URL}services/v1/books`)
  console.log(result, 'fetchBooksSaga result') // eslint-disable-line
}
