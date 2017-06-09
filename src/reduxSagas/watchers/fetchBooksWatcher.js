import { takeLatest } from 'redux-saga/effects'
import fetchBooksSaga from '../sagas/fetchBooksSaga'

export default function* fetchBooksWatcher() {
  yield takeLatest('FETCH_BOOKS', fetchBooksSaga)
}
