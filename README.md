## Getting Started

create a .env file copy and paste the .env-sample file
completed the global varaible environnement with your Strip account keys

npm install dependencies
```bash
$ npm i
```

Running the app
```bash
$ npm run dev
```

Open your browser with the url: http://localhost:3000

Open a console of terminal
Running the stripe event local
```bash
$ sripe login
$ stripe listen --forward-to localhost:3000/api/stripe-hook
```

Open a second console of terminal
Running a stripe trigger local
```bash
$ stripe trigger payment_intent.succeeded
```
