import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative w-full flex flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
