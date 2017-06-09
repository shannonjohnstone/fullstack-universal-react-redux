import { put } from 'redux-saga/effects'
import fetchBooksApi from '../../services/api/fetchBooksApi'
import { fetchBooksSuccessAction, fetchBooksFailedAction } from '../../actions/booksActions'

export default function* fetchBooksSaga() {
  console.log(process.env, 'fetchBooksSaga...') // eslint-disable-line
  try {
    const { data } = yield fetchBooksApi()
    yield put(fetchBooksSuccessAction(data))
  } catch (e) {
    yield put(fetchBooksFailedAction())
  }
}
