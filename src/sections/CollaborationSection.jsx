import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import collab_presenting from '@/assets/collab_presenting.jpg'

const CollaborationSection = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="collaboration"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: `url(${collab_presenting})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#111216]/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 lg:px-[6vw] py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Headline */}
            <h2
              className={`text-[clamp(36px,4.5vw,68px)] font-semibold text-white leading-[1.02] max-w-[560px] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Let's build something precise.
            </h2>

            {/* Right Column */}
            <div className="space-y-6">
              <div
                className={`card-white p-6 max-w-[400px] ml-auto transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <p className="text-[#111216]/80 text-sm lg:text-base leading-relaxed mb-6">
                  Tell us what you're making. We'll reply within two business days with next steps and a rough timeline.
                </p>
                <button
                  onClick={scrollToContact}
                  className="btn-primary flex items-center gap-2 text-sm"
                >
                  Start a project
                  <ArrowRight size={16} />
                </button>
              </div>

              <p
                className={`text-white/70 text-sm text-right max-w-[400px] ml-auto transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Prefer email?{' '}
                <a
                  href="mailto:mizumisoftwares@gmail.com"
                  className="text-white hover:underline"
                >
                  mizumisoftwares@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollaborationSection
