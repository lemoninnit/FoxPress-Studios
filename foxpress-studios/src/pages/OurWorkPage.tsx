import { Suspense, lazy } from 'react'
import SEO from '../components/ui/SEO'

const OurWork = lazy(() => import('../components/sections/OurWork'))

export default function OurWorkPage() {
  return (
    <>
      <SEO 
        title="Our Work | Foxpress Studios" 
        description="Explore our featured creative campaigns, film productions, visual effects, and CGI & animation portfolio at Foxpress Studios."
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
          <OurWork />
        </Suspense>
      </div>
    </>
  )
}
