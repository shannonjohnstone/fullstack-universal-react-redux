import { takeLatest } from 'redux-saga/effects'
import postBooksSaga from '../sagas/postBooksSaga'

export default function* postBooksWatcher() {
  yield takeLatest('POST_BOOK', postBooksSaga)
}
