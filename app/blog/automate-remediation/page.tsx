import Link from 'next/link';

export default function AutomateRemediation() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 mb-4">Blog Post</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Automating Your Risk Remediation Workflow
          </h1>
          <p className="text-xl text-blue-100">
            How to accelerate vendor remediation with intelligent workflows.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Identifying risks is only half the battle—closing them is where organizations often get stuck. Manual remediation processes slow down decision-making, stretch teams thin, and create audit gaps. Automation transforms remediation from a backlog into a strategic advantage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Automation Matters</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Third-party ecosystems are expanding, and remediation tasks accumulate fast: missing controls, outdated policies, expiring documents, and unresolved incidents. Without automation, teams spend more time chasing vendors than improving security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Key Elements of an Automated Remediation Workflow</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Centralized Issue Tracking</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All remediation actions should live in one place with full visibility. <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a> consolidates issues across assessments, monitoring tools, and internal reviews.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Intelligent Task Routing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tasks should automatically flow to the right vendor contact or internal stakeholder with deadlines, severity levels, and required evidence.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Automated Follow-Ups</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              No more manual reminders. Automated nudges ensure nothing slips through the cracks.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Real-Time Progress Dashboards</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Track remediation status across vendors and generate audit-ready reports instantly.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Evidence Collection Automation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Vendors upload proof directly through <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a>, and controls are verified without additional back-and-forth.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Automating remediation accelerates risk reduction and helps organizations maintain continuous compliance—all while freeing teams from repetitive manual work.
            </p>

            <div className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] rounded-xl p-8 mt-12 text-white">
              <h3 className="text-xl font-bold mb-4">Automate Your Remediation Workflows</h3>
              <p className="mb-6 text-blue-100">
                Checkfirst provides intelligent task routing, automated follow-ups, and real-time dashboards to accelerate vendor risk remediation.
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
