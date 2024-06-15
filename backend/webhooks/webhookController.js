const stripe = require("stripe")(process.env.STRIPE_KEY);

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


module.exports = {
  placeorder_webhook
};
