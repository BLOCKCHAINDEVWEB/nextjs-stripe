import { buffer } from 'micro'
import Stripe from 'stripe'
import Cors from 'micro-cors'

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
})

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
}

const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
      console.log({ event })
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    switch (event.type) {
      // events stripe type: https://stripe.com/docs/api/events/types
      case 'checkout.session.completed':
        console.log(event.data.object)
        break
      case 'customer.subscription.updated':
        console.log(event.data.object)
        break
      case 'payment_intent.succeeded':
        console.log(event.data.object)
        break
      case 'payment_intent.created':
        console.log(event.data.object)
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }

  res.status(200).json({ received: true })
}

export default cors(webhookHandler)
