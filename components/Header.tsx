'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#0F4C81]">
          TPRM<span className="text-[#00ACC1]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-gray-700 hover:text-[#0F4C81] transition">
            Features
          </Link>
          <Link href="/#pricing" className="text-gray-700 hover:text-[#0F4C81] transition">
            Pricing
          </Link>
          <Link href="/case-studies" className="text-gray-700 hover:text-[#0F4C81] transition">
            Case Studies
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-[#0F4C81] transition">
            Blog
          </Link>
          <Link href="/#contact" className="text-gray-700 hover:text-[#0F4C81] transition">
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-[#0F4C81] hover:underline">
            Sign In
          </Link>
          <Link href="/#contact" className="btn-primary">
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link href="/#features" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="/#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/case-studies" onClick={() => setMenuOpen(false)}>
              Case Studies
            </Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
            <Link href="/#contact" className="btn-primary w-full text-center" onClick={() => setMenuOpen(false)}>
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
