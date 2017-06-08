const mongoose = require('mongoose')

const Books = mongoose.model('Books')

module.exports = async (req, res) => {
  const deleteBook = await (Books.remove({ _id: req.params.id }))
  res.json(deleteBook)
}
