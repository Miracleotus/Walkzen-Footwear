import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { CurrencyProvider } from "@/context/CurrencyContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Progressive Tee | Premium Style",
  description: "Discover Progressive Tee's premium collections—crafted for the modern individual who refuses to compromise on style or quality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-brand-dark text-white antialiased" suppressHydrationWarning>
        <CartProvider>
          <CurrencyProvider>
            <Navbar />
            {children}
            <Footer />
          </CurrencyProvider>
        </CartProvider>
      </body>
    </html>
  );
}
