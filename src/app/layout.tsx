import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import PostHogPageView from "@/components/PostHogPageView";
import { PHProvider } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://checkfirst.io"),
  title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
  description:
    "CheckFirst helps teams run vendor security assessments, supplier due diligence, TPRM software workflows, and managed third-party risk management faster with AI-assisted review.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
    description:
      "Run faster vendor security assessments, supplier due diligence, TPRM software workflows, and AI-assisted third-party risk reviews in one platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
    description:
      "Run faster vendor security assessments, supplier due diligence, TPRM software workflows, and AI-assisted third-party risk reviews in one platform.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibmPlexSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CheckFirst",
              "url": "https://checkfirst.io",
              "logo": "https://checkfirst.io/logo.png",
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
