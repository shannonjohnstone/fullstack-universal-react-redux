import { combineReducers } from 'redux'
import { FormReducer } from '../modules/FormUtil'

import booksReducers from './booksReducers'
import cartReducers from './cartReducers'

export default combineReducers({
  books: booksReducers,
  cart: cartReducers,
  form: FormReducer
})
