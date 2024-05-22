const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  displayPicture: {
    type: String
  },
  emailId: {
    type: String,
    required: true
  },
  cart: {
    type: [{}]
  },
  orderHistory: {
    type: [{}]
  }
})

module.exports = mongoose.model('User', userSchema)