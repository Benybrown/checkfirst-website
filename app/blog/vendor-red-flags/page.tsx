import Link from 'next/link';

export default function VendorRedFlags() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 mb-4">Blog Post</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            10 Red Flags That Indicate Vendor Risk
          </h1>
          <p className="text-xl text-blue-100">
            Signs that should trigger deeper vendor investigation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Not all vendors present equal risk—but certain warning signs indicate when a deeper review is necessary. Ignoring these red flags can lead to security incidents, compliance failures, or operational disruption.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Top 10 Vendor Risk Red Flags</h2>

            <ol className="text-gray-700 leading-relaxed mb-6 space-y-4">
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">1.</span>
                <span>Outdated or missing security certifications</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">2.</span>
                <span>Lack of transparency around data handling or subprocessors</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">3.</span>
                <span>Slow or evasive responses to assessments</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">4.</span>
                <span>High employee turnover, especially in IT or compliance</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">5.</span>
                <span>Negative cybersecurity or financial news alerts</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">6.</span>
                <span>No evidence of business continuity planning</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">7.</span>
                <span>Weak access controls or no MFA</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">8.</span>
                <span>Unclear SLAs or poor customer support</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">9.</span>
                <span>Frequent incidents or unexplained downtime</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">10.</span>
                <span>Unwillingness to address remediation tasks promptly</span>
              </li>
            </ol>

            <p className="text-gray-700 leading-relaxed mb-6">
              A platform like <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="text-[#0F4C81] font-semibold hover:underline">Checkfirst</a> automatically flags these issues through continuous monitoring, automated assessments, and real-time vendor scoring—helping teams act before small risks become major failures.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding these red flags empowers organizations to enforce stronger oversight and protect their supply chain from emerging threats.
            </p>

            <div className="bg-gradient-to-r from-[#0F4C81] to-[#00ACC1] rounded-xl p-8 mt-12 text-white">
              <h3 className="text-xl font-bold mb-4">Detect Vendor Red Flags Automatically</h3>
              <p className="mb-6 text-blue-100">
                Checkfirst provides continuous monitoring, automated assessments, and real-time scoring to help you identify vendor risks before they become problems.
              </p>
              <a href="https://www.checkfirst.io" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#0F4C81] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Get Started with Checkfirst
              </a>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-[#0F4C81] font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
