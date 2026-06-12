import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { m } from 'framer-motion'
import CardNav from './CardNav'
import { NAV_LINKS } from '../../constants'
import { useScrollY } from '../../hooks/useScrollY'
import logoImg from '../../assets/logo.png'
import { LiquidButton } from '../ui/liquid-glass-button'

interface NavbarProps {
  onContactClick: () => void
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const scrollY = useScrollY();
  const isScrolled = scrollY > 80;
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();

  const handleMobileNavClick = (href: string, label: string) => {
    const hasHash = href.includes('#');
    if (hasHash) {
      const parts = href.split('#');
      const path = parts[0] || '/';
      const targetId = parts[1];

      if (location.pathname !== path) {
        navigate(href);
      } else {
        scrollToSection(targetId);
      }
    } else {
      navigate(href);
    }
    setActiveLink(label);
  };

  const cardNavItems = [
    {
      label: "Main",
      bgColor: "#0c0a05",
      textColor: "#ffffff",
      links: [
        { label: "Home", href: "/", onClick: () => navigateHome() },
        { label: "About Us", href: "/about", onClick: () => handleMobileNavClick('/about', 'About Us') },
      ]
    },
    {
      label: "Services",
      bgColor: "#100d07",
      textColor: "#ffffff",
      links: [
        { label: "Services", href: "/#services", onClick: () => handleMobileNavClick('/#services', 'Services') },
        { label: "Our Work", href: "/work", onClick: () => handleMobileNavClick('/work', 'Our Work') },
      ]
    },
    {
      label: "Explore",
      bgColor: "#080808",
      textColor: "#ffffff",
      links: [
        { label: "Awards", href: "/awards", onClick: () => handleMobileNavClick('/awards', 'Awards') },
        { label: "Contact Us", href: "#contact", onClick: () => onContactClick() }
      ]
    }
  ];

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return false;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', '#' + targetId);
    return true;
  };

  const navigateHome = () => {
    setActiveLink("Home");

    if (window.location.pathname !== '/') {
      navigate('/');
    } else if (window.location.hash) {
      window.history.pushState(null, '', '/');
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      const hash = location.hash;
      if (hash === '#services') {
        setActiveLink("Services");
      } else {
        setActiveLink("Home");
      }
    } else if (path === '/about') {
      setActiveLink("About Us");
    } else if (path === '/work') {
      setActiveLink("Our Work");
    } else if (path === '/awards') {
      setActiveLink("Awards");
    }
  }, [location.pathname, location.hash]);

  const navLinksToRender = NAV_LINKS.filter(link => link.label !== "Contact Us");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
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

    const hasHash = href.includes('#');
    if (hasHash) {
      e.preventDefault();
      const parts = href.split('#');
      const path = parts[0] || '/';
      const targetId = parts[1];

      if (location.pathname !== path) {
        navigate(href);
      } else {
        scrollToSection(targetId);
      }
      setActiveLink(label);
      return;
    }

    // regular subpages routes update the activeLink state
    setActiveLink(label);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 hidden md:block ${isScrolled ? 'bg-transparent backdrop-blur-[2px] border-b border-white/5 shadow-none' : 'bg-transparent'}`}
      >
        <nav className="container-width-wide flex items-center justify-between h-20 animate-fade-in">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" onClick={(e) => {
              e.preventDefault();
              navigateHome();
            }} className="flex items-center gap-2 lg:gap-3">
              <img src={logoImg} alt="Foxpress Logo" className="w-7 h-7 lg:w-8 lg:h-8 object-contain" />
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-cream text-sm lg:text-lg leading-none tracking-widest">FOXPRESS</span>
                <span className="font-display font-bold text-cream text-[9px] lg:text-xs leading-none tracking-[0.3em] mt-1">STUDIOS</span>
              </div>
            </Link>
          </div>
          
          {/* Center: Navigation Links */}
          <div className="flex items-center justify-center gap-3 lg:gap-5 xl:gap-8">
            {navLinksToRender.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.label)}
                className={`text-[10px] lg:text-xs tracking-wider lg:tracking-widest uppercase font-medium transition-colors ${activeLink === link.label ? 'text-gold' : 'text-cream/80 hover:text-gold'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block">
              <LiquidButton 
                onClick={onContactClick}
                className="border border-gold/45 text-gold text-[10px] lg:text-xs tracking-wider lg:tracking-widest uppercase px-4 lg:px-6 py-2.5 lg:py-3 bg-gold/15 backdrop-blur-md shadow-[0_8px_32px_0_rgba(201,162,39,0.1),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-[1.03] hover:brightness-115 hover:shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all duration-500 ease-out !h-auto !rounded-sm"
              >
                CONTACT US
              </LiquidButton>
            </div>
          </div>
        </nav>
      </m.header>

      {/* Mobile CardNav */}
      <CardNav
        logo={logoImg}
        logoAlt="Foxpress Logo"
        items={cardNavItems}
        baseColor="#080808"
        menuColor="#ffffff"
        buttonBgColor="#c9a227"
        buttonTextColor="#000000"
        onCtaClick={onContactClick}
        className="md:hidden"
      />
    </>
  )
}
