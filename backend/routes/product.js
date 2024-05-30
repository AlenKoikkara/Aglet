const express = require('express')
const {
  getProducts, 
  getProduct,
  getFeatured
} = require('../controllers/productController')

const router = express.Router()

router.get('/featured', getFeatured)

router.get('/:id', getProduct)


router.get('/', getProducts)



module.exports = router