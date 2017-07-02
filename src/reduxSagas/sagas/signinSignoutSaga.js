/* eslint no-constant-condition: 0 */

import { take, put } from 'redux-saga/effects'
import signinApi from '../../services/api/signinApi'
// import { incrementDecrementQtySuccessAction } from '../../actions/cartActions'

export default function* signinSignoutSaga(action) {
  console.log(action, 'signinSignoutSaga');
  while (true) {
    try {
      const { response, error } = yield take(signinApi(action.payload))
      console.log(response, error, 'response, error');
      //  put() // fire success action
    } catch (e) {
      console.log(e, 'signinSignoutSaga err'); // eslint-disable-line
    }
    yield take('signout')
    //  put() // fire logout action
  }
}
