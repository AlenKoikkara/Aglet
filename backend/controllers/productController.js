const Product = require('../models/productModel')
const mongoose = require('mongoose')

// get all products
const getProducts = async (req, res) => {
  const excludeFields = ["limit", "page", "productCount"];
  const querObj = {...req?.query};
  excludeFields.forEach((item) => {
    delete querObj[item];
  })
  const products = await Product.find(querObj).limit(req?.query?.limit || "");
  if (!products) {
    return res.status(404).json({ error: "no products" });
  }
  res.status(200).json({products:products})
}

const getPaginatedProducts = async (req, res) => {
  const page = parseInt(req?.query?.page)
  const excludeFields = ["limit", "page", "productCount"];
  const querObj = {...req?.query};
  excludeFields.forEach((item) => {
    delete querObj[item];
  })
  const data = await Product.countDocuments(querObj)
  const start = page * req?.query?.limit
  const end = start + parseInt(req?.query?.limit)
  const products = await Product.find(querObj).limit(req?.query?.limit || "").skip(start);
  const nextPage = end < data ? page + 1 : null
  if (start > data) {
    return res.status(404).json({ error: "Invalid Page" });
  }
  res.status(200).json({nextPage: nextPage, products:products})
}

// get a single product
const getProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'})
  }

  const product = await Product.findById({_id: id})

  if (!product) {
    return res.status(404).json({error: 'No such product'})
  }

  res.status(200).json(product)
}

const getFeatured = async (req, res) => {
  const queryObj = req.body
  const products = await Product.find(queryObj).limit(6)
  if (!products) {
    return res.status(404).json({ error: "no products" });
  }
  res.status(200).json(products)
}



module.exports = {
  getProducts,
  getProduct,
  getFeatured,
  getPaginatedProducts
}