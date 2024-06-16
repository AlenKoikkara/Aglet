const stripe = require("stripe")(process.env.STRIPE_KEY);
const Order = require("../models/orderModel");

const placeOrder = async (req, res) => {

  const customer = await stripe.customers.create({
    metadata: {
      emailId: req.body.emailId,
      userId: req.params.userId,
      cart: JSON.stringify(req.body?.order)
    }
  })

  const line_items = req.body?.order.map((item) => {
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
    customer_email: customer.emailId,
    customer: customer.userId,
    line_items,
    mode: "payment",
    success_url: req.body.success_url,
    cancel_url: req.body.cancel_url,
  });
  res.send({ url: session.url });
};

const addOrder = async (req, res) => {
  const items = JSON.parse(req.metadata.cart)
  console.log(items)
}

const getOrder = async (req, res) => {
  const { id } = req.params;

  const cart = await Cart.findOne({ userId: id });

  res.status(200).json(cart);
};

module.exports = {
  placeOrder,
  getOrder,
  addOrder
};
