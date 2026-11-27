import OpenAI from 'openai';
import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export const maxDuration = 30;
type ChatMessage = { role: 'user' | 'assistant'; content: string };
export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: 'Chat is not configured yet. Add OPENAI_API_KEY in your deployment environment.' }, { status: 503 });
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > 20) return NextResponse.json({ error: 'Send between 1 and 20 chat messages.' }, { status: 400 });
    const messages: ChatMessage[] = [];
    for (const item of body.messages.slice(-10)) {
      if (!item || !['user', 'assistant'].includes(item.role) || typeof item.content !== 'string') return NextResponse.json({ error: 'A message has an invalid role or content.' }, { status: 400 });
      const content = item.content.trim();
      if (!content || content.length > 1600) return NextResponse.json({ error: 'Each message must contain 1–1,600 characters.' }, { status: 400 });
      messages.push({ role: item.role, content });
    }
    if (messages[messages.length - 1]?.role !== 'user') return NextResponse.json({ error: 'The last message must be a user message.' }, { status: 400 });
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 25_000, maxRetries: 1 });
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [{ role: 'system', content: `You are TradeWise, a patient trading educator focused on Indian markets (NSE, BSE, Nifty 50, Bank Nifty) and relevant global context. Teach concepts in beginner-friendly language. Clearly label verified facts, user-provided information, assumptions and examples. You do not have a live market feed or web access in this chat. Never invent current prices, market moves, news, FII/DII flows, option-chain figures, profits or losses. If asked for today's market view, explain that live data is not connected and ask for a timestamped source or figures. Do not give personalized buy/sell instructions, price targets or promises of returns. Emphasize paper trading, position sizing, stop-loss limitations, trading costs and derivatives risk. Treat options and leverage as advanced topics. Keep answers concise and educational.` }, ...messages],
      temperature: 0.3, max_tokens: 650
    });
    return NextResponse.json({ reply: completion.choices[0]?.message?.content || 'I could not generate a response.' });
  } catch (error) {
    console.error('TradeWise chat error:', error);
    return NextResponse.json({ error: 'The chat service could not complete this request. Please try again shortly.' }, { status: 500 });
  }
}
