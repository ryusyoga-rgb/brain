import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Plants vs Brainrots Wiki & Codes (Sep 2025) Guide",
  description:
    "Discover the Plants vs Brainrots Wiki (Sep 2025). Find working codes, plant stats, brainrot income, rebirth tips, gears, fusion recipes, and boss guides.",
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
    <head>
      <link rel="canonical" href="https://www.plantsvsbrainrotsgame.online" />
      <link rel="icon" href="/images/logo.png" type="image/png" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
      <meta property="og:image" content="https://www.plantsvsbrainrotsgame.online/images/logo.png" />
      <meta name="twitter:image" content="https://www.plantsvsbrainrotsgame.online/images/logo.png" />
    </head>
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



