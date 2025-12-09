import Link from 'next/link';

export default function SupplyChainRisk() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 mb-4">Blog Post</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Supply Chain Risk Management in 2025
          </h1>
          <p className="text-xl text-blue-100">
            Strategic insights on managing risks across your entire supply chain ecosystem.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Supply chains in 2025 face unprecedented volatility. Economic shifts, cyber threats, political unrest, ESG expectations, and vendor dependencies all contribute to a fast-evolving risk environment. To stay resilient, organizations need a modern approach to supply chain risk management.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Top Priorities for 2025</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Multitier Visibility</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding not just who your suppliers are—but their suppliers—is crucial. Platforms like <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a> help map supplier ecosystems and reveal hidden dependencies.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Continuous Risk Intelligence</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Risk signals—from financial instability to cyber incidents—must be captured instantly. Annual reviews are no longer enough.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. ESG and Regulatory Alignment</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Supply chain governance now includes emissions tracking, labor practices, and data ethics. Automated assessments support easier compliance.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Resilience Through Diversification</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Overreliance on single regions or vendors increases fragility. Organizations are diversifying strategically to reduce exposure.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Workflow Automation at Scale</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              2025 supply chains demand agility. Automated onboarding, assessments, and remediation workflows help reduce bottlenecks and accelerate vendor decisions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a> enables organizations to operationalize these strategies, offering real-time visibility, automation, and intelligence across global vendor networks.
            </p>

            <div className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] rounded-xl p-8 mt-12 text-white">
              <h3 className="text-xl font-bold mb-4">Modernize Your Supply Chain Risk Management</h3>
              <p className="mb-6 text-blue-100">
                Checkfirst provides real-time visibility, automated workflows, and continuous intelligence across your entire vendor network.
              </p>
              <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#0F4C81] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Get Started with Checkfirst
              </a>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-[#0F4C81] font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
