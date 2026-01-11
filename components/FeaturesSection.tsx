'use client';

import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🤖',
      key: 'aiPowered',
    },
    {
      icon: '🎯',
      key: 'smartAssessments',
    },
    {
      icon: '🔄',
      key: 'riskLifecycle',
    },
    {
      icon: '✅',
      key: 'taskManagement',
    },
    {
      icon: '🔍',
      key: 'supplierIntelligence',
    },
    {
      icon: '🛡️',
      key: 'securityMonitoring',
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
          <p className="text-xl text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl p-8 shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`features.items.${feature.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`features.items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
