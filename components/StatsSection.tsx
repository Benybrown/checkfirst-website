'use client';

import { useTranslation } from 'react-i18next';

export default function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    { key: 'assessmentTime' },
    { key: 'vendorOnboarding' },
    { key: 'compliance' },
    { key: 'savings' },
  ];

  return (
    <section className="gradient-primary text-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('stats.title')}</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-3">
                {t(`stats.items.${stat.key}.metric`)}
              </div>
              <p className="text-blue-100 text-lg">
                {t(`stats.items.${stat.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
