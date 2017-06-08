const express = require('express')

const router = express.Router()
const booksControllers = require('../controllers/books')
const { catchErrors } = require('../handlers/errorHandlers')

/* GET users listing. */
router.post('/books', catchErrors(booksControllers.createBooks))
router.delete('/books/:id', catchErrors(booksControllers.deleteBooks))
router.put('/books/:id', catchErrors(booksControllers.udpateBook))

module.exports = router
