import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { m } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import CardNav from './CardNav'

const Facebook = ({ size = 24 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Instagram = ({ size = 24 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Linkedin = ({ size = 24 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Youtube = ({ size = 24 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
import { NAV_LINKS } from '../../constants'
import { useScrollY } from '../../hooks/useScrollY'
import logoImg from '../../assets/logo.png'
import { LiquidButton } from '../ui/liquid-glass-button'

function TopBar() {
  return (
    <div className="bg-white/[0.005] backdrop-blur-[2px] border-b border-white/5 hidden lg:block shadow-[inset_0_-1px_0_rgba(255,255,255,0.02)]">
      <div className="container-width py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-cream text-[13px]">
            <Mail size={14} className="text-gold" />
            <span>studios@foxpressmedia.com</span>
          </div>
          <div className="flex items-center gap-2 text-cream text-[13px]">
            <MapPin size={14} className="text-gold" />
            <span>45 S Arroyo Pkwy, Pasadena, CA, 91105</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-cream text-[13px]">Follow Us</span>
          <div className="flex items-center gap-3">
            <a href="#" className="text-gold hover:text-white transition-colors"><Facebook size={15} /></a>
            <a href="#" className="text-gold hover:text-white transition-colors"><Instagram size={15} /></a>
            <a href="#" className="text-gold hover:text-white transition-colors"><Linkedin size={15} /></a>
            <a href="#" className="text-gold hover:text-white transition-colors"><Youtube size={15} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NavbarProps {
  onContactClick: () => void
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const scrollY = useScrollY();
  const isScrolled = scrollY > 80;
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();

  const cardNavItems = [
    {
      label: "Main",
      bgColor: "#0c0a05",
      textColor: "#ffffff",
      links: [
        { label: "Home", href: "/", onClick: () => navigateHome() },
        { label: "About Us", href: "/#about", targetId: "about" },
      ]
    },
    {
      label: "Services",
      bgColor: "#100d07",
      textColor: "#ffffff",
      links: [
        { label: "Services", href: "/#services", targetId: "services" },
        { label: "Our Work", href: "/#work", targetId: "work" },
      ]
    },
    {
      label: "Explore",
      bgColor: "#080808",
      textColor: "#ffffff",
      links: [
        { label: "Awards", href: "/#awards", targetId: "awards" },
        { label: "News", href: "/#news", targetId: "news" },
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
      } else if (hash === '#work') {
        setActiveLink("Our Work");
      } else if (hash === '#about') {
        setActiveLink("About Us");
      } else if (hash === '#awards') {
        setActiveLink("Awards");
      } else if (hash === '#news') {
        setActiveLink("News");
      } else {
        setActiveLink("Home");
      }
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
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 hidden lg:block ${isScrolled ? 'bg-transparent backdrop-blur-[2px] border-b border-white/5 shadow-none' : 'bg-transparent'}`}
      >
        {!isScrolled && <TopBar />}
        <nav className="container-width flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" onClick={(e) => {
              e.preventDefault();
              navigateHome();
            }} className="flex items-center gap-3">
              <img src={logoImg} alt="Foxpress Logo" className="w-8 h-8 object-contain" />
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-cream text-base md:text-lg leading-none tracking-widest">FOXPRESS</span>
                <span className="font-display font-bold text-cream text-[10px] md:text-xs leading-none tracking-[0.3em] mt-1">STUDIOS</span>
              </div>
            </Link>
          </div>
          
          {/* Center: Navigation Links */}
          <div className="flex items-center justify-center gap-8">
            {navLinksToRender.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.label)}
                className={`text-xs tracking-widest uppercase font-medium transition-colors ${activeLink === link.label ? 'text-gold' : 'text-cream/80 hover:text-gold'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden lg:block">
              <LiquidButton 
                onClick={onContactClick}
                className="border border-gold/45 text-gold text-xs tracking-widest uppercase px-6 py-3 bg-gold/15 backdrop-blur-md shadow-[0_8px_32px_0_rgba(201,162,39,0.1),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-[1.03] hover:brightness-115 hover:shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all duration-500 ease-out !h-auto !py-3 !rounded-sm"
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
        className="lg:hidden"
      />
    </>
  )
}
