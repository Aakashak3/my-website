import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'DevAI - Full Stack Developer & AI Automation Expert',
  description: 'Crafting cutting-edge web applications powered by AI. Specializing in automation, prompt engineering, and full-stack development.',
  keywords: 'web development, AI automation, prompt engineering, Next.js, full-stack',
  authors: [{ name: 'DevAI' }],
  creator: 'DevAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devai.com',
    siteName: 'DevAI Portfolio',
    title: 'DevAI - Full Stack Developer & AI Automation Expert',
    description: 'Crafting cutting-edge web applications powered by AI.',
    images: [
      {
        url: 'https://devai.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevAI Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevAI - Full Stack Developer & AI Automation Expert',
    description: 'Crafting cutting-edge web applications powered by AI.',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
