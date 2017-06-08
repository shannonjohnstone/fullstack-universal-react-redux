import { all } from 'redux-saga/effects'
import watchers from './watchers'

export default function* rootSaga() {
  yield all([
    watchers.fetchBooksWatcher()
  ])
}
