import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              TPRM<span className="text-[#00ACC1]">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Enterprise third-party risk management made simple.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#00ACC1] transition">
                Facebook
              </a>
              <a href="#" className="hover:text-[#00ACC1] transition">
                Twitter
              </a>
              <a href="#" className="hover:text-[#00ACC1] transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/#features" className="hover:text-[#00ACC1] transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#00ACC1] transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-[#00ACC1] transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:text-[#00ACC1] transition">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#00ACC1] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#00ACC1] transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00ACC1] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00ACC1] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/resources" className="hover:text-[#00ACC1] transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#00ACC1] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#00ACC1] transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#00ACC1] transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TPRM. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-[#00ACC1] transition">
              Status
            </a>
            <a href="#" className="hover:text-[#00ACC1] transition">
              Support
            </a>
            <a href="#" className="hover:text-[#00ACC1] transition">
              Changelog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
