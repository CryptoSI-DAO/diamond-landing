import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diamond Hands Protocol — Paper hands fund diamond hands. On-chain. Forever.",
  description:
    "A permissionless vault factory on Base. Every tax event pays holders as dividends and burns tokens. The longer you hold, the more you earn from those who don't.",
  icons: {
    icon: [{ url: "favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Diamond Hands Protocol",
    description: "Paper hands fund diamond hands. On-chain. Forever.",
    type: "website",
    url: "https://cryptosi-dao.github.io/diamond-landing/",
    images: ["https://cryptosi-dao.github.io/diamond-landing/logo-full.png"],
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem('dhp-theme');if(t!=='light'&&t!=='dark'){t='light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script src="site.js" defer></script>
      </body>
    </html>
  );
}
