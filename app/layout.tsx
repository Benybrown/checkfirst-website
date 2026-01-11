import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import I18nProvider from '@/components/I18nProvider';

export const metadata: Metadata = {
  title: 'TPRM - Enterprise Third-Party Risk Management',
  description: 'Streamline third-party risk management with automated assessments, continuous monitoring, and compliance management. Protect your enterprise from vendor risks.',
  keywords: 'TPRM, third-party risk management, vendor management, compliance, risk assessment',
  openGraph: {
    title: 'TPRM - Enterprise Third-Party Risk Management',
    description: 'Streamline third-party risk management with automated assessments, continuous monitoring, and compliance management.',
    url: 'https://tprm-saas.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white">
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
