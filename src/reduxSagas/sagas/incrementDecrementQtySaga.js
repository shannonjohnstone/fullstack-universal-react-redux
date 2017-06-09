import { put } from 'redux-saga/effects'
import updateQtyApi from '../../services/api/updateQtyApi'
import { incrementDecrementQtySuccessAction } from '../../actions/cartActions'

export default function* incrementDecrementQtySaga(action) {
  try {
    const { data } = yield updateQtyApi(action._id, action.updateType)
    yield put(incrementDecrementQtySuccessAction(data))
  } catch (e) {
    // yield put(fetchBooksFailedAction())
  }
}
