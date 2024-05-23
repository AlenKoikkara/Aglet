const express = require('express');
const {
  addCart,
  getCart,
  removeCart
} = require('../controllers/cartController')

const router = express.Router()


router.post('/add/', addCart);

router.post('', getCart);
router.post('/remove/', removeCart);


module.exports = router