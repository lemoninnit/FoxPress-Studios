import { m } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeUp } from '../../styles/animations'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
}

export default function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <m.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </m.div>
  )
}
