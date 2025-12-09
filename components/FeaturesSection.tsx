export default function FeaturesSection() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Intelligence',
      description: 'Accelerate due diligence with AI-driven research, assessments, and reporting.',
    },
    {
      icon: '🎯',
      title: 'Adaptive Smart Assessments',
      description: 'Leverage dynamic questionnaires that automatically adjust based on responses.',
    },
    {
      icon: '🔄',
      title: 'Risk Lifecycle Management',
      description: 'Identify, evaluate, treat, and monitor every risk with automated workflows.',
    },
    {
      icon: '✅',
      title: 'Automated Task Management',
      description: 'Turn risk findings into action with auto-assigned remediation tasks, team ownership, and real-time implementation status tracking.',
    },
    {
      icon: '🔍',
      title: '360° Supplier Intelligence',
      description: 'Get a comprehensive view of any supplier—from risk history to security documentation—powered by automated AI researchs.',
    },
    {
      icon: '🛡️',
      title: 'Continuous Security Monitoring',
      description: 'Monitor supplier security posture 24/7 with ongoing scans, alerts, and trend visibility to track improvements over time.',
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
