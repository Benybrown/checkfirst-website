import Link from 'next/link';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'Contact us',
      period: 'for pricing',
      description: 'Perfect for growing organizations',
      features: [
        'Up to 50 vendors',
        'Basic risk assessments',
        'Monthly reports',
        'Email support',
        'Standard integrations',
      ],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Professional',
      price: 'Contact us',
      period: 'for pricing',
      description: 'For established enterprises',
      features: [
        'Unlimited vendors',
        'Advanced risk scoring',
        'Real-time monitoring',
        'Priority support',
        'Custom integrations',
        'Workflow automation',
      ],
      cta: 'Start Free Trial',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom SLA',
        'Advanced reporting',
        'Single Sign-On (SSO)',
        'Custom workflows',
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your organization's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.featured
                  ? 'ring-2 ring-[#0F4C81] shadow-2xl transform md:scale-105'
                  : 'bg-white shadow-lg'
              } ${!plan.featured ? 'bg-white' : 'bg-gradient-to-br from-blue-50 to-white'}`}
            >
              {plan.featured && (
                <div className="bg-[#0F4C81] text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <Link
                  href="/#contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold mb-6 transition-all ${
                    plan.featured
                      ? 'btn-primary'
                      : 'border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <span className="text-[#00BFA5] mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Enterprise-grade security and compliance</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'].map((badge) => (
              <div key={badge} className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
                <span className="font-semibold text-gray-700">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
