import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: "Harmonia Interior",
  description: "Arquitetura e Desing de interiores",
  creator: "Willer Lucoles",  
  keywords:["Arquitetura", "design de interiores"],
  icons: {
    icon: '/FavIcon/favicon.ico',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
