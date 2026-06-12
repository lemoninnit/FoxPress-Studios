import { Suspense, lazy } from 'react'
import SEO from '../components/ui/SEO'

const AboutUs = lazy(() => import('../components/sections/AboutUs'))

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us | Foxpress Studios" 
        description="Learn about our vision, mission, and philosophy at Foxpress Studios, where creative imagination meets digital craftsmanship."
      />
      <div className="w-full pt-20 bg-black min-h-screen">
        <Suspense fallback={
          <div className="w-full py-24 bg-black animate-pulse">
            <div className="max-w-7xl mx-auto px-6 space-y-4">
              <div className="h-4 bg-surface rounded w-24" />
              <div className="h-8 bg-surface rounded w-64" />
            </div>
          </div>
        }>
          <AboutUs />
        </Suspense>
      </div>
    </>
  )
}
