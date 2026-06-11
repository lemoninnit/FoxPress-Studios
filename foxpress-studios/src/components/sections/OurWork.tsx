import { useState } from 'react'
import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '../../constants'
import { LiquidButton } from '../ui/liquid-glass-button'
import ShapeGrid from '../ui/ShapeGrid'
import BorderGlow from '../ui/BorderGlow'
import ProjectModal from './ProjectModal'

import whiteDragon from '../../assets/dragon-white.jpg'
import blueDragon from '../../assets/dragon-blue.jpg'
import battleScene from '../../assets/dragon-battle.jpg'
import redDragon from '../../assets/dragon-red.jpg'

const PROJECT_IMAGES = [
  whiteDragon,
  blueDragon,
  battleScene,
  redDragon,
]

export default function OurWork() {
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  const handleOpenProject = (index: number) => {
    setSelectedProjectIndex(index)
    setProjectModalOpen(true)
  }

  return (
    <section id="work" className="w-full bg-surface2 section-padding overflow-hidden relative">
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
      <div className="container-width flex flex-col gap-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="section-eyebrow text-gold">PORTFOLIO</p>
            <h2 className="section-title mb-6">
              <span className="block">FEATURED</span>
              <span className="block">PROJECTS</span>
            </h2>
            <div className="gold-divider"></div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <LiquidButton 
              onClick={() => handleOpenProject(0)}
              className="border border-white/20 text-cream text-xs tracking-widest uppercase px-6 py-3 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-[1.03] hover:brightness-115 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out !h-auto !py-3 !rounded-sm flex items-center gap-2 cursor-pointer"
            >
              VIEW ALL PROJECTS
            </LiquidButton>
          </m.div>
        </div>

        {/* Grid */}
        <m.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project, index) => (
            <m.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleOpenProject(index)}
              className="group relative aspect-video cursor-pointer"
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
                  {/* Image */}
                  <img
                    src={PROJECT_IMAGES[index]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                    <p className="text-gold text-xs tracking-widest uppercase font-semibold mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-cream font-display text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] delay-100">
                      <span className="uppercase tracking-widest text-xs">View Project</span>
                      <ArrowRight size={14} className="text-gold" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </m.div>
          ))}
        </m.div>

      </div>

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        initialProjectIndex={selectedProjectIndex}
      />
    </section>
  )
}