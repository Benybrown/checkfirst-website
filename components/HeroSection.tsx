import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="gradient-primary text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Enterprise Third-Party Risk Management Made Simple
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Automate vendor assessments, monitor risks continuously, and maintain compliance across your entire supply chain. Trusted by 500+ enterprises managing 50M+ assessments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/#contact" className="btn-primary bg-white text-[#0F4C81] hover:bg-gray-100">
              Start Free Trial
            </Link>
            <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-[#0F4C81]">
              Watch Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="animate-float hidden md:block">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
            <div className="bg-white bg-opacity-5 rounded-lg p-6 space-y-4">
              <div className="h-4 bg-white bg-opacity-20 rounded w-3/4"></div>
              <div className="h-4 bg-white bg-opacity-20 rounded"></div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="h-16 bg-white bg-opacity-10 rounded"></div>
                <div className="h-16 bg-white bg-opacity-10 rounded"></div>
                <div className="h-16 bg-white bg-opacity-10 rounded"></div>
              </div>
              <div className="h-32 bg-white bg-opacity-10 rounded mt-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos */}
      <div className="max-w-7xl mx-auto mt-16 pt-16 border-t border-white border-opacity-20">
        <p className="text-center text-sm text-gray-200 mb-8">Trusted by leading enterprises</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-80">
          {['TechCorp', 'FinanceHub', 'CloudSys', 'SecureNet', 'GlobalTrade', 'DataVault'].map((company) => (
            <div key={company} className="text-center font-semibold text-gray-200">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
