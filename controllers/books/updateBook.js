const mongoose = require('mongoose')

const Books = mongoose.model('Books')

module.exports = async (req, res) => {
  const updatedBook = await Books.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
  res.json(updatedBook)
}
