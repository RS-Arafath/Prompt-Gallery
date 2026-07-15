import { Outfit,Inter,JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Toaster } from 'react-hot-toast';
const outfitfonts = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});


const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Prompt Gallery',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${outfitfonts.variable} ${jetBrainsMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar></Navbar>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
          <Footer></Footer>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
