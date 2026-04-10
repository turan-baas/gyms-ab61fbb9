import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PinriseBanner from '@/components/PinriseBanner';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CrossFit Prati — Il Primo Box CrossFit nel Cuore di Roma",
  description:
    "CrossFit Prati: allenamento funzionale, classi di gruppo e coaching personalizzato nel quartiere Prati, Roma. Prenota la tua prova gratuita.",
  keywords: [
    "CrossFit Roma",
    "CrossFit Prati",
    "allenamento funzionale Roma",
    "palestra Prati Roma",
    "fitness Roma centro",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}        <PinriseBanner />
              
{/* Pinrise Sales Banner */}
<script src="https://portal.pinrise.io/api/portal/banner.js?id=ab61fbb9-9e16-4c3b-980e-72dc3e9b7437" defer></script>
      </body>
    </html>
  );
}
