import { useState, useEffect, useRef } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Cpu, ChevronLeft, ChevronRight } from 'lucide-react'
import BorderGlow from '../ui/BorderGlow'
import { PROJECT_IMAGES } from '../../constants'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  initialProjectIndex?: number
  showAllProjects?: boolean
}

const PROJECT_DATA = [
  {
    title: "Split Sceen INTRO",
    category: "Dr. Anna Aragno",
    imageSrc: PROJECT_IMAGES[0],
    videoSrc: "https://www.youtube.com/embed/q53x16txh4o",
    client: "Dr. Anna Aragno",
    date: "June 2026",
    tech: "Creative Editing, Motion Graphics",
    description: "An elegant, stylized intro sequence showing creative direction and high-end video compilation methods."
  },
  {
    title: "The Magical Eggs On Dragon's Lair Ep. 1",
    category: "Georgina Sano",
    imageSrc: PROJECT_IMAGES[1],
    videoSrc: "https://www.youtube.com/embed/XDcrGFg98Qk",
    client: "Georgina Sano",
    date: "May 2026",
    tech: "CGI, Animation, Unreal Engine",
    description: "Episode 1 of 'The Magical Eggs On Dragon's Lair' series. This fantasy project combines high-quality character animation and complex lighting rigs to bring the magical dragon eggs to life."
  },
  {
    title: "The Magic Wine Cup Teaser",
    category: "Helene Meyers",
    imageSrc: PROJECT_IMAGES[2],
    videoSrc: "https://www.youtube.com/embed/JTOwZr8IOI8",
    client: "Helene Meyers",
    date: "April 2026",
    tech: "Cinematography, Visual Tone, Sound Editing",
    description: "Teaser video for 'The Magic Wine Cup & Other Jewish Plays'. This dramatic trailer establishes the mysterious and magical atmosphere of the upcoming theatrical adaptation."
  },
  {
    title: "Cong Catchers Teaser",
    category: "Lee Halverson",
    imageSrc: PROJECT_IMAGES[3],
    videoSrc: "https://www.youtube.com/embed/EO3y0fWjGJE",
    client: "Lee Halverson",
    date: "March 2026",
    tech: "Sound Design, Editing, Creative Campaign",
    description: "High-impact teaser campaign trailer showcasing fast cuts, stylized typography, and professional action-oriented sound design."
  },
  {
    title: "Destined To Live 9 Lives Teaser",
    category: "Phyllis Duke",
    imageSrc: PROJECT_IMAGES[4],
    videoSrc: "https://www.youtube.com/embed/M08SGI8QHt8",
    client: "Phyllis Duke",
    date: "February 2026",
    tech: "Cinematography, Visual Effects, Editing",
    description: "An evocative teaser for 'Destined To Live 9 Lives' showcasing dramatic visual pacing, rich color grading, and compelling narrative structure."
  },
  {
    title: "A Redeemed Soul's Journey Teaser",
    category: "Walter Scarborough",
    imageSrc: PROJECT_IMAGES[5],
    videoSrc: "https://www.youtube.com/embed/SU8T6DDv72Q",
    client: "Walter Scarborough",
    date: "January 2026",
    tech: "Creative Editing, Sound Design, Motion Graphics",
    description: "A high-impact cinematic teaser tracking a spiritual and emotional journey, featuring expert audio integration and evocative motion graphics."
  }
]

export default function ProjectModal({ 
  isOpen, 
  onClose, 
  initialProjectIndex = 0,
  showAllProjects = true
}: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialProjectIndex)
  const scrollRef = useRef<HTMLDivElement>(null)

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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' })
    }
  }

  const project = PROJECT_DATA[currentIndex] || PROJECT_DATA[0]

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
                  {/* Left Column: Video of Active Project */}
                  <div className="md:col-span-7 relative aspect-video rounded-sm overflow-hidden border border-white/10 bg-black">
                    <iframe
                      key={project.videoSrc}
                      src={project.videoSrc}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
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

                {/* Bottom: Carousel / Grid */}
                <div className="text-left mb-2">
                  <p className="text-[9px] tracking-widest text-gold/80 uppercase font-bold mb-3">
                    {showAllProjects ? "SELECT A PROJECT" : "SELECT A PROJECT CATEGORY"}
                  </p>
                  
                  {showAllProjects ? (
                    <div className="relative group/carousel w-full flex items-center">
                      <style>{`
                        .no-scrollbar::-webkit-scrollbar {
                          display: none;
                        }
                        .no-scrollbar {
                          -ms-overflow-style: none;
                          scrollbar-width: none;
                        }
                      `}</style>
                      
                      {/* Left Arrow */}
                      <button
                        onClick={scrollLeft}
                        className="absolute -left-3 z-20 w-8 h-8 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-cream hover:text-gold hover:border-gold/50 transition-all duration-300 cursor-pointer shadow-lg hover:scale-110 active:scale-95"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      {/* Carousel Scroll Container */}
                      <div
                        ref={scrollRef}
                        className="w-full overflow-x-auto no-scrollbar flex gap-3 snap-x snap-mandatory scroll-smooth pb-2 px-1"
                      >
                        {PROJECT_DATA.map((item, idx) => (
                          <button
                            key={item.title}
                            onClick={() => setCurrentIndex(idx)}
                            className={`flex-shrink-0 w-[46%] sm:w-[30%] md:w-[23%] relative aspect-video rounded-sm overflow-hidden border text-left p-0 cursor-pointer transition-all duration-300 group snap-start ${
                              currentIndex === idx
                                ? 'border-gold shadow-[0_0_12px_rgba(201,162,39,0.3)] scale-[1.02] brightness-110'
                                : 'border-white/10 opacity-60 hover:opacity-95 hover:scale-[1.01] brightness-90'
                            }`}
                          >
                            <img
                              src={item.imageSrc}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-300"></div>
                            <div className="absolute inset-0 p-2 flex flex-col justify-end">
                              <span className="text-[8px] text-gold font-bold tracking-wider uppercase">{item.category}</span>
                              <span className="text-[10px] text-cream font-semibold truncate leading-tight uppercase">{item.title}</span>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Right Arrow */}
                      <button
                        onClick={scrollRight}
                        className="absolute -right-3 z-20 w-8 h-8 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-cream hover:text-gold hover:border-gold/50 transition-all duration-300 cursor-pointer shadow-lg hover:scale-110 active:scale-95"
                        aria-label="Scroll right"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {PROJECT_DATA.slice(0, 4).map((item, idx) => (
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
                            src={item.imageSrc}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-300"></div>
                          <div className="absolute inset-0 p-2 flex flex-col justify-end">
                            <span className="text-[8px] text-gold font-bold tracking-wider uppercase">{item.category}</span>
                            <span className="text-[10px] text-cream font-semibold truncate leading-tight uppercase">{item.title}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </BorderGlow>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
