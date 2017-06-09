import { takeLatest } from 'redux-saga/effects'
import fetchCartSaga from '../sagas/fetchCartSaga'

export default function* fetchCartWatcher() {
  yield takeLatest('FETCH_CART', fetchCartSaga)
}
