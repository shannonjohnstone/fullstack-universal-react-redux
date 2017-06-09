import { put } from 'redux-saga/effects'
import postBooksApi from '../../services/api/postBooksApi'
import { postBooksSuccessAction, postBooksFailedAction } from '../../actions/booksActions'

export default function* postBooksSaga(action) {
  console.log(process.env, 'postBooksSaga...') // eslint-disable-line
  try {
    const { data } = yield postBooksApi(action.books)
    yield put(postBooksSuccessAction())
  } catch (e) {
    yield put(postBooksFailedAction())
  }
}
