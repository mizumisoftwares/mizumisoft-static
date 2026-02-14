import { useEffect, useRef, useState } from 'react'

const ManifestoSection = () => {
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
      id="manifesto"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: 'url(/manifesto_city.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#111216]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6">
        <h2
          className={`text-[clamp(28px,4vw,56px)] font-semibold text-[#F4F6F8] text-center leading-[1.05] max-w-[78vw] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ textShadow: '0 10px 30px rgba(0,0,0,0.28)' }}
        >
          Great design isn't decoration. It's clarity—made beautiful.
        </h2>

        <div
          className={`absolute left-1/2 -translate-x-1/2 bottom-[8vh] transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-micro text-white/50">
            Manifesto — 01
          </span>
        </div>
      </div>
    </section>
  )
}

export default ManifestoSection
