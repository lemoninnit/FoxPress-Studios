import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Cpu } from 'lucide-react'
import BorderGlow from '../ui/BorderGlow'
import ImagePlaceholder from '../ui/ImagePlaceholder'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  initialProjectIndex?: number
}

const PROJECT_DATA = [
  {
    title: "Ethereal Ascension",
    category: "CGI & Animation",
    client: "Epic Games",
    date: "January 2026",
    tech: "Unreal Engine 5, Houdini, Substance Painter",
    description: "A groundbreaking digital cinematic showcasing advanced character design, high-fidelity skin shading, and dynamic muscle simulation. Developed using custom Houdini and Unreal Engine 5 pipelines, this showcase features a photorealistic white dragon rendering with sub-surface scattering skin textures and realistic wing articulation."
  },
  {
    title: "Crimson Skies",
    category: "Film Production",
    client: "Paramount Pictures",
    date: "November 2025",
    tech: "RED V-Raptor, Cooke Anamorphic, DaVinci Resolve",
    description: "An epic action-adventure commercial production involving high-speed camera work, anamorphic lenses, and practical pyrotechnic effects. Our production team traveled across remote mountainous locations to capture stunning natural vistas, seamlessly integrated with real-time digital sky replacements."
  },
  {
    title: "The Frost King",
    category: "Visual Effects",
    client: "Warner Bros",
    date: "July 2025",
    tech: "Nuke, Maya, Arnold Renderer, Deep Compositing",
    description: "Feature-film grade VFX sequence involving complex particle systems, fluid simulations for snow and ice, and custom creature integration. Using deep compositing techniques, our team combined live-action actors with massive digital environments and dynamic environmental destruction elements."
  },
  {
    title: "Battle of the Ancients",
    category: "Creative Campaign",
    client: "Tencent Games",
    date: "March 2025",
    tech: "React, WebGL, Adobe Premiere Pro, After Effects",
    description: "A multi-platform digital marketing campaign designed to engage players and boost community retention. Combining immersive web interactive experiences, social media teasers, and cinematic trailers, the campaign generated over 50 million impressions worldwide."
  }
]

export default function ProjectModal({ isOpen, onClose, initialProjectIndex = 0 }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialProjectIndex)

  // Sync index with initialProjectIndex when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialProjectIndex)
    }
  }, [isOpen, initialProjectIndex])

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

  const project = PROJECT_DATA[currentIndex]

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
                  <p className="text-[10px] tracking-[0.3em] text-gold uppercase font-semibold mb-1">PROJECT DETAILS</p>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-cream uppercase">PORTFOLIO SHOWCASE</h3>
                  <div className="w-12 h-[2px] bg-gold mt-2"></div>
                </div>

                {/* Top: Wordings / Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-left mb-8">
                  {/* Left Column: Image of Active Project */}
                  <div className="md:col-span-7 relative aspect-video rounded-sm overflow-hidden border border-white/10">
                    <ImagePlaceholder 
                      title={project.title} 
                      category={project.category}
                      index={currentIndex}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Right Column: Title, Category, Stats, and Details Description */}
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div>
                      <span className="text-[10px] tracking-widest text-gold uppercase font-bold">{project.category}</span>
                      <h4 className="text-xl font-display font-bold text-cream mt-0.5 uppercase">{project.title}</h4>
                    </div>

                    <p className="text-cream/70 text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metadata list */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5 text-[11px] text-cream/50">
                      <div className="flex items-center gap-2">
                        <User size={12} className="text-gold shrink-0" />
                        <span>Client: <strong className="text-cream/80">{project.client}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-gold shrink-0" />
                        <span>Released: <strong className="text-cream/80">{project.date}</strong></span>
                      </div>
                      <div className="col-span-2 flex items-start gap-2">
                        <Cpu size={12} className="text-gold shrink-0 mt-0.5" />
                        <span>Technologies: <strong className="text-cream/80">{project.tech}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/5 mb-6"></div>

                {/* Bottom: 4 Image Buttons */}
                <div className="text-left mb-2">
                  <p className="text-[9px] tracking-widest text-gold/80 uppercase font-bold mb-3">SELECT A PROJECT CATEGORY</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {PROJECT_DATA.map((item, idx) => (
                      <button
                        key={item.category}
                        onClick={() => setCurrentIndex(idx)}
                        className={`relative aspect-video rounded-sm overflow-hidden border text-left p-0 cursor-pointer transition-all duration-300 group ${
                          currentIndex === idx 
                            ? 'border-gold shadow-[0_0_12px_rgba(201,162,39,0.3)] scale-[1.02] brightness-110' 
                            : 'border-white/10 opacity-60 hover:opacity-95 hover:scale-[1.01] brightness-90'
                        }`}
                      >
                        <ImagePlaceholder 
                          title={item.title} 
                          category={item.category}
                          index={idx}
                          hideText={true}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-300"></div>
                        <div className="absolute inset-0 p-2 flex flex-col justify-end">
                          <span className="text-[8px] text-gold font-bold tracking-wider uppercase">{item.category}</span>
                          <span className="text-[10px] text-cream font-semibold truncate leading-tight uppercase">{item.title}</span>
                        </div>
                      </button>
                    ))}
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
