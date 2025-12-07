'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vendors: '50-100',
    message: '',
    gdpr: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // In a real app, this would send to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your TPRM?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of enterprises reducing vendor risk and improving compliance. Schedule a personalized demo with our team.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+32 460 21 49 55</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">support@checkfirst.io</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🌍</div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">Brussels, Belgium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="vendors" className="block text-sm font-semibold text-gray-900 mb-2">
                  Number of Vendors
                </label>
                <select
                  id="vendors"
                  name="vendors"
                  value={formData.vendors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                >
                  <option value="1-50">1-50 vendors</option>
                  <option value="50-100">50-100 vendors</option>
                  <option value="100-500">100-500 vendors</option>
                  <option value="500+">500+ vendors</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                  placeholder="Tell us about your TPRM needs..."
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
                  I agree to the privacy policy and consent to receive communications from TPRM.
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn-primary bg-[#0F4C81] text-white py-3 rounded-lg font-semibold"
              >
                Request Demo
              </button>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! We'll be in touch shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
