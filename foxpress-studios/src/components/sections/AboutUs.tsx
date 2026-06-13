import { m } from 'framer-motion'
import ShapeGrid from '../ui/ShapeGrid'
import BorderGlow from '../ui/BorderGlow'
import InfiniteCarousel from '../ui/InfiniteCarousel'
import heroBg from '../../assets/hero-bg.jpg'

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-black section-padding relative overflow-hidden border-t border-white/5 scroll-mt-20">
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

      {/* Story & Mission Block */}
      <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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
            Founded in Slough, Berkshire, England, Foxpress Studios was built on a simple premise: every project deserves to be told with cinematic scale and meticulous craftsmanship. Whether developing CGI assets for video games, directing commercials, or launching targeted publicity campaigns, our team approaches every task with creative passion and technical rigor.
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
          className="group relative aspect-video"
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
            className="w-full h-full border-only-glow"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={heroBg}
                alt="Foxpress Studios"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left z-10">
                <span className="text-[9px] tracking-widest text-gold uppercase font-bold">FOXPRESS STUDIOS</span>
                <p className="text-cream text-xs font-semibold mt-0.5">Where creative imagination meets digital craftsmanship.</p>
              </div>
            </div>
          </BorderGlow>
        </m.div>
      </div>

      {/* Infinite Carousel Animation */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 md:mt-24"
      >
        <InfiniteCarousel />
      </m.div>
    </section>
  )
}
