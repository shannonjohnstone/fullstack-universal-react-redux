import { takeLatest } from 'redux-saga/effects'
import postToCartSaga from '../sagas/postToCartSaga'

export default function* postToCartWatcher() {
  yield takeLatest('ADD_TO_CART', postToCartSaga)
}
