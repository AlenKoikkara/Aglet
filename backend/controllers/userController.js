const User = require('../models/userModel')
const mongoose = require('mongoose')

const getUser = async(req, res) => {
  const user = await User.findOne({userId: req.params.id});
  if (!user) {
    return res.status(404).json({ error: "no user" });
  }
  res.status(200).json(user)
}

const addUser = async(req, res) => {
  const userObject = {
    userId: req.params.id,
    emailId: req.query.emailId
  }
  await User.create(userObject).then((user) => {
    res.status(200).json(user)
  })
  .catch((error) => {
    res.status(404).json({error: "User already exists"})
  });
}

module.exports = {
  getUser,
  addUser
}