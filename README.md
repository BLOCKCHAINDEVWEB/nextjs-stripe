## Getting Started

Create a .env file copy and paste the .env-sample file  
Completed the global variable environnement with your Stripe account keys
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<stripe-public-key>
STRIPE_SECRET_KEY=<stripe-secret-key>
```

npm install dependencies
```bash
$ npm i
```

Download the command line interface Stripe  

Open a console of terminal  
Running the stripe event local
```bash
$ sripe login
$ stripe listen --forward-to localhost:3000/api/stripe-hook
```

Completed the global variable environnement with your Stripe account keys
```bash
STRIPE_WEBHOOK_SECRET=<stripe-webhook-key>
```

Running the app
```bash
$ npm run dev
```

Open your browser with the url: http://localhost:3000  

Open a second console of terminal
Running a stripe trigger local
```bash
$ stripe trigger payment_intent.succeeded
```
