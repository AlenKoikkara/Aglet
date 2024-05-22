const express = require('express');
const {
  addCart,
  getCart,
  removeCart
} = require('../controllers/cartController')

const router = express.Router()


router.post('', addCart);

router.post('', getCart);
router.post('', removeCart);


module.exports = router