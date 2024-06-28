const mongoose = require("mongoose");
const Favourite = require("../models/favouriteModel");

const addFav = async (req, res) => {
  const { userId, favouriteItem } = req.body; // Destructure userId and cart from request body
  try {
    let favCart = await Favourite.findOne({ userId });
    if (!favCart) {
      // If user cart doesn't exist, create a new cart document
      favCart = new Favourite({
        userId,
        emailId: req.body.emailId, // Assuming emailId is also sent in the request body
        favourites: favouriteItem, // Initialize with the entire cart from request body
      });
      await favCart.save();
    } else {
      // If user cart exists, update the cart items
      favouriteItem.forEach((item) => {
        const existingItem = favCart.favourites.find(
          (i) => i.productId === item.productId
        );
        if (!existingItem) {
          favCart.favourites.push({
            productId: item.productId,
            productName: item.productName,
            subCategory: item.subCategory,
            company: item.company,
            imageUrl: item.imageUrl,
            listPrice: item.listPrice,
          });
        }
      });
      // Save the updated cart document
      await favCart.save();
    }
    favCart = await Favourite.findOne({ userId });
    res.status(200).json(favCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

const removeFav = async (req, res) => {
  const { userId, productId } = req.body; // Destructure userId and cart from request body

  try {
    let favCart = await Favourite.findOne({ userId });
    if (favCart) {
      const itemIndex = favCart.favourites.findIndex(
        (i) => i.productId === productId
      );
      favCart.favourites.splice(itemIndex, 1); // Remove the item if count is zero

      if (favCart.favourites.length === 0) {
        await Favourite.deleteOne({ userId });
      } else {
        await favCart.save();
      }
    }
    favCart = await Favourite.findOne({ userId });
    res.status(200).json(favCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

const getFav = async (req, res) => {
  const { id } = req.params;
  try {
    const favCart = await Favourite.findOne({ userId: id });
    res.status(200).json(favCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

module.exports = {
  addFav,
  getFav,
  removeFav,
};
