/* global document */
import 'babel-polyfill'
import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
// import createBrowerHistory from 'history/createBrowserHistory'
import history from './history'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './reduxSagas'
import reducers from './reducers'
import App from './App'
import Navigation from './components/Navigation'
import NavigationNew from './components/NavigationNew'

require('./styles/main.scss') // include css

// export const customHistory = createBrowerHistory()

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(logger, sagaMiddleware)

const initialState = window.__PRELOADED__STATE
const store = createStore(reducers, initialState, middleware)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <NavigationNew />
        <App />
      </div>
    </Router>
  </Provider>, document.getElementById('app')
)
