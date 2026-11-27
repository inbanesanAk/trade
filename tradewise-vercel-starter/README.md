# TradeWise — Trading Learning Hub

A Next.js starter website for an India-first trading education dashboard.

## Features
- 60-day learning roadmap with completion tracking (saved in browser localStorage)
- Daily market-analysis page with a clearly marked sample template
- ChatGPT-powered tutor through a server-side API route
- Responsive dashboard UI for desktop and mobile

## Run locally
1. Install Node.js 18.17+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add your OpenAI API key to `.env.local` (never put it in client-side code).
5. Run `npm run dev` and open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload this project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository; Vercel should detect Next.js.
4. In Project Settings → Environment Variables, add:
   - `OPENAI_API_KEY` = your OpenAI API key
   - `OPENAI_MODEL` = `gpt-4o-mini` (or a model available to your API account)
5. Deploy. Redeploy after changing environment variables.

## Important limitations / next integrations
- The Daily Analysis page is a sample template, not a live market feed. Do not use the sample as current market data.
- For real daily reports, connect a reputable market-data/news provider and implement a scheduled ingestion job. Verify licensing and NSE/BSE terms before redistributing data.
- For persistent progress across devices, add authentication and a database (e.g. Supabase/Postgres); current progress is stored only in this browser.
- OpenAI API usage is billed separately from a ChatGPT subscription. The API key is required for chat.
- This app is an educational tool, not investment advice. No order execution or brokerage connection is included.
