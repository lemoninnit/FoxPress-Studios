import { Suspense, lazy } from 'react'
import SEO from '../components/ui/SEO'

const Services = lazy(() => import('../components/sections/Services'))

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Our Services | Foxpress Studios" 
        description="Explore the creative media, digital animation, publicity, and marketing services offered by Foxpress Studios."
      />
      <div className="w-full pt-20 bg-black">
        <Suspense fallback={
          <div className="w-full py-24 bg-black animate-pulse">
            <div className="max-w-7xl mx-auto px-6 space-y-4">
              <div className="h-4 bg-surface rounded w-24" />
              <div className="h-8 bg-surface rounded w-64" />
            </div>
          </div>
        }>
          <Services />
        </Suspense>
      </div>
    </>
  )
}
