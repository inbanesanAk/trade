import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) return NextResponse.json({error:'Add OPENAI_API_KEY in Vercel Environment Variables.'},{status:503});
    const {messages} = await req.json();
    if (!Array.isArray(messages)) return NextResponse.json({error:'Invalid chat messages.'},{status:400});
    const client = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
    const safeMessages = messages.slice(-12).map((m:any)=>({role:m.role==='assistant'?'assistant' as const:'user' as const,content:String(m.content).slice(0,5000)}));
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        {role:'system',content:'You are TradeWise, a patient trading educator focused on Indian markets (NSE, BSE, Nifty 50, Bank Nifty) and global context. Explain concepts in beginner-friendly language, distinguish facts from assumptions, and never invent live prices, market data, news, profits, or losses. If current data is not provided, say you cannot verify it and ask the user to share a source or data. Do not give personalized buy/sell instructions or promise returns. Emphasize risk management, paper trading, and that derivatives can cause substantial losses.'},
        ...safeMessages
      ],
      temperature:0.4
    });
    return NextResponse.json({reply:completion.choices[0]?.message?.content || 'I could not generate a response.'});
  } catch(e:any) {
    return NextResponse.json({error:e?.message || 'Chat request failed.'},{status:500});
  }
}
