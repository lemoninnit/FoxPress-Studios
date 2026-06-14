import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import './CardNav.css'

export interface CardNavLink {
  label: string
  href: string
  ariaLabel?: string
  onClick?: () => void
  targetId?: string
}

export interface CardNavItem {
  label: string
  bgColor: string
  textColor: string
  links: CardNavLink[]
}

interface CardNavProps {
  logo: string
  logoAlt?: string
  items: CardNavItem[]
  className?: string
  ease?: string
  baseColor?: string
  menuColor?: string
  onCtaClick?: () => void
  onLogoClick?: () => void
}

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#080808',
  menuColor,
  onCtaClick,
  onLogoClick
}: CardNavProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const location = useLocation()

  useEffect(() => {
    setIsHamburgerOpen(false)
    setIsExpanded(false)
    if (navRef.current) {
      gsap.set(navRef.current, { height: 60 })
    }
  }, [location.pathname])

  const calculateHeight = () => {
    const navEl = navRef.current
    if (!navEl) return 260

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement
      if (contentEl) {
        const wasVisible = contentEl.style.visibility
        const wasPointerEvents = contentEl.style.pointerEvents
        const wasPosition = contentEl.style.position
        const wasHeight = contentEl.style.height

        contentEl.style.visibility = 'visible'
        contentEl.style.pointerEvents = 'auto'
        contentEl.style.position = 'static'
        contentEl.style.height = 'auto'

        // Force relayout
        contentEl.offsetHeight

        const topBar = 60
        const padding = 16
        const contentHeight = contentEl.scrollHeight

        contentEl.style.visibility = wasVisible
        contentEl.style.pointerEvents = wasPointerEvents
        contentEl.style.position = wasPosition
        contentEl.style.height = wasHeight

        return topBar + contentHeight + padding
      }
    }
    return 260
  }

  const createTimeline = () => {
    const navEl = navRef.current
    if (!navEl) return null

    gsap.set(navEl, { height: 60, overflow: 'hidden' })
    gsap.set(cardsRef.current, { y: 50, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    })

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1')

    return tl
  }

  useLayoutEffect(() => {
    const tl = createTimeline()
    tlRef.current = tl

    if (isExpanded && isHamburgerOpen) {
      const currentHeight = calculateHeight()
      gsap.set(navRef.current, { height: currentHeight })
      gsap.set(cardsRef.current, { y: 0, opacity: 1 })
      tl?.progress(1)
    }

    return () => {
      tl?.kill()
      tlRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items])

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return

      if (isExpanded && isHamburgerOpen) {
        const newHeight = calculateHeight()
        gsap.set(navRef.current, { height: newHeight })

        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          newTl.progress(1)
          tlRef.current = newTl
        }
      } else {
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          tlRef.current = newTl
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded])

  useEffect(() => {
    if (!isExpanded) return

    const handleScroll = () => {
      const tl = tlRef.current
      if (tl) {
        setIsHamburgerOpen(false)
        tl.eventCallback('onReverseComplete', () => setIsExpanded(false))
        tl.reverse()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isExpanded])

  const toggleMenu = () => {
    const tl = tlRef.current
    if (!tl) return
    if (!isExpanded) {
      setIsHamburgerOpen(true)
      setIsExpanded(true)
      tl.play(0)
    } else {
      setIsHamburgerOpen(false)
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false))
      tl.reverse()
    }
  }

  const handleLogoClick = () => {
    if (isExpanded) {
      toggleMenu()
    }
    if (onLogoClick) {
      onLogoClick()
    }
  }

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el
  }

  return (
    <div className={`card-nav-container ${className}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#fff' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div
            className="logo-container cursor-pointer"
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleLogoClick()
              }
            }}
          >
            <div className="flex items-center gap-2">
              <img src={logo} alt={logoAlt} className="w-6 h-6 object-contain" />
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-cream text-xs leading-none tracking-widest">FOXPRESS</span>
                <span className="font-display font-bold text-cream text-[8px] leading-none tracking-[0.3em] mt-0.5">STUDIOS</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onCtaClick}
            className="card-nav-cta-button"
          >
            CONTACT US
          </button>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => {
                  const handleClick = (e: React.MouseEvent) => {
                    if (lnk.onClick) {
                      e.preventDefault()
                      lnk.onClick()
                    } else if (lnk.targetId) {
                      e.preventDefault()
                      const element = document.getElementById(lnk.targetId)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        window.history.pushState(null, '', '#' + lnk.targetId)
                      }
                    }
                    toggleMenu()
                  }

                  const isExternal = lnk.href.startsWith('http');
                  return (
                    <a
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link"
                      href={lnk.href}
                      onClick={handleClick}
                      aria-label={lnk.ariaLabel}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      <ArrowUpRight className="nav-card-link-icon" size={13} aria-hidden="true" />
                      {lnk.label}
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default CardNav
