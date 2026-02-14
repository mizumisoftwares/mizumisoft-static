import { useEffect, useRef, useState } from 'react'
import studio_table from '@/assets/studio_table.jpg'

const StudioSection = () => {
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
      id="studio"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: `url(${studio_table})`,
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
              className={`text-[clamp(32px,4vw,60px)] font-semibold text-white leading-[1.02] max-w-[540px] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              A quiet space for focused work.
            </h2>

            {/* Right Column */}
            <div className="space-y-6">
              <div
                className={`card-white p-6 max-w-[400px] ml-auto transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <p className="text-[#111216]/80 text-sm lg:text-base leading-relaxed">
                  We're a small team with senior hands on every project—designers who code, developers who care about type.
                </p>
              </div>

              <p
                className={`text-white/70 text-sm text-right max-w-[400px] ml-auto transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Based in UTC+1 / working across timezones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioSection
