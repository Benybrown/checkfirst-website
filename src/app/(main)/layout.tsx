import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { AuraBackground } from "@/components/AuraBackground";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LanguageProvider>
      <AuraBackground />
      <Header />
      <main className="relative z-10 pt-28">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
