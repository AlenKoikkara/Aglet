const express = require('express')
const {
  getUser,
  addUser 
} = require('../controllers/userController')

const router = express.Router()

// router.get('/:id', updateUser)

// GET a single workout
router.get('/:id', getUser)

router.post('/id', addUser)



module.exports = router