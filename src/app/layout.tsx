import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Geist, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import PostHogPageView from "@/components/PostHogPageView";
import { PHProvider } from "./providers";
import { defaultOgImage, defaultTwitterImages } from "@/lib/seo";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const logoFont = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-logo", display: "swap", weight: ["400", "500"] });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://checkfirst.io"),
  title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
  description:
    "CheckFirst helps teams run vendor security assessments, supplier due diligence, TPRM software workflows, and managed third-party risk management faster with AI-assisted review.",
  icons: {
    icon: "/logo-mark.svg",
  },
  openGraph: {
    title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
    description:
      "Run faster vendor security assessments, supplier due diligence, TPRM software workflows, and AI-assisted third-party risk reviews in one platform.",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
    description:
      "Run faster vendor security assessments, supplier due diligence, TPRM software workflows, and AI-assisted third-party risk reviews in one platform.",
    images: defaultTwitterImages,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${logoFont.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CheckFirst",
              "url": "https://checkfirst.io",
              "logo": "https://checkfirst.io/logo.svg",
              "sameAs": [
                "https://www.linkedin.com/company/checkfirstsecurity/"
              ]
            })
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P9C2NQ87BK"
          strategy="afterInteractive"
        />
        <Script id="ga4-consent" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{analytics_storage:'denied'});gtag('js',new Date());gtag('config','G-P9C2NQ87BK');try{if(localStorage.getItem('cookie-consent')==='accepted'){gtag('consent','update',{analytics_storage:'granted'})}}catch(e){}`}
        </Script>
      </head>
      <body>
        <PHProvider>
          <PostHogPageView />
          {children}
          <CookieBanner />
        </PHProvider>
      </body>
    </html>
  );
}
