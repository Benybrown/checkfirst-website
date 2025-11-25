export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect Vendors',
      description: 'Invite your third-party vendors to complete risk assessments through our intuitive portal.',
    },
    {
      number: '2',
      title: 'Automated Analysis',
      description: 'Our AI analyzes responses and external data sources to generate dynamic risk scores.',
    },
    {
      number: '3',
      title: 'Continuous Monitoring',
      description: 'Real-time monitoring alerts you to changes in vendor risk profiles and compliance status.',
    },
    {
      number: '4',
      title: 'Take Action',
      description: 'Implement remediation plans and track improvements with built-in workflow management.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Four simple steps to transform your TPRM process
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-gradient-to-br from-[#0F4C81] to-[#00ACC1] text-white rounded-lg p-6 h-full">
                <div className="text-5xl font-bold mb-4 opacity-20">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-12">
                  <svg className="w-8 h-8 text-[#00ACC1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
