import React, { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { X, Send, Check } from 'lucide-react'
import { LiquidButton } from '../ui/liquid-glass-button'
import BorderGlow from '../ui/BorderGlow'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Disable page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop (no blur, semi-transparent background) */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 cursor-pointer"
          />

          {/* Modal Container */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-lg z-10 pointer-events-auto"
          >
            {/* Modal Card wrapper with BorderGlow for design consistency and a bold dark background for readability */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="45 80% 50%"
              backgroundColor="#080808"
              borderRadius={2}
              glowRadius={40}
              glowIntensity={1.0}
              coneSpread={25}
              animated={false}
              colors={['#c9a227', '#e5c043', '#8e6d12']}
              cutCorner="diagonal-2"
              className="w-full border-0 shadow-2xl"
            >
              <div className="w-full relative p-6 md:p-8 flex flex-col">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-10 text-cream/70 hover:text-gold transition-colors p-1 bg-white/5 hover:bg-white/10 rounded-full border-none cursor-pointer z-20"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="mb-6 text-left">
                  <p className="text-[10px] tracking-[0.3em] text-gold uppercase font-semibold mb-1">GET IN TOUCH</p>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-cream">CONTACT US</h3>
                  <div className="w-12 h-[2px] bg-gold mt-2"></div>
                </div>

                {isSuccess ? (
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/25 border border-gold flex items-center justify-center mb-4 text-gold">
                      <Check size={28} />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-cream mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm text-cream/60 max-w-xs leading-relaxed mb-6">
                      Thank you for reaching out. A member of our creative team will get back to you shortly.
                    </p>
                    <LiquidButton
                      onClick={() => {
                        setIsSuccess(false)
                        onClose()
                      }}
                      className="border border-gold/45 text-gold text-xs tracking-widest uppercase px-6 py-3 bg-gold/15 backdrop-blur-md hover:scale-[1.015] hover:brightness-108 hover:shadow-[0_0_15px_rgba(201,162,39,0.2)] transition-all duration-500 ease-out !h-auto !py-3 !rounded-sm w-full cursor-pointer"
                    >
                      <div className="flex items-center justify-center w-full">
                        <span>CLOSE WINDOW</span>
                      </div>
                    </LiquidButton>
                  </m.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-widest text-cream/50 uppercase font-medium">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2.5 bg-black/40 border border-white/10 text-cream text-sm rounded-sm focus:border-gold/60 focus:bg-black/60 outline-none transition-all"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-widest text-cream/50 uppercase font-medium">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2.5 bg-black/40 border border-white/10 text-cream text-sm rounded-sm focus:border-gold/60 focus:bg-black/60 outline-none transition-all"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest text-cream/50 uppercase font-medium">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2.5 bg-black/40 border border-white/10 text-cream text-sm rounded-sm focus:border-gold/60 focus:bg-black/60 outline-none transition-all"
                        placeholder="Project Inquiry, Partnership, etc."
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest text-cream/50 uppercase font-medium">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2.5 bg-black/40 border border-white/10 text-cream text-sm rounded-sm focus:border-gold/60 focus:bg-black/60 outline-none transition-all resize-none"
                        placeholder="Tell us about your project or vision..."
                      />
                    </div>

                    {/* Properly aligned and visually balanced Send button */}
                    <LiquidButton
                      type="submit"
                      disabled={isSubmitting}
                      className="border border-gold/45 text-gold text-xs tracking-[0.2em] font-semibold uppercase px-6 py-3 bg-gold/15 backdrop-blur-md shadow-[0_8px_32px_0_rgba(201,162,39,0.1),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-[1.015] hover:brightness-108 hover:shadow-[0_0_15px_rgba(201,162,39,0.2)] transition-all duration-500 ease-out !h-auto !py-3 !rounded-sm w-full disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2 w-full">
                          <span>SENDING...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2 w-full">
                          <span>SEND MESSAGE</span>
                          <Send size={12} className="shrink-0" />
                        </div>
                      )}
                    </LiquidButton>
                  </form>
                )}
              </div>
            </BorderGlow>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
