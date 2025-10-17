import { Poppins, Tomorrow } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], weight: ["400", '500', "600", "700"]
});
const tomorrow = Tomorrow({
  subsets: ["latin"], weight: ["400", '500', "600", "700"]
});

export const metadata = {
  title: "Instant YouTube SEO Generator | Auto-Create Titles, Descriptions & Tags for Maximum Views!",
  description: "Boost your YouTube views instantly! Our AI-powered SEO generator creates optimized titles, descriptions, and tags for your videos in seconds. Try it now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
