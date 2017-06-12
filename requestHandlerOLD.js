import axios from 'axios'
import path from 'path'
import React, { createElement } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import requireFromString from 'require-from-string'

const compiler = require('webpack')(require('webpack.config.js'))

const getCompiler = filename => (compiler.compilers && compiler.compilers.find(x => x.options.output.filename.endsWith(filename))) || compiler

const clientModuleMap = new Map()
const getClientModule = (file) => {
  let module = clientModuleMap.get(file)
  if (!module) {
    const c = getCompiler(file)
    const filename = path.join(c.outputPath, file)
    const content = c.outputFileSystem.readFileSync(filename, 'utf8')
    module = requireFromString(content, filename)
    clientModuleMap.set(file, module)
    c.watch({}, () => clientModuleMap.delete(file))
  }
  if (module.default) module = module.default
  return module
}

function handleRender(req, res) {
  axios.get('http://localhost:3001/api/services/v1/books') // intital call so you have all need initial load assets
    .then((response) => {
      // const html = JSON.stringify(response.data)
      // res.render('index', { html, title: 'Universal React' })
      const store = createStore(reducers, { books: { books: response.data } })
      const initialState = JSON.stringify(store.getState()) // look into script injection attack protection

      const Routes = {
        routes: routes(),
        location: req.url
      }

      match(Routes, (error, redirect, props) => {
        if (error) {
          res.status(500).send('Error fullfilling the request')
        } else if (redirect) {
          res.status(302, redirect.pathname + redirect.search)
        } else if (props) {
          // const context = {}
          const reactComponent = renderToString(
            <Provider store={store}>
              <RouterContext {...props} />
            </Provider>
          )
          res.status(200).render('index', { reactComponent, initialState, title: 'Universal 2' })
        } else {
          res.status(404).send('Not Found')
        }
      })
    })
    .catch((err) => {
      console.log('#Intitial Server-side rendering error', err) // eslint-disable-line
    })
}

module.exports = handleRender
