import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="bg-[#111216] text-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">MizumiSoft</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              We craft digital experiences that stay with people. Strategy, design, and development—as one system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-micro text-white/40 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Work', 'Services', 'Studio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const id = item.toLowerCase()
                      const element = document.getElementById(id === 'work' ? 'projects' : id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-micro text-white/40 mb-4">Get in Touch</h4>
            <a
              href="mailto:mizumisoftwares@gmail.com"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-3"
            >
              <Mail size={16} />
              mizumisoftwares@gmail.com
            </a>
            <a
              href="tel:8303959362"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-3"
            >
              <Phone size={16} />
              8303959362
            </a>
            <div className="flex items-start gap-2 text-white/70 text-sm mb-4">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <span>Balua Road, Milkopur, Varanasi 221112</span>
            </div>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2F6BFF] transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} MizumiSoft. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-white/40 hover:text-white text-sm transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
