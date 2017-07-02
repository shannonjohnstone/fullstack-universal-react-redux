import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import booksReducers from './booksReducers'
import cartReducers from './cartReducers'

export default combineReducers({
  books: booksReducers,
  cart: cartReducers,
  form
})
