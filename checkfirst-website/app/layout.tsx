import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CHECKFIRST - AI-Powered Third-Party Risk Management',
  description: 'CHECKFIRST leverages AI agents and comprehensive security frameworks to automate and accelerate your security assessments.',
  keywords: ['TPRM', 'Third-Party Risk Management', 'AI Security', 'Security Assessments', 'Vendor Risk', 'Compliance'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-light dark:bg-background-dark font-display text-white">
        {children}
      </body>
    </html>
  )
}
