import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://dhp.cryptosidao.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Diamond Hands Protocol — Paper hands fund diamond hands. On-chain. Forever.",
  description:
    "A permissionless vault factory on Base. Every tax event pays holders as dividends and burns tokens. The longer you hold, the more you earn from those who don't.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Diamond Hands Protocol",
    description: "Paper hands fund diamond hands. On-chain. Forever.",
    type: "website",
    url: SITE_URL,
    siteName: "Diamond Hands Protocol",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Diamond Hands Protocol — paper hands fund diamond hands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Hands Protocol",
    description: "Paper hands fund diamond hands. On-chain. Forever.",
    images: ["/og.png"],
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem('dhp-theme');if(t!=='light'&&t!=='dark'){t='light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Diamond Hands Protocol",
  alternateName: "DHP",
  url: SITE_URL,
  description:
    "A permissionless vault factory on Base. Every tax event pays holders as dividends and burns tokens.",
  applicationCategory: "FinanceApplication",
  publisher: {
    "@type": "Organization",
    name: "CryptoSI DAO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f7faff" />
        <meta name="color-scheme" content="dark light" />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
        <body>
        {children}
        <script src={`${process.env.BASE_PATH || ""}/site.js`} defer></script>
      </body>
    </html>
  );
}
