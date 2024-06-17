const stripe = require("stripe")(process.env.STRIPE_KEY);
const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");

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
    metadata: {
      customerDb_id: req.body?.userId
    },
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

const addOrder = async (checkoutObject) => {
  const item = await Cart.find({
    emailId: checkoutObject.customer_details.email,
  });
  console.log(item)
  const orderObj = {
    userId: checkoutObject.metadata.customerDb_id,
    emailId: checkoutObject.customer_details.email,
    order: item
  }
  console.log(orderObj)
  const order = await Order.create(orderObj).catch((error) => {
    console.log(error.message);
  })
  console.log(order);
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
