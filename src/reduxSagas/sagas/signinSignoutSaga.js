/* eslint no-constant-condition: 0 */

import { take, put } from 'redux-saga/effects'
import history from '../../history'
import signinApi from '../../services/api/signinApi'

export default function* signinSignoutSaga(action) {
  while (true) {
    try {
      const { status, data } = yield signinApi(action.payload)
      if (status === 200 && data.token !== undefined) history.push('/')
    } catch (e) {
      console.log(e, 'signinSignoutSaga err'); // eslint-disable-line
    }
    yield take('signout')
    //  put() // fire logout action
  }
}
