const express = require("express");

const { placeOrder, placeorder_webhook } = require("../controllers/orderController");
const router = express.Router();

router.post("/placeorder/:id", placeOrder);
router.post("/webhook", express.raw({type: 'application/json'}), placeorder_webhook);


module.exports = router;
