import { put } from 'redux-saga/effects'
import fetchCartApi from '../../services/api/fetchCartApi'
import { fetchCartSuccessAction } from '../../actions/cartActions'

export default function* fetchCartSaga() {
  try {
    const { data } = yield fetchCartApi()
    yield put(fetchCartSuccessAction(data))
  } catch (e) {
    // yield put(fetchBooksFailedAction())
  }
}
