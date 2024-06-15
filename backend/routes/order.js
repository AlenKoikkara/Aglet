const express = require("express");

const { placeOrder } = require("../controllers/orderController");
const router = express.Router();

router.post("/placeorder/:id", placeOrder);


module.exports = router;
