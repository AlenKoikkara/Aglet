const express = require("express");

const { addFav, removeFav, getFav } = require("../controllers/favController");
const router = express.Router();

router.post("/addfavourite", addFav);
router.post("/removefavourite", removeFav);
router.get("/getfavourites/:id", getFav);


module.exports = router;
