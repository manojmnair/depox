import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { Navbar } from '../components/navbar';
import Providers from '../hooks/providers';
import { ThemeProvider } from '../hooks/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Depox',
  description: 'RWA'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="sticky top-0 left-0  w-full bg-white px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-48 z-20">
              <Navbar />
            </div>
            <div className=" bg-slate-100 px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
              {children}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
