import { useEffect, useRef, useState } from 'react'
import { Send, Mail, MessageCircle } from 'lucide-react'

const ContactSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const budgetOptions = [
    '₹2,000',
    '₹3,000',
    '₹5,000',
    '₹10,000',
    '₹30,000',
    '₹50,000+'
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const openWhatsApp = () => {
    const whatsappNumber = '8303959362'
    const message = 'Hi MizumiSoft! I\'m interested in discussing a project with you.'
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#111216] py-[10vh] px-[6vw]"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-[clamp(40px,5vw,76px)] font-semibold text-white leading-[0.98] mb-6">
              Ready when you are.
            </h2>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md mb-8">
              Share a brief. We'll reply with honest feedback, a rough plan, and next steps.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mizumisoftwares@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span>mizumisoftwares@gmail.com</span>
              </a>

              <button
                onClick={openWhatsApp}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors w-full"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {submitted ? (
              <div className="bg-white/5 rounded-[22px] p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#2F6BFF] flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Message sent!</h3>
                <p className="text-white/60">
                  We'll get back to you within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 rounded-[22px] p-6 lg:p-8">
                <div className="space-y-5">
                  <div>
                    <label className="block text-micro text-white/40 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/10 rounded-[14px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2F6BFF] transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-micro text-white/40 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/10 rounded-[14px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2F6BFF] transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-micro text-white/40 mb-2">Company (optional)</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/10 rounded-[14px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2F6BFF] transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-micro text-white/40 mb-2">Budget range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/10 rounded-[14px] px-4 py-3 text-white focus:outline-none focus:border-[#2F6BFF] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#111216]">Select a range</option>
                      {budgetOptions.map(option => (
                        <option key={option} value={option} className="bg-[#111216]">{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-micro text-white/40 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/10 border border-white/10 rounded-[14px] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2F6BFF] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send inquiry
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
