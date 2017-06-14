const express = require('express')

const router = express.Router()

const cartControllers = require('../controllers/cart')
const { catchErrors } = require('../handlers/errorHandlers')

/* GET users listing. */
router.get('/', catchErrors(cartControllers.fetchCart))
router.post('/', catchErrors(cartControllers.addToCart))
// router.post('/', catchErrors(booksControllers.createBooks))
// router.delete('/:id', catchErrors(booksControllers.deleteBooks))
router.put('/:_id', catchErrors(cartControllers.updateQty))
router.post('/endSession', (req, res) => {
  req.session.cart = undefined
  req.session.save((err) => {
    if (err) console.log(err, 'addToCart error') // eslint-disable-line
    res.json({ SESSION_ENDED: req.session.cart })
  })
})

router.use('/api/services/v1/cart', router)

module.exports = router
