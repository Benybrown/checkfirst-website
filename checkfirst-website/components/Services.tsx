'use client'

import { useState } from 'react'

export default function Services() {
  const [openService, setOpenService] = useState(0)

  const services = [
    {
      title: 'AI-Agent Security Assessments',
      description: 'Our platform utilizes advanced AI agents to conduct thorough and rapid security assessments, reducing manual effort and delivering actionable insights in a fraction of the time.'
    },
    {
      title: 'Multi-Framework Integration',
      description: 'Seamlessly align your TPRM program with multiple industry-standard security frameworks. Our platform maps controls across NIST, ISO 27001, SOC 2, and more, simplifying compliance and reporting.'
    },
    {
      title: 'The CHECKFIRST SaaS Solution',
      description: 'Experience a centralized, cloud-native platform for all your TPRM needs. From vendor onboarding to continuous monitoring, our SaaS solution provides the tools you need to build a resilient supply chain.'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#192233]/30" id="services">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-white tracking-light text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
            A Complete Risk Management Solution
          </h2>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            Explore our core services designed to provide a 360-degree view of your third-party security posture.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full max-w-3xl">
          {services.map((service, index) => (
            <details
              key={index}
              className="flex flex-col rounded-lg border border-[#324467] bg-background-dark px-4 py-2 group"
              open={index === openService}
              onClick={() => setOpenService(index)}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-white text-base font-medium leading-normal">{service.title}</p>
                <span className="material-symbols-outlined text-white group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-[#92a4c9] text-sm font-normal leading-normal pb-2">
                {service.description}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
