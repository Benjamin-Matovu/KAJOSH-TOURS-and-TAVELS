import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '../context/AuthContext';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KAJOSH TOURS | Premium Travel Experience',
  description: 'Global Flight, Hotel, and Car Hire Search Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
