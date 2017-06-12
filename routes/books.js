const express = require('express')

console.log('books...');
const router = express.Router()
const booksControllers = require('../controllers/books')
const { catchErrors } = require('../handlers/errorHandlers')

/* GET users listing. */
router.get('/', catchErrors(booksControllers.fetchBooks))
// router.get('/', (req, res) => {
//   console.log('in fetchBooks function')
//   res.json({ books: '/books' })
// })

router.post('/', catchErrors(booksControllers.createBooks))
router.delete('/:id', catchErrors(booksControllers.deleteBooks))
router.put('/:id', catchErrors(booksControllers.updateBook))

router.use('/api/services/v1/books', router)

module.exports = router
