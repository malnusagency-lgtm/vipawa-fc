import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vipawafc.com"),
  title: "Vipawa Ladies FC | Talent into Power",
  description: "Official website of Vipawa Ladies FC. Nurturing young women through football excellence. Based in Nairobi, Kenya.",
  openGraph: {
    title: "Vipawa Ladies FC | Talent into Power",
    description: "Nurturing young women through football excellence. Based in Nairobi, Kenya.",
    url: "https://vipawafc.com",
    siteName: "Vipawa Ladies FC",
    images: [
      {
        url: "/images/gallery/gallery-3.jpeg",
        width: 1200,
        height: 630,
        alt: "Vipawa Ladies FC Squad",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        <LenisProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
