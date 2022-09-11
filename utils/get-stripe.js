import { loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = (publishableKey) => {
  if (!stripePromise) {
    stripePromise = loadStripe(publishableKey)
  }
  return stripePromise
}

export default getStripe
