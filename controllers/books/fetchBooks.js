const mongoose = require('mongoose')

const Books = mongoose.model('Books')

module.exports = async (req, res) => {
  // const books = await (new Books(req.body)).save()
  console.log('fetchBooks controller...');
  const books = await (Books.find()) // use create instead of the above line so we can insert arrays of objects
  res.json(books)
}
