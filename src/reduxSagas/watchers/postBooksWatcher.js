import { takeLatest } from 'redux-saga/effects'
import postBooksSaga from '../sagas/postBooksSaga'

export default function* postBooksWatcher() {
  console.log('postBooksWatcher...') // eslint-disable-line
  yield takeLatest('POST_BOOK', postBooksSaga)
}
