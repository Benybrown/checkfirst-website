'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            <span className="text-xl font-bold">CHECKFIRST</span>
          </Link>

          <button
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">Pricing</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-4">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">Pricing</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>
        )}
      </div>
    </header>
  )
}
