import { put } from 'redux-saga/effects'
import apiCaller from '../../services/api'
import { postBooksSuccessAction, postBooksFailedAction } from '../../actions/booksActions'

export default function* postBooksSaga(action) {
  console.log(process.env, 'postBooksSaga...') // eslint-disable-line
  try {
    const { data } = yield apiCaller('post', `${process.env.API_URL}services/v1/books`, action.books)
    console.log(data, 'try...')
    yield put(postBooksSuccessAction())
  } catch (e) {
    console.log('catch...')
    yield put(postBooksFailedAction())
  }
}
