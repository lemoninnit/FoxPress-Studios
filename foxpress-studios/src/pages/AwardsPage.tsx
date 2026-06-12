import { Suspense, lazy } from 'react'
import SEO from '../components/ui/SEO'

const Awards = lazy(() => import('../components/sections/Awards'))

export default function AwardsPage() {
  return (
    <>
      <SEO 
        title="Awards & Recognitions | Foxpress Studios" 
        description="Browse the list of prestigious awards and honors received by Foxpress Studios for outstanding creative and video production excellence."
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
          <Awards />
        </Suspense>
      </div>
    </>
  )
}
