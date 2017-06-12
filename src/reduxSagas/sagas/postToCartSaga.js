import { put } from 'redux-saga/effects'
import postToCartApi from '../../services/api/postToCartApi'
import { addToCartSuccessAction } from '../../actions/cartActions'

export default function* postToCartSaga(action) {
  try {
    const { data } = yield postToCartApi(action.payload)
    console.log(data, 'postToCartSaga') // eslint-disable-line
    yield put(addToCartSuccessAction(data))
  } catch (e) {
    // yield put(fetchBooksFailedAction())
  }
}
