import { m } from 'framer-motion'
import { TEAM } from '../../constants'
import ShapeGrid from '../ui/ShapeGrid'
import * as Icons from 'lucide-react'

// Import assets
import battleScene from '../../assets/dragon-battle.jpg'

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-black py-20 relative overflow-hidden border-t border-white/5 scroll-mt-20">
      {/* Background ShapeGrid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <ShapeGrid 
          speed={0.3} 
          squareSize={40}
          direction='diagonal'
          borderColor='rgba(201, 162, 39, 0.12)'
          hoverFillColor='rgba(201, 162, 39, 0.2)'
          shape='square'
          hoverTrailAmount={4}
        />
      </div>

      {/* Story & Mission Block */}
      <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 mb-20">
        <m.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <p className="section-eyebrow text-gold">OUR VISION</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-cream uppercase">
            ELEVATING STORIES. INSPIRING THE WORLD.
          </h2>
          <p className="text-cream/60 text-sm leading-relaxed">
            Founded in Pasadena, California, Foxpress Studios was built on a simple premise: every project deserves to be told with cinematic scale and meticulous craftsmanship. Whether developing CGI assets for video games, directing commercials, or launching targeted publicity campaigns, our team approaches every task with creative passion and technical rigor.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed">
            We operate at the intersection of technology and art, utilizing advanced rendering pipelines and digital distribution methods to ensure our partners' stories reach the right audiences at the highest possible fidelity.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-gold pl-4">
              <h4 className="text-cream font-bold text-sm uppercase mb-1">Our Mission</h4>
              <p className="text-cream/50 text-xs leading-relaxed">To create high-fidelity visual media and deliver PR strategies that empower voices and build brands.</p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h4 className="text-cream font-bold text-sm uppercase mb-1">Our Philosophy</h4>
              <p className="text-cream/50 text-xs leading-relaxed">Meticulous detail, high aesthetic standards, and strategic placing drive absolute excellence.</p>
            </div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-2xl"
        >
          <img src={battleScene} alt="Our Creative Work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[9px] tracking-widest text-gold uppercase font-bold">FOXPRESS STUDIOS</span>
            <p className="text-cream text-xs font-semibold mt-0.5">Where creative imagination meets digital craftsmanship.</p>
          </div>
        </m.div>
      </div>

      {/* Team Profile Block */}
      <div className="container-width text-center relative z-10">
        <p className="section-eyebrow text-gold mb-4">THE TEAM</p>
        <h2 className="section-title mb-6">CREATIVE PROFESSIONALS</h2>
        <div className="gold-divider mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {TEAM.map((member, idx) => (
            <m.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative rounded-sm border border-white/10 bg-black/40 p-4 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_8px_30px_rgb(201,162,39,0.05)] cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-white/5 border border-white/5 mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gold/5">
                  <Icons.User size={40} className="text-gold/20 group-hover:text-gold/40 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <h4 className="font-display font-bold text-cream text-sm uppercase tracking-wide group-hover:text-gold transition-colors">{member.name}</h4>
              <p className="text-gold text-[10px] tracking-widest uppercase font-semibold mt-1">{member.role}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
