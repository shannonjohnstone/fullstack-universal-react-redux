import { put } from 'redux-saga/effects'
import apiCaller from '../../services/api'
import { fetchBooksSuccessAction, fetchBooksFailedAction } from '../../actions/booksActions'

export default function* fetchBooksSaga() {
  console.log(process.env, 'fetchBooksSaga...') // eslint-disable-line
  try {
    const { data } = yield apiCaller('get', `${process.env.API_URL}services/v1/books`)
    console.log(data, 'try...')
    yield put(fetchBooksSuccessAction(data))
  } catch (e) {
    console.log('catch...')
    yield put(fetchBooksFailedAction())
  }
}
