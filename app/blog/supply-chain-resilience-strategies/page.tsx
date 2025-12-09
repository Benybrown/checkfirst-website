import Link from 'next/link';

export default function SupplyChainResilienceStrategies() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 mb-4">Blog Post</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Building a Resilient Supply Chain
          </h1>
          <p className="text-xl text-blue-100">
            Expert Strategies for Managing Third-Party Risks at Scale
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Resilience has become the new currency of global supply chains. With rapid shifts in market conditions, geopolitical uncertainty, and the rising complexity of vendor ecosystems, organizations are realizing that managing third-party risk at scale is essential for long-term stability and performance. The challenge? Modern supply chains span continents, technologies, and business models—making the risk landscape broader and more dynamic than ever.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Understanding the Modern Risk Landscape</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As supply chains expand, so does the dependency on third parties for manufacturing, logistics, technology services, and specialized operations. Each relationship introduces potential vulnerabilities—from cyber and compliance risks to capacity shortages and environmental disruptions. Without structured oversight, even a single weak link can cause cascading failures throughout the organization.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Core Strategies for Large-Scale Third-Party Risk Management</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Establish Holistic Supply Chain Visibility</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Visibility is the foundation of resilience. Organizations must move beyond spreadsheets and fragmented systems to build a unified view of all vendors, their geographic footprint, and their dependencies. Multi-tier mapping enables teams to spot concentration risks and monitor how upstream events could impact downstream operations.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Use Risk-Based Segmentation to Prioritize Efforts</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Trying to evaluate every supplier equally slows teams down and dilutes impact. Instead, classify vendors based on criticality, operational reliance, data access, and disruption potential. High-risk and high-impact suppliers should undergo deeper assessments and more frequent reviews.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Implement Continuous, Real-Time Risk Intelligence</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Point-in-time assessments are no longer effective. Conditions change quickly, and organizations need ongoing intelligence to detect early signs of trouble—such as financial instability, cyber incidents, political changes, or supply shortages. Automated monitoring tools help teams shift from reactive firefighting to proactive prevention.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Strengthen Redundancy and Alternative Sourcing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A resilient supply chain is designed with flexibility in mind. Build backup supplier relationships, diversify production locations, and conduct scenario planning to understand how disruptions could affect your most essential operations. Resilience often lies in the options you create before you need them.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Elevate Supplier Collaboration and Performance Management</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Suppliers are extensions of your business. Clear expectations around security, compliance, and continuity planning should be built into contracts and reinforced through ongoing communication. Regular performance reviews and joint improvement programs help strengthen reliability across the network.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Leverage Technology to Scale Governance</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Managing hundreds of third parties manually is unrealistic. Modern supply chain risk platforms automate workflows, centralize documentation, streamline assessments, and provide data-driven insights. With the right technology, risk teams can monitor third-party ecosystems efficiently and make faster, more confident decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Resilience Is a Strategic Advantage</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Organizations that invest in supply chain resilience are better positioned to maintain continuity, protect revenue, and adapt to disruption. Resilience is not just about avoiding risk—it's about enabling growth. When companies trust their vendor ecosystem, they can innovate faster, enter new markets with confidence, and outperform competitors during uncertain times.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Building a resilient supply chain requires foresight, discipline, and the willingness to evolve. As third-party networks continue to scale, those who modernize their risk-management approach today will be the ones shaping tomorrow's industry leaders.
            </p>

            <div className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] rounded-xl p-8 mt-12 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Build Supply Chain Resilience?</h3>
              <p className="mb-6 text-blue-100">
                CheckFirst helps organizations manage third-party risks at scale with AI-powered assessments, continuous monitoring, and automated workflows.
              </p>
              <Link href="/#contact" className="inline-block bg-white text-[#0F4C81] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Get Started
              </Link>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t">
            <Link href="/#resources" className="text-[#0F4C81] font-semibold hover:underline">
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
