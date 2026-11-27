# TradeWise — Personal Indian Markets Learning Desk

A personal-use Next.js learning app for Indian markets. It is an educational tool, not a broker, does not place orders, and does not provide personalized investment advice.

## Included in this project

- 60-day India-first learning roadmap with lesson progress saved in this browser
- Daily analysis framework clearly marked as a demo/template; no live NSE/BSE prices are fetched
- Five-question beginner quiz with explanations
- Paper-trading journal stored in this browser only
- OpenAI educational chat through a server-side API route
- Chat request validation, bounded conversation history, request-size limit, timeout and generic server errors

## Requirements

- Node.js 18.17 or newer
- npm
- An OpenAI API key if you want to use the AI tutor (API billing is separate from a ChatGPT subscription)

## Run locally

1. Open this project folder in a terminal.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local`.
4. Put your key in `.env.local`:

   ```env
   OPENAI_API_KEY=your_key_here
   OPENAI_MODEL=gpt-4o-mini
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:3000.

Do not commit `.env.local`, paste your key into frontend code, or use a `NEXT_PUBLIC_` prefix for the key.

## Deploy to Vercel

1. Push this project folder to your GitHub repository.
2. In Vercel, import that repository. If this project is inside a larger repository, set **Root Directory** to the project folder (currently `tradewise-vercel-starter` if you use the renamed folder in the supplied ZIP).
3. Add `OPENAI_API_KEY` under **Project → Settings → Environment Variables**. Add `OPENAI_MODEL` only if you want to override the default.
4. Deploy and test the learning pages and AI chat.

**Personal-use privacy warning:** this starter does not include user authentication or persistent rate limiting. A Vercel deployment URL is reachable by anyone who has the URL. Do not publish sensitive personal information or leave an API-backed chat endpoint publicly exposed without adding authentication and rate limiting. For a personal site, add an access-control layer before sharing the URL.

## Market data and daily reports

Live market data is not connected. The Daily Analysis page is a learning template and must not be treated as today's market report. The chat assistant has no live market feed or web access and is instructed not to invent current market information.

For now, manually add dated figures only after checking authoritative sources such as NSE, BSE, RBI and SEBI, and keep the source links with the report. A future live-data integration should use a provider whose licence explicitly permits your intended personal use and the way the site is deployed. Do not scrape exchange pages or redistribute licensed data without permission.

## Data storage and limitations

- Lesson progress and journal entries are saved in browser `localStorage` on the current device/browser. They are not synced or backed up; clearing browser data can remove them.
- Chat messages are sent to this app's server-side route and then to OpenAI. Do not enter broker passwords, API secrets, account numbers or other sensitive credentials.
- The app does not connect to a broker, place trades, or calculate live portfolio P&L.
- AI chat requires `OPENAI_API_KEY`. It uses `gpt-4o-mini` by default; actual API cost depends on usage.
- No live feed, automatic daily report publishing, login, or cross-device sync is included in this version.

## Suggested budget discipline (₹1,500/month)

Start without a paid market-data subscription. Set an API usage budget/alert in the OpenAI Platform and review actual usage. Keep hosting on an appropriate low-cost tier and verify current provider terms and prices before purchasing market data. API usage is billed separately from ChatGPT subscriptions.
