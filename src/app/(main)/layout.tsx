import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
