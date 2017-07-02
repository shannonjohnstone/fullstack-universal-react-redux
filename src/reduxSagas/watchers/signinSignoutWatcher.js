import { takeLatest } from 'redux-saga/effects'
import signinSignoutSaga from '../sagas/signinSignoutSaga'

export default function* signinSignoutWatcher() {
  console.log('signinSignoutWatcher'); // eslint-disable-line
  yield takeLatest('SIGNIN_SIGNOUT', signinSignoutSaga)
}
