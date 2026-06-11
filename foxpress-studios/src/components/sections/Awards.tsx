import { m } from 'framer-motion'
import { AWARDS } from '../../constants'
import * as Icons from 'lucide-react'
import ShapeGrid from '../ui/ShapeGrid'
import BorderGlow from '../ui/BorderGlow'

// Import assets
import hermesAwardsImg from '../../assets/icons/hermes-awards.png'

export default function Awards() {
  return (
    <section id="awards" className="w-full bg-black section-padding relative overflow-hidden border-t border-white/5 scroll-mt-20">
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

      {/* Spotlight Showcase */}
      <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 relative z-10">
        <m.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-sm overflow-hidden border border-white/10 bg-black/60 p-6 flex items-center justify-center min-h-[300px]"
        >
          <div className="absolute inset-0 bg-gold/5 pointer-events-none"></div>
          <img src={hermesAwardsImg} alt="Hermes Creative Awards" className="max-h-[280px] object-contain relative z-10 filter drop-shadow-[0_0_35px_rgba(201,162,39,0.25)]" />
        </m.div>

        <m.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left space-y-6"
        >
          <span className="text-[10px] tracking-widest text-gold uppercase font-bold">FEATURED RECOGNITION</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-cream uppercase">HERMES CREATIVE AWARDS 2026</h2>
          <div className="w-12 h-[2px] bg-gold"></div>
          <p className="text-cream/60 text-sm leading-relaxed">
            We are honored to receive multiple Platinum honors at the 2026 Hermes Creative Awards. The Hermes Creative Awards is one of the largest and oldest creative competitions in the world, recognizing the creative industry's best publications, branding collateral, websites, videos, and advertising programs.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed">
            Our winning campaign, <strong>"Ethereal Ascension"</strong>, was praised for its boundary-pushing CGI integration, cinematic flow, and high emotional resonance.
          </p>
        </m.div>
      </div>

      {/* Awards Matrix Grid */}
      <div className="container-width text-center relative z-10">
        <p className="section-eyebrow text-gold mb-4">RECOGNITIONS</p>
        <h2 className="section-title mb-6">STUDIO AWARDS</h2>
        <div className="gold-divider mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {AWARDS.map((award, idx) => {
            const IconComp = (Icons[award.icon as keyof typeof Icons] || Icons.Trophy) as React.ElementType
            return (
              <m.div
                key={award.name + '-' + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <BorderGlow
                  edgeSensitivity={30}
                  glowColor="45 80% 50%"
                  backgroundColor="#0a0a0a"
                  borderRadius={2}
                  glowRadius={40}
                  glowIntensity={1.0}
                  coneSpread={25}
                  animated={false}
                  colors={['#c9a227', '#e5c043', '#8e6d12']}
                  className="w-full h-full border-0"
                >
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-all duration-300">
                      <IconComp size={18} className="text-gold" />
                    </div>
                    <span className="text-[10px] tracking-wider text-gold uppercase font-bold">{award.year} Winner</span>
                    <h4 className="font-display font-bold text-cream text-base uppercase tracking-wide mt-2 group-hover:text-gold transition-colors">
                      {award.name}
                    </h4>
                    <p className="text-cream/50 text-xs leading-relaxed mt-2">
                      {award.category}
                    </p>
                  </div>
                </BorderGlow>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
