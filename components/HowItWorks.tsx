export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Smart Assessments',
      description: 'Send standard or smart questionnaires to vendors and automatically generate risk findings from their responses.',
    },
    {
      number: '2',
      title: 'AI JINO360 Scan',
      description: 'Enter a supplier URL and instantly generate a full risk profile with AI-driven research, history, and context.',
    },
    {
      number: '3',
      title: 'AI JINO Xtreme Analysis',
      description: 'Automatically analyze published security documentation to produce full posture assessment —without manual review.',
    },
    {
      number: '4',
      title: 'AI JINO Q&A Docs',
      description: 'Upload files or questionnaires and let AI extract, assess, and score security risks directly from supplied documents.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">4 Ways To Conduct Your TPRM</h2>
          <p className="text-xl font-bold text-[#00ACC1]">
            How It Works
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
