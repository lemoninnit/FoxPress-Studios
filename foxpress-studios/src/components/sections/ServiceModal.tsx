import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { X, Video, Sparkles, Megaphone, CalendarDays, CheckCircle2 } from 'lucide-react'
import BorderGlow from '../ui/BorderGlow'

import whiteDragon from '../../assets/dragon-white.jpg'
import blueDragon from '../../assets/dragon-blue.jpg'
import battleScene from '../../assets/dragon-battle.jpg'
import redDragon from '../../assets/dragon-red.jpg'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  initialServiceIndex?: number
}

const SERVICE_DATA = [
  {
    title: "Film & Video Productions",
    icon: Video,
    image: whiteDragon,
    subtitle: "Premium Cinematic Content",
    description: "Our cinematic production team handles everything from scriptwriting and storyboarding to final filming and color grading. We specialize in producing premium TV commercials, trailers, brand documentaries, and corporate storytelling that captivates audiences.",
    capabilities: ["Cinematography & Directing", "Screenwriting & Storyboarding", "Color Grading & Editing", "Commercial Production"],
    tools: "RED V-Raptor, Cooke Anamorphic, DaVinci Resolve Studio"
  },
  {
    title: "CGI & Animation",
    icon: Sparkles,
    image: blueDragon,
    subtitle: "Photorealistic 3D Artistry",
    description: "We create stunning 3D CGI characters, photorealistic product renderings, and environment animations that defy reality. Whether it is a creature sequence or a futuristic architecture simulation, our CGI artists deliver world-class animation.",
    capabilities: ["3D Character Animation", "Creature & Asset Rigging", "Fluid & FX Simulation", "Sub-surface Skin Rendering"],
    tools: "Unreal Engine 5, Houdini, Autodesk Maya, Substance Painter"
  },
  {
    title: "Publicity & Media Placement",
    icon: Megaphone,
    image: battleScene,
    subtitle: "High-Impact Press Campaigns",
    description: "Get your brand noticed by the right audience. We design custom PR campaigns, write compelling press releases, and secure media spots in top-tier digital and print publications to build credibility and multiply your reach.",
    capabilities: ["Press Release Distribution", "Targeted Media Pitching", "Brand Strategy Consulting", "Crisis PR & Reputation Management"],
    tools: "Cision, PR Newswire, Custom Media Databases"
  },
  {
    title: "Events & Creative Campaigns",
    icon: CalendarDays,
    image: redDragon,
    subtitle: "Experiential Digital Marketing",
    description: "Integrated marketing campaigns and experiential events that connect deeply with consumers. We combine physical brand events, online interactive experiences, social media teasers, and advertising campaigns to maximize conversions.",
    capabilities: ["Experiential Marketing Tours", "Interactive WebGL Experiences", "Social Media Teaser Suites", "Multi-platform Campaigns"],
    tools: "React, WebGL, Adobe Premiere Pro, After Effects"
  }
]

export default function ServiceModal({ isOpen, onClose, initialServiceIndex = 0 }: ServiceModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialServiceIndex)

  // Sync index with initialServiceIndex when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialServiceIndex)
    }
  }, [isOpen, initialServiceIndex])

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

  const service = SERVICE_DATA[currentIndex]
  const IconComponent = service.icon

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop (no blur, semi-transparent background consistent with contact modal) */}
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
            className="relative w-full max-w-5xl z-10 pointer-events-auto my-auto"
          >
            {/* Modal Card wrapper with BorderGlow for design consistency, a bold dark background and cutting corner */}
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
              <div className="w-full relative p-6 md:p-8 flex flex-col max-h-[90vh] overflow-y-auto select-none">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-10 text-cream/70 hover:text-gold transition-colors p-1 bg-white/5 hover:bg-white/10 rounded-full border-none cursor-pointer z-20"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                {/* Header */}
                <div className="mb-6 text-left">
                  <p className="text-[10px] tracking-[0.3em] text-gold uppercase font-semibold mb-1">OUR EXPERTISE</p>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-cream uppercase">CREATIVE SERVICES</h3>
                  <div className="w-12 h-[2px] bg-gold mt-2"></div>
                </div>

                {/* Top: Wordings / Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-left mb-8">
                  {/* Left Column: Image of Active Service (no cropping, aspect-video matching original) */}
                  <div className="md:col-span-7 relative aspect-video rounded-sm overflow-hidden border border-white/10">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Right Column: Title, Category, capabilities, and Details Description */}
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div>
                      <span className="text-[10px] tracking-widest text-gold uppercase font-bold flex items-center gap-1.5">
                        <IconComponent size={12} className="text-gold" />
                        {service.subtitle}
                      </span>
                      <h4 className="text-xl font-display font-bold text-cream mt-0.5 uppercase">{service.title}</h4>
                    </div>

                    <p className="text-cream/70 text-xs md:text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Capabilities list */}
                    <div className="pt-3 border-t border-white/5 space-y-2">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-gold/80">Key Capabilities</p>
                      <div className="grid grid-cols-1 gap-2 text-[11px] text-cream/75">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2">
                            <CheckCircle2 size={12} className="text-gold shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools / Software */}
                    <div className="pt-2 text-[10px] text-cream/50">
                      <span>Preferred Stack: <strong className="text-cream/80">{service.tools}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/5 mb-6"></div>

                {/* Bottom: 4 Image Buttons */}
                <div className="text-left mb-2">
                  <p className="text-[9px] tracking-widest text-gold/80 uppercase font-bold mb-3">SELECT A SERVICE CATEGORY</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {SERVICE_DATA.map((item, idx) => {
                      const ButtonIcon = item.icon
                      return (
                        <button
                          key={item.title}
                          onClick={() => setCurrentIndex(idx)}
                          className={`relative aspect-video rounded-sm overflow-hidden border text-left p-0 cursor-pointer transition-all duration-300 group ${
                            currentIndex === idx 
                              ? 'border-gold shadow-[0_0_12px_rgba(201,162,39,0.3)] scale-[1.02] brightness-110' 
                              : 'border-white/10 opacity-60 hover:opacity-95 hover:scale-[1.01] brightness-90'
                          }`}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-300"></div>
                          <div className="absolute inset-0 p-2 flex flex-col justify-end">
                            <span className="text-[8px] text-gold font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                              <ButtonIcon size={8} />
                              {item.subtitle}
                            </span>
                            <span className="text-[10px] text-cream font-semibold truncate leading-tight uppercase">{item.title}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

              </div>
            </BorderGlow>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
