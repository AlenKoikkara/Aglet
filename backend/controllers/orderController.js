const stripe = require("stripe")(process.env.STRIPE_KEY);
const Order = require("../models/orderModel");

const placeOrder = async (req, res) => {
  let customerObj;

  const customer = await stripe.customers.search({
    query: `email:\'${req.body?.emailId}\'`,
  });
 
  const line_items = req.body?.order.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName,
          images: [item.imageUrl],
        },
        unit_amount: item.listPrice * 100,
      },
      quantity: item.count,
    };
  });

  customerObj = {
    customer_email: req.body?.emailId,
    line_items,
    customer_creation: "always",
    mode: "payment",
    success_url: req.body?.success_url,
    cancel_url: req.body?.cancel_url,
  };

  if (customer.data[0]?.id) {
    customerObj["customer"] = customer.data[0].id;
    delete customerObj.customer_email;
    delete customerObj.customer_creation;
  }
  console.log(customerObj)
  const session = await stripe.checkout.sessions.create(customerObj);
  res.send({ url: session.url });
};

const addOrder = async (req, res) => {
  const items = JSON.parse(req.metadata.cart);
  console.log(items);
};

const getOrder = async (req, res) => {
  const { id } = req.params;

  const cart = await Cart.findOne({ userId: id });

  res.status(200).json(cart);
};

module.exports = {
  placeOrder,
  getOrder,
  addOrder,
};
