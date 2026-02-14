import { useEffect, useRef, useState } from 'react'
import { Download, Palette, Layout, Code, Layers, Sparkles, Headphones } from 'lucide-react'
import capabilities_meeting from '@/assets/capabilities_meeting.jpg'

const CapabilitiesSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const capabilities = [
    { icon: Palette, label: 'Brand Identity' },
    { icon: Layout, label: 'UI/UX Design' },
    { icon: Code, label: 'Web Development' },
    { icon: Layers, label: 'Design Systems' },
    { icon: Sparkles, label: 'Motion & Interaction' },
    { icon: Headphones, label: 'Ongoing Support' },
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
      id="capabilities"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: `url(${capabilities_meeting})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#111216]/40" />
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
              Capabilities
            </h2>

            {/* Right Card */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="card-white p-6 max-w-[440px] ml-auto">
                <div className="space-y-0">
                  {capabilities.map((cap, index) => (
                    <div
                      key={cap.label}
                      className={`transition-all duration-500`}
                      style={{ transitionDelay: `${300 + index * 50}ms` }}
                    >
                      <div className="flex items-center gap-3 py-3.5">
                        <cap.icon size={18} className="text-[#2F6BFF]" />
                        <span className="text-[#111216] font-medium text-sm">{cap.label}</span>
                      </div>
                      {index < capabilities.length - 1 && <div className="hairline" />}
                    </div>
                  ))}
                </div>

                <button className="mt-6 flex items-center gap-2 text-[#2F6BFF] text-sm font-medium hover:underline">
                  <Download size={16} />
                  Download capabilities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
