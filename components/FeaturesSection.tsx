export default function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Automated Assessments',
      description: 'Streamline vendor onboarding with intelligent, automated risk questionnaires and assessments.',
    },
    {
      icon: '🔍',
      title: 'Continuous Monitoring',
      description: 'Monitor third-party risks in real-time with automated alerts and compliance updates.',
    },
    {
      icon: '📋',
      title: 'Compliance Management',
      description: 'Maintain compliance across frameworks: SOC 2, ISO 27001, GDPR, HIPAA, and more.',
    },
    {
      icon: '📊',
      title: 'Risk Scoring Engine',
      description: 'Advanced algorithms calculate dynamic risk scores based on vendor health and vulnerabilities.',
    },
    {
      icon: '📈',
      title: 'Analytics & Reporting',
      description: 'Comprehensive dashboards and exportable reports for board-level risk visibility.',
    },
    {
      icon: '⚙️',
      title: 'Workflow Automation',
      description: 'Automate approvals, escalations, and remediation workflows with custom logic.',
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Enterprise Risk Management</h2>
          <p className="text-xl text-gray-600">
            Everything you need to manage third-party risks effectively
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl p-8 shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
