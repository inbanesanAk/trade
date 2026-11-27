# TradeWise — Personal Indian Markets Learning Desk

Personal-use Next.js app for learning Indian markets. It is not a broker, does not place orders and does not provide personalized investment advice.

## Included
- 60-day India-first learning roadmap with browser-local lesson progress
- Daily analysis framework clearly labelled as a demo/template (no fabricated live prices)
- Beginner knowledge quiz with explanations
- Paper-trading journal stored in this browser only
- OpenAI-powered educational chat through a server-side API route
- Chat input validation, bounded history/message length, timeout and generic client errors

## Local setup
1. Install Node.js 18.17 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add your OpenAI API key to `.env.local`. Never put it in browser code or commit it.
5. Run `npm run dev` and open http://localhost:3000.

## Vercel deployment
1. Push this folder to your private GitHub repository (recommended for a personal site).
2. Import the repository in Vercel. If the repository contains the parent folder, set Root Directory to `tradewise-vercel-starter`.
3. Add `OPENAI_API_KEY` and optionally `OPENAI_MODEL` in Vercel → Project → Settings → Environment Variables.
4. Deploy, then test the chat.

## Suggested ₹1,500/month budget
- Start with no paid market-data subscription. Use trusted public sources for manual learning notes; the app labels unverified data clearly.
- Set a small OpenAI API usage budget/alert in the OpenAI Platform and review actual usage. API usage is billed separately from ChatGPT subscriptions.
- Keep Vercel on its free/low-usage tier initially, subject to current plan limits.
- Do not buy a live feed yet. TrueData's published pricing page says its workspace plans do not include API access and API access requires separate application/approval. Confirm actual API pricing and personal-use rights before paying.
- Global Datafeeds says its APIs are for individual personal use; commercial use requires separate exchange agreements. Verify the exact plan, price, coverage and terms directly.

## Market-data plan
This version deliberately does not scrape NSE/BSE pages or invent prices. Use the Daily Analysis page as a fact-checking template and manually record dated figures with source links. A later integration should use a provider whose contract permits your exact personal use and deployment model. Do not redistribute licensed data publicly.

## Privacy and limitations
- Roadmap progress and journal entries are stored in browser localStorage on this device only. Clearing browser storage deletes them.
- Chat messages are sent to the server-side route and then to OpenAI. Do not enter broker passwords, API secrets or account numbers.
- The chat route validates input but does not include persistent rate limiting or authentication. Keep deployment private; add both before public access.
- Daily Analysis is not an automated report or live data feed. Chat does not browse the web or retrieve current market data.
- OpenAI API key and API billing are required for AI chat.
