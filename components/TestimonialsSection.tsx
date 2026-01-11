'use client';

import { useTranslation } from 'react-i18next';

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    { key: 'sarah', rating: 5 },
    { key: 'michael', rating: 5 },
    { key: 'jennifer', rating: 5 },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-hover bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{t(`testimonials.items.${testimonial.key}.quote`)}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {t(`testimonials.items.${testimonial.key}.author`)}
                </p>
                <p className="text-sm text-gray-600">
                  {t(`testimonials.items.${testimonial.key}.role`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
