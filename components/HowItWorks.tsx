'use client';

import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { number: '1', key: 'smartAssessments' },
    { number: '2', key: 'jino360' },
    { number: '3', key: 'jinoXtreme' },
    { number: '4', key: 'jinoQA' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('howItWorks.title')}</h2>
          <p className="text-xl font-bold text-[#00ACC1]">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-gradient-to-br from-[#0F4C81] to-[#00ACC1] text-white rounded-lg p-6 h-full">
                <div className="text-5xl font-bold mb-4 opacity-20">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`howItWorks.steps.${step.key}.title`)}
                </h3>
                <p className="text-blue-100">
                  {t(`howItWorks.steps.${step.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
