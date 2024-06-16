const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  order: {
    type: [{}]
  }
})

module.exports = mongoose.model('Order', orderSchema)