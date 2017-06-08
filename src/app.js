/* global document */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './reduxSagas'
import reducers from './reducers'
import Main from './Main'

require('./styles/main.scss') // include css


const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(logger, sagaMiddleware)
const store = createStore(reducers, middleware)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app')
)
