import { takeLatest } from 'redux-saga/effects'
import fetchBooksSaga from '../sagas/fetchBooksSaga'

export default function* fetchBooksWatcher() {
  console.log('fetchBooksWatcher...') // eslint-disable-line
  yield takeLatest('FETCH_BOOKS', fetchBooksSaga)
}
