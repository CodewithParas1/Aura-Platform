import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import Chatbot from "@/components/ui/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aura | Photography Portfolio & Marketplace",
  description: "Capturing moments that last forever. High-end cinematic photography portfolio and marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${outfit.variable}`}>
      <body className="bg-black text-white antialiased">
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
