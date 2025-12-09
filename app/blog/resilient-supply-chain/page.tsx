import Link from 'next/link';

export default function ResilientSupplyChain() {
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
              In an increasingly interconnected world, your supply chain is only as strong as its most vulnerable partner. Organizations rely on hundreds—even thousands—of third parties to deliver goods, components, and services. While this ecosystem drives efficiency and innovation, it also introduces growing exposure to operational, cyber, financial, and geopolitical risks. Building a resilient supply chain is no longer optional; it's a strategic imperative.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Third-Party Risk Demands a Scalable Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Traditional risk assessments were built for simpler times—when vendor lists were short, supply chains were linear, and visibility was relatively high. Today's distributed networks require continuous oversight across tiers, regions, and functions. Companies must account not only for direct suppliers but also for subcontractors and 4th–5th-party dependencies. Without scalable processes and technology, it becomes nearly impossible to detect vulnerabilities before they cause disruption.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Strategies for Strengthening Supply Chain Resilience</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Map Your Supply Chain End-to-End</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can't mitigate what you can't see. Start by creating a comprehensive inventory of your third parties, identifying critical suppliers, and understanding upstream and downstream dependencies. Supply chain mapping tools and automated discovery platforms can accelerate transparency.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Conduct Tiered Risk Assessments</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Not all vendors carry the same level of risk. Implement a tiered assessment model that evaluates suppliers based on criticality, data sensitivity, and potential business impact. This helps allocate resources where they matter most and prevents assessment fatigue.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Embed Continuous Monitoring</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Risk is dynamic. Financial volatility, cyber threats, regulatory changes, and geopolitical events can emerge overnight. Continuous monitoring—powered by AI-driven alerts, real-time data feeds, and third-party intelligence—ensures you catch red flags early and respond quickly.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Diversify and Build Redundancy</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Resilience comes from flexibility. Avoid over-reliance on single suppliers or concentrated regions. Build alternative sourcing strategies, maintain safety stock for critical materials, and conduct scenario planning to prepare for disruptions.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Strengthen Collaboration and Communication</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Risk management isn't only about controls—it's about relationships. Share expectations with suppliers, communicate early about potential disruptions, and establish joint business continuity plans. Strong partnerships make rapid recovery possible.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Integrate Technology for Scale</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To manage risk across hundreds of vendors, organizations need automation and intelligent analytics. Modern risk management platforms streamline onboarding, automate assessments, centralize documentation, and provide real-time risk scoring across the entire third-party portfolio.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Competitive Advantage of Resilience</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Organizations that prioritize supply chain resilience gain more than stability—they gain agility, customer trust, and a strategic edge. By proactively identifying vulnerabilities and building strong, adaptable networks, companies position themselves to navigate uncertainty and thrive even during disruption.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Resilient supply chains don't happen by accident. They are intentionally designed, continuously monitored, and powered by collaboration and technology. The companies that invest in these capabilities today will be the ones leading their industries tomorrow.
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
