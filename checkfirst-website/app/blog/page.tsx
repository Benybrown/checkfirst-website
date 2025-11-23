import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CHECKFIRST Blog - TPRM Insights & AI Security',
  description: 'Explore the latest trends and insights in third-party risk management, powered by cutting-edge AI technology.',
}

export default function BlogPage() {
  const articles = [
    {
      category: 'SECURITY FRAMEWORKS',
      title: 'Top 5 Security Frameworks for 2024',
      description: 'A comprehensive guide to the most effective security frameworks to protect your organization in the coming year.',
      author: 'Alex Johnson',
      date: 'Nov 02, 2023',
      readTime: '7 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3udeGmyO-sFrL0gtvsATNh-sAuAbdbjcrIR_9fKBUNYn66ByIaoUIHQL94eelAwV9IjuGA-yMDwQledFr9SLoMtbbKnQ-4XOKauXNmnVf3gxmjtVbofmq99norlR0ukJyEj6BAobXYDpXIPR3KzyHTACQg7cJMKJ06DBXtZe4_VttlCfACpLiqCg0lNSv-F6czzOtvP7brOJUMB3KnBbXhTmgSFZGRKw636Yj-Iz-lHuZHo-C0i0Ya_7fqOebC0VSNWmfeQW8v5k'
    },
    {
      category: 'COMPLIANCE',
      title: 'Navigating the Complexities of GDPR with AI',
      description: 'Discover how AI-powered tools can streamline your GDPR compliance efforts and reduce risk.',
      author: 'Maria Garcia',
      date: 'Oct 28, 2023',
      readTime: '6 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYtUqhx8R7Yyg_PB6t8cdpffWr040RYGSEgbABAiPxi-UlDFVoxFkVT7WoUVxoHoW3HgqEN7cmNdwdtjLCRjx-cXzjvZs_Z9kTuRlkC0I70sycWYgK6devZoa5Vv9JU7gZJaM71ceJZ53m_Y41DE-9T1nSuAg1JZNQoJKfFFb0LZ88jPz0Ziw6xNR3Ri_pJZWCxSpaigKmMTUTwIaMZGbvw85JxZfUZLB3BAA-ykRMwMSjOqcFIDqkT-GhOug02SJ5O3dFkSBavYw'
    },
    {
      category: 'CASE STUDIES',
      title: 'How FinCorp Reduced Vendor Onboarding Time by 40%',
      description: 'A deep dive into how our AI agents transformed FinCorp\'s third-party risk management process.',
      author: 'Jane Doe',
      date: 'Oct 26, 2023',
      readTime: '5 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADFqWeQFqqBK012lLMLkDbb-a6TDOr1aAUq51Sx67dd2vB46tQn6gRjpfcZhg2lDlyYif_Cx_BcwVUupjbO2Djs0pGIx4RszNm1MNS4I_snYXkYJMBovZLHP6GuQk-EixiSmC-544iLt0kr7A401Vc6hSiCHNW-ibvGYd4JTFuEde1P8GnhEQR8Ge6WNzrJCpHUNnnui-xDVuOsWur9-Q73z3k-_dW4cN8Y5kYa-nR6hFMGSIXVMevI-vQkPXzxVjUJtUbroNF7gw'
    },
    {
      category: 'BEST PRACTICES',
      title: 'Building a Resilient Third-Party Risk Program',
      description: 'Essential steps and best practices for creating a TPRM program that can withstand modern threats.',
      author: 'David Chen',
      date: 'Oct 21, 2023',
      readTime: '8 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRgrPocLHcj0ebwt1QT_XSIyiUlUqOslVMATBhw2SfslwH5-WsM2ahoJmUNcD5rEaD9DpZ-cEFE9XyR3B47JlrrS0f6g78UCJ2gIjUE1NjLFAu_wb-x3a7F9EZ8CSGiBHlS6o3DdW_4sy5-DoL8n-ZhfkY4uQPDPjPz6b1vI6WdLW7gXBEHvHVIUMFjwMdexdpcZB3Y2wTf0UgAEbGnjk5Hlitk1t-9h1pEppBc1Bfb12R1S597yXaeJUvvF2V_wGtCkBZGI8Jjew'
    },
    {
      category: 'AI in TPRM',
      title: 'The Ethics of AI in Security Assessments',
      description: 'Exploring the ethical considerations and biases when using AI to assess vendor security postures.',
      author: 'Dr. Emily Carter',
      date: 'Oct 15, 2023',
      readTime: '9 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrzsUwDiBbsXVknIuybAkB1qgvXhDJLso3PW2QLPdJAKZ22g0_ktGPaCCPCpQt2XNpj1sEcuB04uf77yHOx0GshrPS13yO00DUNW7s_WF3dYtVOYE47XiLnWa60XHBRS86x9ASYK7To8stmDIerTz0V_Vg7AGzstWKP2D1K_kxlLxHs_iWe1zWObSQdLbDX40iZrWrCtoyFLZtVfoyi52Wc-agtv2AEshSglt29NXYA7CvbikOfmFkrJgrexlCQD9AIabpxpc2vLA'
    },
    {
      category: 'COMPANY NEWS',
      title: 'CHECKFIRST Secures $20M in Series A Funding',
      description: 'We\'re excited to announce our latest funding round to accelerate innovation in AI-driven risk management.',
      author: 'The CHECKFIRST Team',
      date: 'Oct 10, 2023',
      readTime: '3 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGMU_pY_tZOamk4MCevDS37xgyZJ5nF9894QzobSVMny9LPHYieDyzLHTqeJj6xjbAFY3_VSui4rPgfJEZBgmOrIOM09MYKYIVwB1uWsczivN3A9sv8FmM8cXQRNWFhzIT4Y0NAQ4t6f8T5R5_byGMIgLmDJobenfbMbYRWmjr_HOMSmEtrqKKqZsqL3Flm8-Etao_kNBRnBux-QKpzRyIj13XsyQtyJMs2EridS8wztnaQ5ABFGEEwIGN8Ob8VvOIm4_lC3srers'
    }
  ]

  const categories = ['All', 'AI in TPRM', 'Compliance', 'Frameworks', 'Case Studies', 'Company News']

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4 border-b border-neutral-light/10 dark:border-neutral-dark/20">
          <div className="flex size-10 shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">shield</span>
          </div>
          <h1 className="text-neutral-dark dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1 ml-2">
            <Link href="/">CHECKFIRST</Link>
          </h1>
          <div className="flex w-10 items-center justify-end">
            <button className="text-neutral-dark dark:text-white">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <div
              className="relative w-full aspect-[16/9] bg-center bg-no-repeat bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIj-H-Tl6tbCdZ0EchbcKS3296h3llqYu5izRhmNorVq9AEBAwt1lpmwomyqR-FWmAGj0VHcj1EjFkXVUMZKKKU7oaBo6eQCIOiaRQdIDkPeWsJ-miGk5aKFO8cgy-kGw8s0dj5af8FvhYDBPq6fUnomZG2kGBOmIEx4gDPIPMrnBBu5JjcuE8f0B4x3mM7k6T8Oafft9ru3g6aqUnGuw466nFxOAING5D1b95RLZKZ8LPiuVptbjwYvU_aaIjhCEzldpedRUgK2w")`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <span className="inline-block bg-primary/20 text-primary px-3 py-1 text-xs font-bold rounded-full mb-2">AI in TPRM</span>
                <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight tracking-tight">
                  How AI is Revolutionizing Vendor Risk Management
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-neutral-medium text-sm md:text-base font-normal leading-normal">
                Explore the latest trends and insights in third-party risk management, powered by our cutting-edge AI technology. Stay ahead of the curve with CHECKFIRST.
              </p>
              <a className="text-primary font-bold text-sm md:text-base" href="#">Read More →</a>
            </div>
          </div>
        </section>

        {/* Category Chips */}
        <section className="py-4">
          <div className="flex gap-3 px-4 md:px-6 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 text-sm font-medium leading-normal ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-neutral-light/80 dark:bg-neutral-dark/40 text-neutral-dark dark:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Articles List */}
        <section className="px-4 md:px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="flex flex-col gap-4 group">
                <div
                  className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg"
                  style={{ backgroundImage: `url("${article.image}")` }}
                ></div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-xs font-bold">{article.category}</span>
                  <h3 className="text-neutral-dark dark:text-white text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-medium text-sm leading-relaxed">{article.description}</p>
                  <div className="text-neutral-medium/80 dark:text-neutral-medium/60 text-xs font-medium mt-1">
                    <span>By {article.author} • {article.date} • {article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="px-4 md:px-6 py-10 flex justify-center">
          <button className="flex min-w-[84px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-neutral-light/80 dark:bg-neutral-dark/40 text-neutral-dark dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-neutral-light dark:hover:bg-neutral-dark/60 transition-colors">
            <span className="truncate">Load More</span>
          </button>
        </div>
      </main>
    </div>
  )
}
