import Link from 'next/link';

export default function ImplementTPRM30Days() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 mb-4">Blog Post</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to Implement a TPRM Program in 30 Days
          </h1>
          <p className="text-xl text-blue-100">
            A practical roadmap for rapidly deploying third-party risk management without disrupting existing workflows.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Standing up an effective Third-Party Risk Management (TPRM) program doesn't have to take months. With the right structure—and the right technology—you can build a scalable, compliant program in as little as 30 days. The key is focusing on foundational components that deliver immediate visibility while aligning with existing processes, not replacing them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Week 1: Define Scope & Inventory Your Vendors</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Start by identifying who your vendors are, what services they provide, and which ones pose the greatest risk. Prioritize critical vendors that access sensitive data, support customer-facing services, or impact business continuity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tools like <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a> streamline this early mapping, automatically organizing vendor data and giving teams instant visibility into their third-party ecosystem.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Week 2: Build a Risk-Based Assessment Model</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Develop a tiering strategy that classifies vendors based on impact and risk exposure. High-risk vendors should receive deep assessments, while lower-risk ones undergo lighter reviews—ensuring efficiency and speed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Week 3: Roll Out Assessments and Automated Workflows</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Deploy standardized questionnaires, request documentation, and begin evaluation. With traditional manual tools, this step can stall progress. Platforms such as <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a> automate vendor outreach, assessment scoring, and documentation collection to accelerate deployment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Week 4: Launch Monitoring & Remediation Practices</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Implement continuous monitoring to track changes in vendor posture, and introduce remediation workflows to close gaps quickly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              By using <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a>, teams gain centralized dashboards, real-time alerts, and automated tracking—allowing your program to scale long after the initial 30-day launch.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              A fast TPRM rollout is possible when supported by automation, visibility, and risk intelligence—and that's exactly what <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a> delivers.
            </p>

            <div className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] rounded-xl p-8 mt-12 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Launch Your TPRM Program?</h3>
              <p className="mb-6 text-blue-100">
                Checkfirst helps organizations implement TPRM programs quickly with AI-powered assessments, automated workflows, and real-time visibility.
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
