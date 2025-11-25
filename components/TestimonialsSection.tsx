export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'TPRM reduced our vendor assessment time by 80% and helped us achieve 100% compliance audits. The platform is intuitive and the support team is outstanding.',
      author: 'Sarah Chen',
      role: 'Chief Risk Officer',
      company: 'TechCorp Inc',
      rating: 5,
    },
    {
      quote:
        'We were managing TPRM manually with spreadsheets. TPRM platform gave us visibility into all our third-party risks in real-time. Best investment we made.',
      author: 'Michael Roberts',
      role: 'Compliance Director',
      company: 'FinanceHub Ltd',
      rating: 5,
    },
    {
      quote:
        'The automated monitoring alerts have caught potential issues before they became problems. The ROI was immediate - saved us thousands in risk remediation.',
      author: 'Jennifer Park',
      role: 'Enterprise Risk Manager',
      company: 'SecureNet Solutions',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Customers Say</h2>
          <p className="text-xl text-gray-600">
            Join hundreds of enterprises trusting TPRM
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
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
