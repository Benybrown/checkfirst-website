import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibmPlexSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
