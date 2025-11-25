import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      slug: 'implement-tprm-30-days',
      title: 'How to Implement a TPRM Program in 30 Days',
      date: 'Nov 15, 2024',
      category: 'Implementation',
      excerpt:
        'A practical roadmap for rapidly deploying third-party risk management across your organization without disrupting existing workflows.',
      author: 'Sarah Chen',
    },
    {
      slug: 'gdpr-vendor-management',
      title: 'GDPR Compliance for Vendor Management',
      date: 'Nov 10, 2024',
      category: 'Compliance',
      excerpt:
        'Essential guide to keeping your third-party vendors GDPR compliant and avoiding regulatory penalties.',
      author: 'Michael Roberts',
    },
    {
      slug: 'saas-vendor-checklist',
      title: 'SaaS Vendor Risk Assessment Checklist',
      date: 'Nov 5, 2024',
      category: 'Best Practices',
      excerpt:
        'Complete checklist for evaluating cloud-based service providers and managing SaaS vendor risks.',
      author: 'Jennifer Park',
    },
    {
      slug: 'automate-remediation',
      title: 'Automating Your Risk Remediation Workflow',
      date: 'Oct 28, 2024',
      category: 'Automation',
      excerpt:
        'Learn how to automate and accelerate vendor risk remediation with intelligent workflows.',
      author: 'David Kumar',
    },
    {
      slug: 'supply-chain-risk',
      title: 'Supply Chain Risk Management in 2024',
      date: 'Oct 20, 2024',
      category: 'Strategy',
      excerpt:
        'Strategic insights on managing risks across your entire supply chain ecosystem.',
      author: 'Lisa Wong',
    },
    {
      slug: 'vendor-red-flags',
      title: '10 Red Flags That Indicate Vendor Risk',
      date: 'Oct 15, 2024',
      category: 'Risk Management',
      excerpt:
        'Learn to identify warning signs that should trigger deeper vendor risk investigations.',
      author: 'James Mitchell',
    },
  ];

  return (
    <main>
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">TPRM Blog</h1>
          <p className="text-xl text-blue-100">
            Insights, best practices, and industry trends in third-party risk management
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card-hover bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-semibold text-[#0F4C81] bg-blue-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#0F4C81] transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <span className="text-[#0F4C81] font-semibold">Read More →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
