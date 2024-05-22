const Cart = require('../models/productModel')
const mongoose = require('mongoose')

const addCart = async (req, res) => {
  const userObject = {
    userId: req.params.id,
    emailId: req.query.emailId
  }
  await Cart.create(userObject).then((user) => {
    res.status(200).json(user)
  })
  .catch((error) => {
    res.status(404).json({error: "User already exists"})
  });}

const getCart = async (req, res) => {
  
}

const removeCart = async (req, res) => {
  
}




module.exports = {
  addCart,
  getCart,
  removeCart
}