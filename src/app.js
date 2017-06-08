/* global document */
import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import reducers from './reducers'
import Main from './Main'

require('./styles/main.scss') // include css

const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app')
)
