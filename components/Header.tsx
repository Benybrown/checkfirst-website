'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/60 backdrop-blur-md border-b border-purple-500/20">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold uppercase text-white" style={{textShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(139, 92, 246, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.1)'}}>
          checkfirst<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-white hover:text-cyan-400 transition">
            Features
          </Link>
          <Link href="/#pricing" className="text-white hover:text-cyan-400 transition">
            Pricing
          </Link>
          <Link href="/case-studies" className="text-white hover:text-cyan-400 transition">
            Case Studies
          </Link>
          <Link href="/blog" className="text-white hover:text-cyan-400 transition">
            Blog
          </Link>
          <Link href="/#contact" className="text-white hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition">
            Sign In
          </Link>
          <Link href="/#contact" className="btn-primary">
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
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
        <div className="md:hidden bg-gradient-to-b from-slate-900/90 to-slate-900/80 backdrop-blur-md border-t border-purple-500/20">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link href="/#features" className="text-white hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="/#pricing" className="text-white hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/case-studies" className="text-white hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
              Case Studies
            </Link>
            <Link href="/blog" className="text-white hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/#contact" className="text-white hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition" onClick={() => setMenuOpen(false)}>
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
