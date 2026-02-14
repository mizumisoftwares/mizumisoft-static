import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = '8303959362'
  const whatsappMessage = 'Hi MizumiSoft! I\'m interested in discussing a project with you.'
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#111216] text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-[#111216] rotate-45" />
      </span>
    </button>
  )
}

export default WhatsAppButton
