import { all } from 'redux-saga/effects'
import watchers from './watchers'

export default function* rootSaga() {
  yield all([
    watchers.fetchBooksWatcher(),
    watchers.postBooksWatcher(),
    watchers.postToCartWatcher(),
    watchers.fetchCartWatcher(),
    watchers.incrementDecrementQtyWatcher(),
    watchers.signinSignoutWatcher()
  ])
}
