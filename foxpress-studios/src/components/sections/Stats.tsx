import { m } from 'framer-motion'
import { STATS } from '../../constants'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import type { Stat } from '../../types'
import { staggerContainer, fadeUp, scaleIn } from '../../styles/animations'

import industryAwards from '../../assets/Industry Awards.png'
import projectsCompleted from '../../assets/Projects Completed.png'
import countriesServed from '../../assets/Countries Served.png'
import creativeProfessionals from '../../assets/Creative Professionals.png'

const STAT_IMAGES: Record<string, string> = {
  'Industry Awards': industryAwards,
  'Projects Completed': projectsCompleted,
  'Countries Served': countriesServed,
  'Creative Professionals': creativeProfessionals,
}

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section id="stats" ref={ref} className="w-full bg-black/35 backdrop-blur-md border-y border-white/10 py-8 md:py-10 relative z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_30px_rgba(0,0,0,0.2)]">
      <div className="container-width">
        <m.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0"
        >
          {STATS.map((stat) => {
            return (
              <StatItem 
                key={stat.label} 
                stat={stat} 
                inView={inView} 
              />
            )
          })}
        </m.div>
      </div>
    </section>
  )
}

function StatItem({ stat, inView }: { stat: Stat, inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView)

  return (
    <m.div
      variants={fadeUp}
      className="flex flex-col items-center justify-center text-center py-6 px-4 border-white/10 odd:border-r md:odd:border-r md:border-r md:last:border-r-0 [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
    >
      <m.div variants={scaleIn} className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4">
        <img 
          src={STAT_IMAGES[stat.label]} 
          alt={stat.label} 
          className="w-full h-full object-contain"
        />
      </m.div>
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-display block leading-none mb-2">
        {count}{stat.suffix}
      </span>
      <p className="text-muted text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
        {stat.label}
      </p>
    </m.div>
  )
}
