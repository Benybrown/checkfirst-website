'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vendors: '50-100',
    message: '',
    gdpr: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          vendors: formData.vendors,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        vendors: '50-100',
        message: '',
        gdpr: false,
      });
    } catch (err) {
      setError(t('contact.form.errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('contact.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="font-semibold text-gray-900">{t('contact.phone')}</p>
                  <p className="text-gray-600">+32 460 21 49 55</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="font-semibold text-gray-900">{t('contact.email')}</p>
                  <p className="text-gray-600">support@checkfirst.io</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🌍</div>
                <div>
                  <p className="font-semibold text-gray-900">{t('contact.address')}</p>
                  <p className="text-gray-600">{t('contact.addressValue')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('contact.form.fullName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  placeholder={t('contact.form.fullNamePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('contact.form.workEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  placeholder={t('contact.form.workEmailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('contact.form.companyName')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  placeholder={t('contact.form.companyNamePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="vendors" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('contact.form.numberOfVendors')}
                </label>
                <select
                  id="vendors"
                  name="vendors"
                  value={formData.vendors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                >
                  <option value="1-50">{t('contact.form.vendors1_50')}</option>
                  <option value="50-100">{t('contact.form.vendors50_100')}</option>
                  <option value="100-500">{t('contact.form.vendors100_500')}</option>
                  <option value="500+">{t('contact.form.vendors500plus')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdpr"
                  name="gdpr"
                  checked={formData.gdpr}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 accent-[#0F4C81]"
                />
                <label htmlFor="gdpr" className="text-sm text-gray-600">
                  {t('contact.form.gdprConsent')}
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary bg-[#0F4C81] text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? t('contact.form.sending') : t('contact.form.requestDemo')}
              </button>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  {t('contact.form.successMessage')}
                </div>
              )}

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
