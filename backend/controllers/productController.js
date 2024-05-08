const Product = require('../models/productModel')
const mongoose = require('mongoose')

// get all workouts
const getProducts = async (req, res) => {
  const excludeFields = ["limit"];
  const querObj = {...req.query};
  excludeFields.forEach((item) => {
    delete querObj[item];
  })
  const products = await Product.find(querObj).limit(req.query?.limit || "");
  if (!products) {
    return res.status(404).json({ error: "no products" });
  }
  res.status(200).json(products)
}

// get a single workout
const getProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const product = await Product.findById(id)

  if (!products) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(products)
}



module.exports = {
  getProducts,
  getProduct
}