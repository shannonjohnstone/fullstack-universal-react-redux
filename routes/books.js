const express = require('express')

const router = express.Router()
const booksControllers = require('../controllers/books')
const { catchErrors } = require('../handlers/errorHandlers')

/* GET users listing. */
router.get('/', catchErrors(booksControllers.fetchBooks))
router.post('/', catchErrors(booksControllers.createBooks))
router.delete('/:id', catchErrors(booksControllers.deleteBooks))
router.put('/:id', catchErrors(booksControllers.updateBook))

router.use('/services/v1/books', router)

module.exports = router
