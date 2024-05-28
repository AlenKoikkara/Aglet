const Product = require('../models/productModel')
const mongoose = require('mongoose')

// get all products
const getProducts = async (req, res) => {
  const excludeFields = ["limit", "page", "productCount"];
  const querObj = {...req?.query};
  excludeFields.forEach((item) => {
    delete querObj[item];
  })
  const count = await Product.countDocuments(querObj)
  const skip = (req?.query?.page || 0) * (req?.query?.productCount || 20);
  const products = await Product.find(querObj).limit(req?.query?.limit || "").skip(skip);
  const pageCount = Math.round(count / req?.query?.productCount)
  if (!products) {
    return res.status(404).json({ error: "no products" });
  }
  res.status(200).json({productCount:count,products:products})
}

// get a single product
const getProduct = async (req, res) => {
  const { id } = req?.params || '';

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const product = await Product.findById(id)

  if (!products) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(products)
}

const getFeatured = async (req, res) => {
  const queryObj = req.body
  const products = await Product.find(queryObj).limit(4)
  if (!products) {
    return res.status(404).json({ error: "no products" });
  }
  res.status(200).json(products)
}



module.exports = {
  getProducts,
  getProduct,
  getFeatured
}