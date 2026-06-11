import { useEffect, useRef } from 'react'

import { m } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBg from '../../assets/hero-bg.jpg'
import hermesAwards from '../../assets/icons/hermes-awards.png'
import { LiquidButton } from '../ui/liquid-glass-button'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <img 
        ref={bgRef}
        src={heroBg} 
        alt="Foxpress Studios — Epic dragon battle visual" 
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1080}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32" 
        style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
      ></div>

      {/* Content wrapper */}
      <div className="relative z-10 container-width flex flex-col justify-start min-h-screen pt-[22vh] md:pt-[28vh] pb-16 md:pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-eyebrow text-gold mb-6"
          >
            STORYTELLING. CREATIVITY. IMPACT.
          </m.p>

          {/* Headline */}
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display font-medium leading-[1.1] md:leading-[1.05] tracking-normal mb-6 drop-shadow-lg"
          >
            <span className="block text-cream text-hero mb-1">ELEVATING STORIES.</span>
            <span className="block text-gold text-hero">INSPIRING THE WORLD.</span>
          </m.h1>

          {/* Body text */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-cream/70 text-sm md:text-base md:text-lg max-w-sm md:max-w-xl leading-relaxed mb-10"
          >
            Foxpress Studios is a full-service media and marketing studio dedicated to transforming ideas into powerful visual stories that captivate, engage, and inspire.
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-16"
          >
            <LiquidButton 
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-4 border border-gold/45 text-gold font-semibold text-sm tracking-widest uppercase bg-gold/15 backdrop-blur-md shadow-[0_8px_32px_0_rgba(201,162,39,0.15),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-[1.03] hover:brightness-115 hover:shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all duration-500 ease-out w-full sm:w-auto justify-center !h-auto !py-4"
            >
              OUR SERVICES
            </LiquidButton>
            <LiquidButton 
              onClick={() => {
                const el = document.getElementById('work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-cream font-semibold text-sm tracking-widest uppercase bg-white/5 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:scale-[1.03] hover:brightness-115 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-500 ease-out w-full sm:w-auto justify-center !h-auto !py-4"
            >
              OUR WORK
            </LiquidButton>
          </m.div>
        </div>
      </div>

      {/* Award Badges */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-10 right-6 md:right-10 items-center gap-4 z-10"
      >
        <img src={hermesAwards} alt="Hermes Award" className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity" loading="eager" fetchPriority="low" decoding="async" />
        <div className="border border-gold/40 px-4 py-3 text-center opacity-90 hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
          <span className="text-white font-bold text-2xl leading-none">H</span>
          <div className="w-6 h-[1px] bg-red-600 my-1"></div>
          <span className="text-[0.6rem] text-white uppercase tracking-widest leading-tight block">20TH ANNUAL</span>
          <span className="text-[0.6rem] text-white uppercase tracking-widest leading-tight block">CREATIVE COMPETITION</span>
        </div>
      </m.div>
    </section>
  )
}