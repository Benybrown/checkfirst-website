export default function Features() {
  const features = [
    {
      icon: 'bolt',
      title: 'AI-Powered Speed',
      description: 'Automate and accelerate security reviews with intelligent AI agents, reducing assessment times from weeks to hours.'
    },
    {
      icon: 'shield_lock',
      title: 'Comprehensive Frameworks',
      description: 'Integrate seamlessly with leading security standards like NIST, ISO 27001, and SOC 2 for robust compliance.'
    },
    {
      icon: 'dashboard',
      title: 'Unified SaaS Platform',
      description: 'Manage all third-party risks from a single, intuitive dashboard with real-time insights and reporting.'
    }
  ]

  return (
    <section className="py-16 sm:py-24" id="features">
      <div className="flex flex-col gap-10 px-4 container mx-auto">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-white tracking-light text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
            Why CHECKFIRST?
          </h2>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            Our AI-powered TPRM solution provides unparalleled speed, accuracy, and scalability to secure your supply chain.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-1 gap-4 rounded-xl border border-[#324467]/50 bg-[#192233]/50 p-6 flex-col">
              <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-lg font-bold leading-tight">{feature.title}</h3>
                <p className="text-[#92a4c9] text-sm font-normal leading-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
