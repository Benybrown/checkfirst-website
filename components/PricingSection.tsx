'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    {
      key: 'starter',
      featured: false,
      featureKeys: ['vendors', 'assessments', 'reports', 'support', 'integrations'],
    },
    {
      key: 'professional',
      featured: true,
      featureKeys: ['vendors', 'scoring', 'monitoring', 'support', 'integrations', 'automation'],
    },
    {
      key: 'enterprise',
      featured: false,
      featureKeys: ['everything', 'accountManager', 'sla', 'reporting', 'sso', 'workflows'],
    },
  ];

  const complianceBadges = ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricing.title')}</h2>
          <p className="text-xl text-gray-600">
            {t('pricing.subtitle')}
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
                  {t('pricing.mostPopular')}
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(`pricing.plans.${plan.key}.name`)}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {t(`pricing.plans.${plan.key}.description`)}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.key === 'enterprise' ? t('pricing.custom') : t('pricing.contactUs')}
                    </span>
                    <span className="text-gray-600 ml-2 rtl:ml-0 rtl:mr-2">
                      {plan.key === 'enterprise' ? t('pricing.customPricing') : t('pricing.forPricing')}
                    </span>
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
                  {t(`pricing.plans.${plan.key}.cta`)}
                </Link>

                <div className="space-y-4">
                  {plan.featureKeys.map((featureKey, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <span className="text-[#00BFA5] mr-3 rtl:mr-0 rtl:ml-3 text-xl">✓</span>
                      <span className="text-gray-700">
                        {t(`pricing.plans.${plan.key}.features.${featureKey}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">{t('pricing.complianceTitle')}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {complianceBadges.map((badge) => (
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
