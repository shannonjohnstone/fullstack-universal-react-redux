const express = require('express')

const router = express.Router()
const { catchErrors } = require('../handlers/errorHandlers')
const controllerCreateBooks = require('../controllers/books/createBooks')

/* GET users listing. */
router.post('/books', catchErrors(controllerCreateBooks))
// router.post('/books', controllerCreateBooks)

module.exports = router
