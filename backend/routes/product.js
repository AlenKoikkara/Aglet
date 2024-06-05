const express = require('express')
const {
  getProducts, 
  getProduct,
  getFeatured,
  getPaginatedProducts
} = require('../controllers/productController')

const router = express.Router()
router.get('/paginated', getPaginatedProducts)

router.get('/featured', getFeatured)

router.get('/:id', getProduct)


router.get('/', getProducts)



module.exports = router