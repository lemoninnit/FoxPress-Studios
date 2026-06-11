import { lazy, Suspense, useState, useEffect } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import SEO from './components/ui/SEO'
import ContactModal from './components/sections/ContactModal'

const Stats        = lazy(() => import('./components/sections/Stats'))
const Services     = lazy(() => import('./components/sections/Services'))
const OurWork      = lazy(() => import('./components/sections/OurWork'))
const Awards       = lazy(() => import('./components/sections/Awards'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const AboutUs      = lazy(() => import('./components/sections/AboutUs'))
const News         = lazy(() => import('./components/sections/News'))
const Contact      = lazy(() => import('./components/sections/Contact'))
const Footer       = lazy(() => import('./components/layout/Footer'))

function SectionSkeleton() {
  return (
    <div className="w-full py-24 bg-black animate-pulse">
      <div className="max-w-7xl mx-auto px-6 space-y-4">
        <div className="h-4 bg-surface rounded w-24" />
        <div className="h-8 bg-surface rounded w-64" />
        <div className="h-4 bg-surface rounded w-96" />
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <Stats />
        <Services />
        <OurWork />
        <Testimonials />
        <AboutUs />
        <Awards />
        <News />
        <Contact />
      </Suspense>
    </>
  )
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // Handle hash scrolling on page load/navigate
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        // slight delay to wait for lazy layout rendering
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 180)
        return () => clearTimeout(timer)
      }
    }
  }, [pathname, hash])

  return (
    <HelmetProvider>
      <SEO />
      <LazyMotion features={domAnimation}>
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/awards" element={<Navigate to="/#awards" replace />} />
            <Route path="/news" element={<Navigate to="/#news" replace />} />
          </Routes>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </LazyMotion>
    </HelmetProvider>
  )
}

export default App
