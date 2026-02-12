# Google Search Hint Reverse Proxy
This directory contains the source code for building the reverse proxy API endpoint.

## Prerequisites
Before building, make sure you:
1. Sign up for a [CloudFlare Account](https://dash.cloudflare.com/sign-up/workers-and-pages).
2. Install [Node.js & npm](https://nodejs.org/en/download).

## Deployment Steps
1. Clone the repository:
```bash
git clone https://github.com/Lambdadeltaaa/slate.git
cd slate/search-hint
```

2. Install dependencies:
``` 
npm install
```

3. Deploy to Cloudflare Workers:
```
npm run deploy
```
- You will be prompted to log in to your Cloudflare account.
- Follow the on-screen instructions to complete deployment.