import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Plants vs Brainrots Wiki & Codes (September 2025) | Full Guide",
  description:
    "Discover the complete Plants vs Brainrots Wiki updated for September 2025. Get all working codes, plants list, brainrots income stats, rebirth strategies, gears, fusion recipes, and boss guides to dominate Roblox's newest tower defense game.",
  keywords: [
    "Plants vs Brainrots",
    "Plants vs Brainrots codes",
    "Plants vs Brainrots guide"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P2DDKVT8TK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P2DDKVT8TK');
          `}
        </Script>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
