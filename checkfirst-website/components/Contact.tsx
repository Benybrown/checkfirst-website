'use client'

import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <section className="py-16 sm:py-24 bg-[#192233]/30" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col justify-end gap-6 px-4 items-center">
          <div className="flex flex-col gap-2 text-center max-w-xl">
            <h2 className="text-white tracking-light text-[32px] font-bold leading-tight md:text-4xl">
              Get in Touch
            </h2>
            <p className="text-white/80 text-base font-normal leading-normal">
              Have questions or want a personalized demo? Fill out the form below and our team will get back to you.
            </p>
          </div>
          <div className="flex flex-1 justify-center w-full max-w-lg">
            <form onSubmit={handleSubmit} className="flex flex-col min-w-40 h-14 w-full flex-1 md:h-16">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-[#232f48] h-full placeholder:text-[#92a4c9] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal md:text-base"
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="flex items-center justify-center rounded-r-lg border-l-0 border-none bg-[#232f48] pr-2">
                  <button
                    type="submit"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:h-12 md:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] md:text-base hover:bg-primary/90 transition-colors"
                  >
                    <span className="truncate">Request Info</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
