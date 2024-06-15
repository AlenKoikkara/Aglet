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

const placeorder_webhook = async(req, res) => {
  const sig = req.headers['stripe-signature'];
  console.log('here')
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.WEBHOOK_SECRET);
  } catch (err) {
    console.log(err.message)
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      console.log(checkoutSessionCompleted)
      // Then define and call a function to handle the event checkout.session.completed
      break;
    case 'payment_intent.created':
      const paymentIntentCreated = event.data.object;
      console.log(paymentIntentCreated)
      // Then define and call a function to handle the event payment_intent.created
      break;
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      console.log(paymentIntentSucceeded)
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
}

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
  placeorder_webhook
};
