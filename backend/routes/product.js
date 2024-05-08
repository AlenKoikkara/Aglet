const express = require('express')
const {
  getProducts, 
  getProduct,
  getFeatured
} = require('../controllers/productController')

const router = express.Router()

router.get('/featured', getFeatured)

// GET a single workout
router.get('/:id', getProduct)

// GET all workouts
router.get('/', getProducts)



module.exports = router