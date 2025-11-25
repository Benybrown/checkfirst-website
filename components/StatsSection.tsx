export default function StatsSection() {
  const stats = [
    {
      metric: '85%',
      description: 'Reduction in assessment time',
    },
    {
      metric: '3x',
      description: 'Faster vendor onboarding',
    },
    {
      metric: '100%',
      description: 'Audit compliance rate',
    },
    {
      metric: '$2M+',
      description: 'Average annual savings',
    },
  ];

  return (
    <section className="gradient-primary text-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Real Impact from Our Customers</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-3">{stat.metric}</div>
              <p className="text-blue-100 text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
