import { lazy, Suspense, useState, useEffect } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import SEO from './components/ui/SEO'
import ContactModal from './components/sections/ContactModal'

const Services = lazy(() => import('./components/sections/Services'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/layout/Footer'))

const AboutPage = lazy(() => import('./pages/AboutPage'))
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'))
const AwardsPage = lazy(() => import('./pages/AwardsPage'))

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
        <Services />
        <Testimonials />
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
      let attempts = 0
      let timer: number

      const scrollToHash = () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }

        attempts += 1
        if (attempts < 12) {
          timer = window.setTimeout(scrollToHash, 100)
        }
      }

      timer = window.setTimeout(scrollToHash, 180)
      return () => window.clearTimeout(timer)
    }
  }, [pathname, hash])

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <HelmetProvider>
      <SEO />
      <LazyMotion features={domAnimation}>
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<OurWorkPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/news" element={<Navigate to="/" replace />} />
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
