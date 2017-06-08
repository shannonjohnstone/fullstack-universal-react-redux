const mongoose = require('mongoose')

const Books = mongoose.model('Books')

module.exports = async (req, res) => {
  const book = req.body
  const update = {
    $set: {
      title: book.title,
      description: book.description,
      image: book.image,
      price: book.price
    }
  }

  const options = { new: true } // when true returns updated document

  const deleteBook = await (Books.findOneAndUpdate(req.params.id, update, options))
  res.json(deleteBook)
}
