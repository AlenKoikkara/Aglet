const User = require('../models/userModel')
const mongoose = require('mongoose')

const getUser = async(req, res) => {
  const querObj = {...req.query};
  const user = await User.find(querObj);
  if (!user) {
    return res.status(404).json({ error: "no user" });
  }
  res.status(200).json(user)
}

const addUser = async(req, res) => {
  const userObject = {
    userId: req.query.id,
    emailId: req.query.emailId
  }
  const user = await User.find(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "no user" });
  }
  res.status(200).json(user)
}

module.exports = {
  getUser,
  addUser
}