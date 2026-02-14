import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import hero_office from '@/assets/hero_office.jpg'

const HeroSection = () => {
  const sectionRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToWork = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        style={{
          backgroundImage: `url(${hero_office})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#111216]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center px-6 lg:px-[6vw] py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Headline Block */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h1 className="text-[clamp(36px,5vw,76px)] font-semibold text-white leading-[0.98] tracking-tight mb-6">
                We build digital experiences that stay with people.
              </h1>
            </div>

            {/* Right Floating Card */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="card-white p-7 max-w-[420px] ml-auto">
                <p className="text-[#111216]/80 text-base lg:text-lg leading-relaxed mb-6">
                  Strategy, design, and development—crafted as one system.
                </p>
                <button
                  onClick={scrollToWork}
                  className="btn-primary flex items-center gap-2 text-sm"
                >
                  Explore selected work
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-[8vh] left-6 lg:left-[6vw] right-6 lg:right-[6vw] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <span
            className={`text-micro text-white/70 transition-all duration-500 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            MizumiSoft — Creative Studio
          </span>
          <p
            className={`text-white/70 text-sm transition-all duration-500 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Remote-first. Collaborating worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
