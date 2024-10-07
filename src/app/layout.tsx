import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const poppins = Poppins({
  weight: ['400','700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="container mx-auto">
        {children}
      </body>
    </html>
  );
}
