import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { NEWS } from '../../constants'
import * as Icons from 'lucide-react'
import { LiquidButton } from '../ui/liquid-glass-button'
import ShapeGrid from '../ui/ShapeGrid'
import BorderGlow from '../ui/BorderGlow'

export default function News() {
  const [selectedPost, setSelectedPost] = useState<typeof NEWS[number] | null>(null)

  useEffect(() => {
    // Disable scroll when modal is open
    if (selectedPost) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedPost])

  return (
    <section id="news" className="w-full bg-black section-padding relative overflow-hidden border-t border-white/5 scroll-mt-20">
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

      <div className="container-width text-center relative z-10">
        <p className="section-eyebrow text-gold mb-4">UPDATES</p>
        <h2 className="section-title mb-6">STUDIO NEWS</h2>
        <div className="gold-divider mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pb-16">
          {NEWS.map((post, idx) => (
            <m.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedPost(post)}
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
                <div className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <div className="flex items-center gap-2 text-gold text-[10px] tracking-wider uppercase font-semibold mb-4">
                      <Icons.Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-cream text-lg md:text-xl uppercase tracking-wide group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-cream/50 text-xs md:text-sm leading-relaxed mt-4 line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-gold text-xs tracking-widest uppercase font-semibold group-hover:text-gold-light transition-colors gap-2">
                    <span>READ FULL ARTICLE</span>
                    <Icons.ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </BorderGlow>
            </m.div>
          ))}
        </div>
      </div>

      {/* News Article Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/70 cursor-pointer"
            />

            {/* Modal Box */}
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-xl z-10 pointer-events-auto"
            >
              <div className="w-full shadow-2xl border border-white/10 rounded-sm bg-black/95 p-6 md:p-8 flex flex-col relative text-left">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 text-cream/70 hover:text-gold transition-colors p-1 bg-white/5 hover:bg-white/10 rounded-full border-none cursor-pointer"
                  aria-label="Close modal"
                >
                  <Icons.X size={18} />
                </button>

                <div className="flex items-center gap-2 text-gold text-[10px] tracking-wider uppercase font-semibold mb-3">
                  <Icons.Calendar size={12} />
                  <span>{selectedPost.date}</span>
                </div>
                <h3 className="font-display font-bold text-cream text-xl md:text-2xl uppercase tracking-wide leading-snug">
                  {selectedPost.title}
                </h3>
                <div className="w-12 h-[2px] bg-gold my-4"></div>
                
                <div className="text-cream/70 text-sm leading-relaxed space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  <p>{selectedPost.summary}</p>
                  <p>
                    Foxpress Studios remains committed to excellence and innovation, pushing boundaries in CGI, animation, and digital media production. Our dedicated team continues to elevate brand storytelling and deliver high-fidelity products that set new standards in the creative arts.
                  </p>
                  <p>
                    For partnerships, project inquiries, or press details regarding this announcement, please feel free to reach out to our media relations team via our contact form.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <LiquidButton
                    onClick={() => setSelectedPost(null)}
                    className="border border-gold/45 text-gold text-xs tracking-widest uppercase px-6 py-3 bg-gold/15 backdrop-blur-md hover:scale-[1.015] hover:brightness-108 hover:shadow-[0_0_15px_rgba(201,162,39,0.2)] transition-all duration-500 ease-out !h-auto !py-3 !rounded-sm w-full cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-full">
                      <span>CLOSE WINDOW</span>
                    </div>
                  </LiquidButton>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
