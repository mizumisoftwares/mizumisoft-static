import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import featured_workspace from '@/assets/featured_workspace.jpg'

const FeaturedWorkSection = () => {
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
      id="featured-work"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: `url(${featured_workspace})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#111216]/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 lg:px-[6vw] py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2
                className={`text-[clamp(40px,4.5vw,68px)] font-semibold text-white mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                Featured work
              </h2>

              {/* Caption Card */}
              <div
                className={`card-white p-5 max-w-[400px] transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h3 className="text-xl font-semibold text-[#111216] mb-2">Lumina Health</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-[#6B7280] bg-[#F4F6F8] px-2 py-1 rounded-full">Web</span>
                  <span className="text-xs text-[#6B7280] bg-[#F4F6F8] px-2 py-1 rounded-full">UI</span>
                  <span className="text-xs text-[#6B7280] bg-[#F4F6F8] px-2 py-1 rounded-full">Frontend</span>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#2F6BFF] text-sm font-medium hover:underline"
                >
                  <ExternalLink size={16} />
                  View live site
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div
              className={`lg:text-right lg:pt-16 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <p className="text-white/80 text-sm lg:text-base mb-4 max-w-[380px] lg:ml-auto">
                A recent launch—built for speed, accessibility, and long-term growth.
              </p>
              <button className="btn-primary inline-flex items-center gap-2 text-sm">
                Read the case study
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorkSection
