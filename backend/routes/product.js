const express = require('express')
const {
  getProducts, 
  getProduct,
} = require('../controllers/productController')

const router = express.Router()

// GET all workouts
router.get('/', getProducts)

// GET a single workout
router.get('/:id', getProduct)

module.exports = router