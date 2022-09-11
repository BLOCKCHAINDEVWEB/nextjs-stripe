import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(req, res) {
  const { item } = req.body

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://stripe-checkout-next-js-demo.vercel.app'

  const transformedItem = {
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: {
        images: [item.image],
        name: item.name,
        description: item.description,
      },
    },
    quantity: item.quantity,
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [transformedItem],
      mode: 'payment',
      success_url: `${redirectURL}?status=success`,
      cancel_url: `${redirectURL}?status=cancel`,
      metadata: {
        images: item.image,
      },
    })

    return res.status(200).json({ id: session.id })
  } catch (error) {
    console.error(error)
    return res.status(500).end({ message: 'Internal Server Error' })
  }
}

export default CreateStripeSession
