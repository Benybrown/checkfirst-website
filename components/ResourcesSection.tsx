import Link from 'next/link';

export default function ResourcesSection() {
  const resources = [
    {
      type: 'Whitepaper',
      title: '2026 State of TPRM Report',
      description: 'Essential insights on third-party risk management trends and best practices.',
      icon: '📄',
      link: '/reports/state-of-tprm-2025',
    },
    {
      type: 'Blog Post',
      title: 'Building a Resilient Supply Chain',
      description: 'Expert strategies for managing third-party risks at scale.',
      icon: '✍️',
      link: '/blog/resilient-supply-chain',
    },
    {
      type: 'Blog Post',
      title: 'Building a Resilient Supply Chain',
      description: 'Expert strategies for managing third-party risks at scale.',
      icon: '✍️',
      link: '/blog/supply-chain-resilience-strategies',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Learning</h2>
          <p className="text-xl text-gray-600">
            Expand your TPRM knowledge with our free resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const CardContent = (
              <>
                <div className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] h-2"></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <p className="text-sm font-semibold text-[#0F4C81] mb-2">{resource.type}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                  <div className="mt-6 text-[#0F4C81] font-semibold flex items-center gap-2">
                    {resource.link ? 'Read More →' : 'Coming Soon'}
                  </div>
                </div>
              </>
            );

            return resource.link ? (
              <Link key={index} href={resource.link} className="bg-white rounded-xl overflow-hidden shadow-md h-full block hover:shadow-lg transition">
                {CardContent}
              </Link>
            ) : (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md h-full">
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Blog Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Blog Posts</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'How to Implement a TPRM Program in 30 Days',
                date: 'Nov 15, 2025',
                excerpt: 'A practical roadmap for rapidly deploying third-party risk management across your organization.',
                slug: 'implement-tprm-30-days',
              },
              {
                title: 'GDPR Compliance for Vendor Management',
                date: 'Nov 10, 2025',
                excerpt: 'Essential guide to keeping your third-party vendors GDPR compliant.',
                slug: 'gdpr-vendor-management',
              },
              {
                title: 'SaaS Vendor Risk Assessment Checklist',
                date: 'Nov 5, 2025',
                excerpt: 'Complete checklist for evaluating cloud-based service providers.',
                slug: 'saas-vendor-checklist',
              },
              {
                title: 'Automating Your Risk Remediation Workflow',
                date: 'Oct 28, 2025',
                excerpt: 'Learn how to automate and accelerate vendor risk remediation.',
                slug: 'automate-remediation',
              },
            ].map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition block">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#0F4C81]">{post.title}</h4>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
