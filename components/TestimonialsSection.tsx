export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'CHECKFIRST AI approach reduced our vendor assessment time by 80% and helped us achieve our compliance audits. The platform is intuitive and the support team is outstanding.',
      author: 'Sarah Chen',
      role: 'Chief Risk Officer',
      company: '',
      rating: 5,
    },
    {
      quote:
        'We were managing TPRM manually with spreadsheets. CHECKFIRST platform gave us visibility and control into all our third-party risks and remediation controls implementations. Best investment we made.',
      author: 'Michael Roberts',
      role: 'CISO',
      company: '',
      rating: 5,
    },
    {
      quote:
        'The Smart Questionnaire feature helped us build an intelligent and unified process that can adapt and cover complex cases with one Smart Assessment and reduce our SLA by at least 50%.',
      author: 'Jennifer Parker',
      role: 'Third Party Risk Manager',
      company: '',
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
                  {testimonial.company ? `${testimonial.role} at ${testimonial.company}` : testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
