const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  cartId: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  order: {
    type: [{}]
  }
},
{timestamps: true})

module.exports = mongoose.model('Order', orderSchema)