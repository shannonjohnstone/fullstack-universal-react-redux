const express = require('express')
const path = require('path')

const app = express()

const publicPath = express.static(path.join(__dirname, 'public'), { redirect: false }) // set path to public folder
const indexPath = path.join(__dirname, 'public/index.html') // set path to index.html
app.use(publicPath) // middleware for difining folder for static files

app.get('/test', (req, res) => {
  res.json({ test: 'value' })
})

app.get('*', (req, res) => {
  console.log('in server...') // eslint-disable-line
  res.sendFile(indexPath)
})

app.listen(3000, () => {
   console.log('app is listening on port http://localhost:3000') // eslint-disable-line
})
