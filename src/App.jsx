import { useEffect, useRef } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

// Sections
import HeroSection from './sections/HeroSection'
import ManifestoSection from './sections/ManifestoSection'
import CapabilitiesSection from './sections/CapabilitiesSection'
import FeaturedWorkSection from './sections/FeaturedWorkSection'
import ProcessSection from './sections/ProcessSection'
import PrinciplesSection from './sections/PrinciplesSection'
import ProjectsGridSection from './sections/ProjectsGridSection'
import StudioSection from './sections/StudioSection'
import CollaborationSection from './sections/CollaborationSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FAQSection from './sections/FAQSection'
import ContactSection from './sections/ContactSection'

function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={mainRef} className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <ManifestoSection />
        <CapabilitiesSection />
        <FeaturedWorkSection />
        <ProcessSection />
        <PrinciplesSection />
        <ProjectsGridSection />
        <StudioSection />
        <CollaborationSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  )
}

export default App
