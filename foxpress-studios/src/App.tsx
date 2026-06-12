import { lazy, Suspense, useState, useEffect } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import SEO from './components/ui/SEO'
import ContactModal from './components/sections/ContactModal'

// Section components for Home page
const Services = lazy(() => import('./components/sections/Services'))
const OurWork = lazy(() => import('./components/sections/OurWork'))
const AboutUs = lazy(() => import('./components/sections/AboutUs'))
const Awards = lazy(() => import('./components/sections/Awards'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/layout/Footer'))

// Dedicated page components
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
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
        <OurWork />
        <AboutUs />
        <Awards />
        <Testimonials />
        <Contact />
      </Suspense>
    </>
  )
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <HelmetProvider>
      <SEO />
      <LazyMotion features={domAnimation}>
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<OurWorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/awards" element={<AwardsPage />} />
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
