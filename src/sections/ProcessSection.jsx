import { useEffect, useRef, useState } from 'react'
import { Search, Map, Palette, Code2, Rocket, RefreshCw } from 'lucide-react'

const ProcessSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const processSteps = [
    { icon: Search, label: 'Discovery & scope' },
    { icon: Map, label: 'UX structure' },
    { icon: Palette, label: 'Visual design' },
    { icon: Code2, label: 'Build & integrate' },
    { icon: Rocket, label: 'Test & launch' },
    { icon: RefreshCw, label: 'Iterate & improve' },
  ]

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
      id="process"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: 'url(/process_desk.jpg)',
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
            {/* Left Column */}
            <div>
              <h2
                className={`text-[clamp(40px,4.5vw,68px)] font-semibold text-white mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                Our process
              </h2>

              {/* Process List */}
              <div className="max-w-[460px]">
                <div className="space-y-0">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.label}
                      className={`transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                      }`}
                      style={{ transitionDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3 py-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-white text-xs font-medium">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <step.icon size={18} className="text-white/70" />
                        <span className="text-white font-medium text-sm">{step.label}</span>
                      </div>
                      {index < processSteps.length - 1 && <div className="h-px bg-white/10" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div
                className={`card-white p-6 max-w-[400px] ml-auto transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <h3 className="text-lg font-semibold text-[#111216] mb-3">How we work</h3>
                <p className="text-[#111216]/70 text-sm leading-relaxed">
                  We keep teams small, communication direct, and decisions visible—so the work stays coherent from start to finish.
                </p>
              </div>

              <p
                className={`text-white/70 text-sm text-right max-w-[400px] ml-auto transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Typical launch range: 4–10 weeks depending on complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
