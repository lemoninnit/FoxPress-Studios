import { useState } from 'react'
import { m } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SERVICES } from '../../constants'
import ShapeGrid from '../ui/ShapeGrid'
import BorderGlow from '../ui/BorderGlow'
import ServiceModal from './ServiceModal'
import whiteDragon from '../../assets/dragon-white.jpg'
import blueDragon from '../../assets/dragon-blue.jpg'
import battleScene from '../../assets/dragon-battle.jpg'
import redDragon from '../../assets/dragon-red.jpg'

const SERVICE_IMAGES = [
  whiteDragon,
  blueDragon,
  battleScene,
  redDragon,
]

interface ServiceCardProps {
  title: string
  desc: string
  icon: string
  image: string
  index: number
  onClick?: () => void
}

function ServiceCard({ title, desc, icon, image, onClick }: ServiceCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as React.ElementType

  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="relative aspect-[4/3] cursor-pointer group"
    >
      <BorderGlow
        edgeSensitivity={30}
        glowColor="45 80% 50%"
        backgroundColor="#0a0a0a"
        borderRadius={0}
        glowRadius={40}
        glowIntensity={1.2}
        coneSpread={25}
        animated={false}
        colors={['#c9a227', '#e5c043', '#8e6d12']}
        className="w-full h-full border-0"
      >
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
            loading="lazy"
            decoding="async"
            width={600}
            height={450}
          />
          <div 
            className="absolute inset-0" 
            style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.1) 100%)' }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 z-10 flex flex-col justify-end">
            <div className="mb-3">
              <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <IconComponent size={16} className="text-gold" aria-hidden="true" />
              </div>
            </div>
            <h3 className="text-cream font-display font-bold text-xs md:text-sm uppercase tracking-wide mb-2">
              {title}
            </h3>
            <p className="text-cream/60 text-xs leading-relaxed hidden sm:block">
              {desc}
            </p>
          </div>
        </div>
      </BorderGlow>
    </m.div>
  )
}

export default function Services() {
  const [serviceModalOpen, setServiceModalOpen] = useState(false)
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0)

  const handleOpenService = (index: number) => {
    setSelectedServiceIndex(index)
    setServiceModalOpen(true)
  }

  return (
    <section id="services" className="w-full bg-black section-padding overflow-hidden relative">
      {/* Background ShapeGrid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <ShapeGrid 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='rgba(201, 162, 39, 0.15)'
          hoverFillColor='rgba(201, 162, 39, 0.25)'
          shape='square'
          hoverTrailAmount={5}
        />
      </div>
      <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* Left column — intro block */}
        <m.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
        >
          <p className="section-eyebrow text-gold mb-6">WHAT WE DO</p>
          <h2 className="section-title mb-6">
            <span className="block">CREATIVE SOLUTIONS</span>
            <span className="block">THAT DRIVE RESULTS</span>
          </h2>
          <div className="gold-divider mx-auto lg:mx-0"></div>
          <p className="text-cream/60 text-sm md:text-base leading-relaxed mb-10">
            From concept to completion, we deliver end-to-end media and marketing solutions tailored to help brands, authors, and creators make an impact.
          </p>
          <button 
            onClick={() => handleOpenService(0)}
            className="text-gold text-xs tracking-[0.25em] uppercase font-semibold hover:text-gold-light transition-colors inline-flex items-center gap-2 bg-transparent border-none cursor-pointer"
          >
            EXPLORE SERVICES &rarr;
          </button>
        </m.div>

        {/* Right column — 2x2 card grid */}
        <m.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {SERVICES.map((service, index) => (
            <m.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <ServiceCard 
                title={service.title}
                desc={service.desc}
                icon={service.icon}
                image={SERVICE_IMAGES[index]}
                index={index}
                onClick={() => handleOpenService(index)}
              />
            </m.div>
          ))}
        </m.div>

      </div>

      <ServiceModal
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        initialServiceIndex={selectedServiceIndex}
      />
    </section>
  )
}