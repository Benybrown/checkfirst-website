import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

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
  title: "CheckFirst — AI-Powered Vendor Security Assessments & TPRM Platform",
  description:
    "CheckFirst replaces slow, manual vendor security assessments with instant AI analysis. Assess vendors against 243+ CSA controls in minutes. 45+ frameworks supported.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CheckFirst — AI-Powered Vendor Security Assessments & TPRM Platform",
    description:
      "Replace slow vendor assessments with instant AI analysis. 243 CSA controls, ProvEye scanning, and smart questionnaires in one platform.",
    type: "website",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P9C2NQ87BK"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-P9C2NQ87BK');`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
