export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/ month',
      features: [
        '10 AI Assessments',
        'Basic Frameworks (NIST, ISO)',
        'Standard Email Support'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/ month',
      features: [
        '50 AI Assessments',
        'All Frameworks & Custom Mapping',
        'Priority Support & Onboarding'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Tailored to your needs',
      features: [
        'Unlimited Assessments',
        'Custom Integrations & API Access',
        'Dedicated Support Manager'
      ],
      highlighted: false
    }
  ]

  return (
    <section className="py-16 sm:py-24" id="pricing">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-white tracking-light text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
            Clear & Simple Pricing
          </h2>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            Choose the plan that's right for your organization's security needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-1 flex-col gap-6 rounded-xl border border-solid p-6 relative overflow-hidden ${
                plan.highlighted
                  ? 'border-primary bg-[#192233]'
                  : 'border-[#324467]/50 bg-[#192233]/50'
              }`}
            >
              {plan.highlighted && (
                <div
                  className="absolute top-0 right-0 text-white text-xs font-medium leading-normal tracking-[0.015em] bg-primary px-8 py-1 text-center"
                  style={{
                    transform: 'rotate(45deg) translate(25%, -25%)',
                    transformOrigin: 'top right'
                  }}
                >
                  Popular
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold leading-tight">{plan.name}</h3>
                <p className="flex items-baseline gap-1.5 text-white">
                  <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{plan.price}</span>
                  <span className="text-white/70 text-base font-medium leading-tight">{plan.period}</span>
                </p>
              </div>
              <button
                className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-[#232f48] hover:bg-[#324467]'
                }`}
              >
                <span className="truncate">{plan.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}</span>
              </button>
              <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-sm font-normal leading-normal flex gap-3 text-white/90">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span> {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
