import 'babel-polyfill'
import axios from 'axios'
import path from 'path'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import requireFromString from 'require-from-string'
import serialize from 'serialize-javascript'
import reducers from './src/reducers'
import App from './src/App'

const { createElement: h } = require('react')

// const compiler = require('webpack')(require('./webpack.config.js'))
//
// const getCompiler = filename => (compiler.compilers && compiler.compilers.find(x => x.options.output.filename.endsWith(filename))) || compiler
//
// // const getHtml(appHtml, script) => {
// //   document.getElementById('app').innerHTML = appHtml
// // }
//
// const clientModuleMap = new Map()
// const getClientModule = (file) => {
//   let module = clientModuleMap.get(file)
//   if (!module) {
//     const c = getCompiler(file)
//     const filename = path.join(c.outputPath, file)
//     const content = c.outputFileSystem.readFileSync(filename, 'utf8')
//     module = requireFromString(content, filename)
//     clientModuleMap.set(file, module)
//     c.watch({}, () => clientModuleMap.delete(file))
//   }
//   if (module.default) module = module.default
//   return module
// }

function handleRender(req, res) {
  // const reducer = getClientModule('reducer.js')
  // const App = getClientModule('App.js')
  const store = createStore(reducers)
  const context = {}
  const appHtml = renderToString(
    h(Provider, { store },
      h(StaticRouter, { location: req.url, context },
        h(App))
  ))

  if (context.url) {
    // res.redirect(302, context.url)
    res.send('error redirect')
  } else {
    // const preloadedState = `<script>window.__PRELOADED__STATE=${serialize(store.getState())}</script>`
    // const preloadedState = `window.__PRELOADED__STATE=${serialize(store.getState())}`
    // console.log(JSON.stringify(store.getState()), 'SSR Store')
    const state = JSON.stringify(store.getState()).trim()
    const preloadedState = `window.__PRELOADED__STATE=${state}`
    // res.status(200).render('index', { appHtml, preloadedState, title: 'Universal 2' })
    res.status(200).render('index', { appHtml, preloadedState, title: 'Universal 2' })
  }
}

module.exports = handleRender
