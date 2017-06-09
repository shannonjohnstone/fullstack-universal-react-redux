import { takeLatest } from 'redux-saga/effects'
import incrementDecrementQtySaga from '../sagas/incrementDecrementQtySaga'

export default function* fetchCartWatcher() {
  yield takeLatest('INCREMENT_DECREMENT_QTY', incrementDecrementQtySaga)
}
