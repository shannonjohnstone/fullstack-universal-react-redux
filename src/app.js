/* global document */

import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import reducers from './reducers'
import { addToCart } from './actions/cartActions'
import { postBooks, deleteBook, updateBook } from './actions/booksActions'
import BooksList from './components/pages/BooksList'

require('./styles/main.scss') // include css

const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
)

// store.dispatch(postBooks(
// ))

// store.dispatch(deleteBook({ id: 2 }))

// store.dispatch(updateBook({
//   id: 3,
//   title: 'New Book Title'
// }))

// store.dispatch(addToCart([{ id: 1 }]))
