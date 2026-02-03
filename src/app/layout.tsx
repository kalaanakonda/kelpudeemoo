import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

export const metadata: Metadata = {
  title: 'Restake Oasis',
  description: 'Boost your rewards on ETH with battle-tested, institutional grade liquid restaking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-gray-50 antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
