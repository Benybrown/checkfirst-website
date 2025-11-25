export default function CaseStudies() {
  const cases = [
    {
      title: 'How TechCorp Reduced Vendor Assessment Time by 80%',
      industry: 'Technology',
      challenge: 'Managing third-party risk across 500+ vendors manually',
      solution: 'TPRM automated assessment and monitoring platform',
      results: '80% reduction in assessment time, 100% audit compliance',
    },
    {
      title: 'FinanceHub: Achieving Enterprise-Scale Compliance',
      industry: 'Financial Services',
      challenge: 'Regulatory compliance across multiple jurisdictions',
      solution: 'TPRM with custom compliance workflows',
      results: '3x faster vendor onboarding, zero compliance violations',
    },
    {
      title: 'SecureNet: Real-Time Risk Monitoring Implementation',
      industry: 'Cybersecurity',
      challenge: 'Proactive vendor risk identification',
      solution: 'TPRM continuous monitoring and alerts',
      results: 'Caught 12 critical vendor risks before they became issues',
    },
  ];

  return (
    <main>
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Customer Success Stories</h1>
          <p className="text-xl text-blue-100">
            See how leading enterprises improved their TPRM with our platform
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {cases.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#0F4C81]">
                <span className="text-sm font-semibold text-[#0F4C81]">{caseStudy.industry}</span>
                <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">{caseStudy.title}</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                    <p className="text-gray-600">{caseStudy.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
