import { useRef, useState, useEffect } from 'react'
import { Film, Compass, Share2, Layers, Award, Sparkles, MessageSquare } from 'lucide-react'

interface CarouselItem {
  id: number
  title: string
  subtitle: string
  description: string
  icon: any
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: "CGI & Animation",
    subtitle: "Aether CGI Division",
    description: "High-fidelity 3D modeling, photorealistic rendering pipelines, and character animation.",
    icon: Layers
  },
  {
    id: 2,
    title: "Film & Video",
    subtitle: "Titan Video Labs",
    description: "Cinematic scale production, storytelling direction, and premium commercial campaigns.",
    icon: Film
  },
  {
    id: 3,
    title: "Publicity & Media",
    subtitle: "Hermes Public Relations",
    description: "Targeted media placement, press outreach, and strategic brand positioning.",
    icon: Share2
  },
  {
    id: 4,
    title: "Creative Campaigns",
    subtitle: "Valkyrie Experience Studio",
    description: "Immersive events, digital branding activations, and creative audience engagements.",
    icon: Sparkles
  },
  {
    id: 5,
    title: "Concept Design",
    subtitle: "Chronos Art Labs",
    description: "Worldbuilding, character design, visual direction, and digital prototyping.",
    icon: Compass
  },
  {
    id: 6,
    title: "Industry Awards",
    subtitle: "Foxpress Achievements",
    description: "Multi-award winning creative solutions recognized by international industry leaders.",
    icon: Award
  },
  {
    id: 7,
    title: "Client PR Strategy",
    subtitle: "Strategic Branding",
    description: "Full-scale brand audits, press distribution networks, and reputation design.",
    icon: MessageSquare
  }
]

export default function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Refs to manage dragging, hover, and auto-resume timers
  const isDraggingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const scrollPosRef = useRef(0)
  const startXRef = useRef(0)
  const scrollLeftStartRef = useRef(0)
  const lastInteractionTimeRef = useRef(0)
  
  // State for dragging cursor classes
  const [isDraggingState, setIsDraggingState] = useState(false)

  // Triple items to support wide screen bounds and seamless loops
  const tripledItems = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS]

  // Setup loop reset & starting scroll position
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const initializeScrollPosition = () => {
      const W = container.scrollWidth / 3
      if (W > 0) {
        container.scrollLeft = W
        scrollPosRef.current = W
      }
    }

    // Initialize when DOM/assets are ready
    initializeScrollPosition()
    const timer1 = setTimeout(initializeScrollPosition, 100)
    const timer2 = setTimeout(initializeScrollPosition, 500)
    window.addEventListener('load', initializeScrollPosition)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      window.removeEventListener('load', initializeScrollPosition)
    }
  }, [])

  // Auto-scroll loop utilizing requestAnimationFrame with auto-resume logic
  useEffect(() => {
    let animationId: number

    const tick = () => {
      const container = containerRef.current
      if (container) {
        const now = Date.now()
        // Resume scrolling if not actively dragging, AND either:
        // 1. Not hovered.
        // 2. Or, 1.5 seconds have passed since the last hover interaction (mouse movement/scrolling).
        const isInactive = now - lastInteractionTimeRef.current > 1500
        const shouldScroll = !isDraggingRef.current && (!isHoveredRef.current || isInactive)

        if (shouldScroll) {
          scrollPosRef.current += 0.8
          
          const W = container.scrollWidth / 3
          if (W > 0) {
            // Loop boundaries check
            if (scrollPosRef.current >= W * 2) {
              scrollPosRef.current -= W
            }
            container.scrollLeft = scrollPosRef.current
          }
        }
      }
      animationId = requestAnimationFrame(tick)
    }

    animationId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationId)
  }, [])

  // Scroll event wraps scrollLeft so it never runs out of cards
  const handleScroll = () => {
    const container = containerRef.current
    if (!container) return

    // Update interaction timer so inertial scroll doesn't fight the loop
    lastInteractionTimeRef.current = Date.now()

    // Sync ref position if user scrolls manually/dragged/swiped
    if (isDraggingRef.current || isHoveredRef.current) {
      scrollPosRef.current = container.scrollLeft
    }

    const W = container.scrollWidth / 3
    if (W <= 0) return

    // Loop bounds wraps
    if (container.scrollLeft >= W * 2) {
      container.scrollLeft -= W
      scrollPosRef.current = container.scrollLeft
    } else if (container.scrollLeft < W) {
      container.scrollLeft += W
      scrollPosRef.current = container.scrollLeft
    }
  }

  // Mouse Drag Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (!container) return

    isDraggingRef.current = true
    setIsDraggingState(true)
    startXRef.current = e.pageX - container.offsetLeft
    scrollLeftStartRef.current = container.scrollLeft
    lastInteractionTimeRef.current = Date.now()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    lastInteractionTimeRef.current = Date.now()
    if (!isDraggingRef.current || !containerRef.current) return
    e.preventDefault()

    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startXRef.current) * 1.5 // Drag speed multiplier
    containerRef.current.scrollLeft = scrollLeftStartRef.current - walk
    scrollPosRef.current = containerRef.current.scrollLeft
  }

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false
    setIsDraggingState(false)
    lastInteractionTimeRef.current = Date.now()
  }

  // Mobile Touch Event Handlers
  const handleTouchStart = () => {
    isDraggingRef.current = true
    lastInteractionTimeRef.current = Date.now()
  }

  const handleTouchMove = () => {
    lastInteractionTimeRef.current = Date.now()
  }

  const handleTouchEnd = () => {
    isDraggingRef.current = false
    lastInteractionTimeRef.current = Date.now()
  }

  return (
    <div className="w-full py-16 bg-black/40 overflow-hidden relative select-none">
      {/* Subtle top/bottom boundaries */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent"></div>
      
      {/* Title */}
      <div className="text-center mb-10 px-6">
        <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-bold block mb-2">
          Core Capabilities
        </span>
        <h3 className="text-xl md:text-2xl font-display font-medium text-cream uppercase">
          Studio Divisions & Expertise
        </h3>
      </div>

      {/* Fade Gradients at the left and right edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Interactive Carousel Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          isHoveredRef.current = true
          lastInteractionTimeRef.current = Date.now()
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false
          handleMouseUpOrLeave()
        }}
        className={`flex w-full overflow-x-auto scrollbar-hide py-4 px-3 gap-6 cursor-grab ${
          isDraggingState ? 'cursor-grabbing' : ''
        }`}
        style={{ scrollBehavior: isDraggingState ? 'auto' : 'smooth' }}
      >
        {tripledItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={`${item.id}-${index}`}
              className="w-[280px] md:w-[320px] shrink-0 bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-gold/[0.02] backdrop-blur-md rounded-lg p-6 flex flex-col justify-between transition-all duration-500 ease-out group shadow-xl hover:shadow-[0_0_30px_rgba(201,162,39,0.05)]"
            >
              <div>
                {/* Top Bar with Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                    <Icon size={18} />
                  </div>
                  <span className="text-[8px] tracking-widest text-gold/70 font-semibold uppercase border border-gold/20 rounded-full px-2.5 py-0.5 group-hover:border-gold/50 transition-colors duration-500">
                    {item.subtitle.split(' ')[0]}
                  </span>
                </div>

                {/* Title & Sub */}
                <h4 className="text-cream text-base font-semibold group-hover:text-gold transition-colors duration-500 text-left">
                  {item.title}
                </h4>
                <p className="text-[10px] text-cream/40 mb-3 text-left">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-cream/60 text-xs leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent"></div>
    </div>
  )
}
