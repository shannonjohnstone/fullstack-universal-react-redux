const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.Promoise = global.Promise

const booksSchema = new Schema({
  title: String,
  description: String,
  images: String,
  price: Number
})

const Books = mongoose.model('Books', booksSchema)
module.exports = Books
