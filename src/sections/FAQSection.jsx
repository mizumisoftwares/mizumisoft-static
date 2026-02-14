import { useEffect, useRef, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const FAQSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Most projects range from 4–10 weeks depending on complexity. A simple marketing site might take 4–6 weeks, while a full product platform with custom features could extend to 10–12 weeks. We'll provide a detailed timeline during our discovery call."
    },
    {
      question: "Do you work with startups and enterprises?",
      answer: "Yes, we work with both. Startups appreciate our lean approach and ability to move fast, while enterprises value our attention to scalability, accessibility, and design systems. We tailor our process to fit your team's needs."
    },
    {
      question: "How do you handle revisions?",
      answer: "We include two rounds of revisions at each major milestone (wireframes, visual design, development). Additional revisions are billed at our standard hourly rate. We prioritize clear communication to minimize back-and-forth."
    },
    {
      question: "What platforms do you build on?",
      answer: "We specialize in React-based solutions (Next.js, Vite) for maximum performance and flexibility. For content-heavy sites, we often recommend headless CMS setups (Sanity, Contentful, or Strapi) that give you full control."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Absolutely. We offer monthly retainer packages for maintenance, updates, and continuous improvements. Many clients stay with us long-term as their product evolves and grows."
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative bg-[#F4F6F8] py-[8vh] px-[6vw]"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          {/* Left Column - Header */}
          <div
            className={`lg:sticky lg:top-32 lg:self-start transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-[clamp(34px,3.6vw,54px)] font-semibold text-[#111216] mb-6">
              Common questions
            </h2>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 text-[#2F6BFF] font-medium hover:underline"
            >
              <MessageCircle size={18} />
              Still unsure? Let's talk.
            </button>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-[14px] border border-[#111216]/8 overflow-hidden transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-[#111216] pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#6B7280] flex-shrink-0 transition-transform duration-250 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-250 ease-out ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[#111216]/70 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
