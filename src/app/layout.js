import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Recharts Next.js',
  description: 'An example of using Recharts with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950 text-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
