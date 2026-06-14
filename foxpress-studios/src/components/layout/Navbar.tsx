import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { m } from 'framer-motion'
import { NAV_LINKS } from '../../constants'
import { useScrollY } from '../../hooks/useScrollY'
import logoImg from '../../assets/logo.png'
import { LiquidButton } from '../ui/liquid-glass-button'
import CardNav from './CardNav'

interface NavbarProps {
  onContactClick: () => void
}

const PATH_TO_LABEL: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/work': 'Our Works',
  '/about': 'About Us',
  '/awards': 'Awards',
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const scrollY = useScrollY();
  const isScrolled = scrollY > 80;
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();

  const navigateHome = useCallback(() => {
    setActiveLink("Home");

    if (window.location.pathname !== '/') {
      navigate('/');
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [navigate]);

  useEffect(() => {
    setActiveLink(PATH_TO_LABEL[location.pathname] ?? 'Home');
  }, [location.pathname]);

  const navLinksToRender = NAV_LINKS.filter(link => link.label !== "Contact Us");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    if (label === "Contact Us") {
      e.preventDefault();
      onContactClick();
      return;
    }

    if (label === "Home") {
      e.preventDefault();
      navigateHome();
      return;
    }

    setActiveLink(label);
  };

  const menuItems = useMemo(() => [
    {
      label: 'Navigation',
      bgColor: 'rgba(255, 255, 255, 0.03)',
      textColor: '#ffffff',
      links: [
        { label: 'Home', href: '/', onClick: () => navigateHome() },
        { label: 'Services', href: '/services', onClick: () => navigate('/services') },
        { label: 'Our Works', href: '/work', onClick: () => navigate('/work') }
      ]
    },
    {
      label: 'Studio Info',
      bgColor: 'rgba(255, 255, 255, 0.03)',
      textColor: '#ffffff',
      links: [
        { label: 'About Us', href: '/about', onClick: () => navigate('/about') },
        { label: 'Awards', href: '/awards', onClick: () => navigate('/awards') }
      ]
    }
  ], [navigateHome, navigate]);

  return (
    <>
      {/* Mobile Responsive Card Navigation */}
      <div className="block md:hidden">
        <CardNav
          logo={logoImg}
          logoAlt="Foxpress Logo"
          items={menuItems}
          onLogoClick={navigateHome}
          onCtaClick={onContactClick}
          baseColor="transparent"
          menuColor="#e5c043"
        />
      </div>

      {/* Desktop Navigation */}
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 hidden md:block ${isScrolled ? 'bg-transparent backdrop-blur-[2px] border-b border-white/5 shadow-none' : 'bg-transparent'}`}
      >
        <nav className="w-full mx-auto px-2.5 sm:px-6 md:px-10 lg:px-12 xl:px-16 flex items-center justify-between h-20 animate-fade-in">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" onClick={(e) => {
              e.preventDefault();
              navigateHome();
            }} className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 shrink-0">
              <img src={logoImg} alt="Foxpress Logo" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain" />
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-cream text-[10px] sm:text-sm lg:text-lg leading-none tracking-widest">FOXPRESS</span>
                <span className="font-display font-bold text-cream text-[7px] sm:text-[9px] lg:text-xs leading-none tracking-[0.3em] mt-0.5 sm:mt-1">STUDIOS</span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 lg:gap-5 xl:gap-8">
            {navLinksToRender.map((link) => (
              <m.div
                key={link.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.label)}
                  className={`text-[8px] sm:text-[10px] lg:text-xs tracking-wider lg:tracking-widest uppercase font-medium transition-colors ${activeLink === link.label ? 'text-gold' : 'text-cream/80 hover:text-gold'}`}
                >
                  {link.label}
                </Link>
              </m.div>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="flex-1 flex justify-end items-center gap-2 sm:gap-4 shrink-0">
            <LiquidButton
              onClick={onContactClick}
              className="border border-gold/45 text-gold text-[8px] sm:text-[10px] lg:text-xs tracking-wider lg:tracking-widest uppercase px-2.5 sm:px-4 lg:px-6 py-1.5 sm:py-2.5 lg:py-3 bg-gold/15 backdrop-blur-md shadow-[0_8px_32px_0_rgba(201,162,39,0.1),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-[1.03] hover:brightness-115 hover:shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all duration-500 ease-out !h-auto !py-1.5 sm:!py-2.5 lg:!py-3 !rounded-sm whitespace-nowrap"
            >
              CONTACT US
            </LiquidButton>
          </div>
        </nav>
      </m.header>
    </>
  )
}
