import './globals.css';
import { Header } from '../components/header';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
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
            <Header />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
