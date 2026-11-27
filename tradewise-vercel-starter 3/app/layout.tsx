import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'TradeWise — Trading Learning Hub', description: 'Your 60-day Indian markets learning companion.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
