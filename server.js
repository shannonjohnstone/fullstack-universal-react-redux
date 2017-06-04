"use strict"

const express = require('express')
const path = require('path')
const app = express()

// middleware for difining folder for static files
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile((path.resolve(__dirname, 'public', 'index.html')))
})

app.listen(3000, function() {
   console.log('app is listening on port http://localhost:3000')
})
