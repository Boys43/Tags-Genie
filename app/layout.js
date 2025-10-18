import { Poppins, Tomorrow } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-tomorrow",
});

export const metadata = {
  title:
    "Instant YouTube SEO Generator | Auto-Create Titles, Descriptions & Tags for Maximum Views!",
  description:
    "Boost your YouTube views instantly! Our AI-powered SEO generator creates optimized titles, descriptions, and tags for your videos in seconds. Try it now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${tomorrow.variable}`}>
      <body className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
