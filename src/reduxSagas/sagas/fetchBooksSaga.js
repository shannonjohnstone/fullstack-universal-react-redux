import { put } from 'redux-saga/effects'
import fetchBooksApi from '../../services/api/fetchBooksApi'
import { fetchBooksSuccessAction, fetchBooksFailedAction } from '../../actions/booksActions'

export default function* fetchBooksSaga() {
  try {
    const { data } = yield fetchBooksApi()
    yield put(fetchBooksSuccessAction(data))
  } catch (e) {
    yield put(fetchBooksFailedAction())
  }
}
