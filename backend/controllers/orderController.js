const Order = require("../models/orderModel");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const placeOrder = async (req, res) => {
  const line_items = req.body.order.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName,
          images: [item.imageUrl]
        },
        unit_amount: item.listPrice * 100,
      },
      quantity: item.count,
    };
  });
  const session = await stripe.checkout.sessions.create({
    customer_email: req.body.emailId,
    customer: req.params.userId,
    line_items,
    mode: "payment",
    success_url: req.body.success_url,
    cancel_url: req.body.cancel_url,
  });
  res.send({ url: session.url });
};

// const removeCart = async (req, res) => {
//   let cart;

//   cart = await Cart.findOneAndUpdate(
//     {
//       userId: req.body.userId,
//       "cart.productId": req.body?.productId,
//       "cart.size": req.body?.size,
//     },
//     { $inc: { "cart.$.count": -1 } },
//     { new: true }
//   ).catch((error) => {
//     return res.status(404).json({ error: error.message });
//   });

//   const item = await Cart.find({
//     userId: req.body.userId,
//     cart: { $elemMatch: { count: 0 } },
//   });
//   console.log(item);
//   if (item.length > 0) {
//     cart = await Cart.findOneAndUpdate(
//       {
//         userId: req.body.userId,
//       },
//       {
//         $pull: {
//           cart: { count: 0 },
//         },
//       },
//       { new: true }
//     );
//   }
//   await Cart.deleteOne({ cart: { $exists: true, $size: 0 } });
//   res.status(200).json(cart);
// };

const getOrder = async (req, res) => {
  const { id } = req.params;

  const cart = await Cart.findOne({ userId: id });

  res.status(200).json(cart);
};

module.exports = {
  placeOrder,
  getOrder,
};
