import { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: 'url(/testimonial_chat.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#111216]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 lg:px-[6vw] py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Headline */}
            <h2
              className={`text-[clamp(40px,4.5vw,68px)] font-semibold text-white transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              What partners say
            </h2>

            {/* Right Column */}
            <div className="space-y-6">
              <div
                className={`card-white p-6 max-w-[400px] ml-auto transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <Quote size={32} className="text-[#2F6BFF] mb-4" />
                <blockquote className="text-[#111216] text-base lg:text-lg leading-relaxed italic">
                  "MizumiSoft turned a complex product into a calm, confident experience. The team felt like an extension of ours."
                </blockquote>
              </div>

              <p
                className={`text-white/70 text-sm text-right max-w-[400px] ml-auto transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                — Product Lead, Lumina Health
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
