import { Link, useNavigate } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, ChevronUp } from 'lucide-react'
import { NAV_LINKS, SERVICES } from '../../constants'
import { useScrollY } from '../../hooks/useScrollY'
import logoImg from '../../assets/logo.png'

const Facebook = ({ size = 24 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Youtube = ({ size = 24 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

export default function Footer() {
  const scrollY = useScrollY()
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateHome = () => {
    if (window.location.pathname !== '/') {
      navigate('/')
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    if (label === "Home") {
      e.preventDefault()
      navigateHome()
    }
  }

  const containerClasses = "container-width-wide"

  return (
    <>
      <m.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full bg-black/55 backdrop-blur-md border-t border-gold/20 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] relative z-10"
      >
        {/* Row 1 — Brand block */}
        <div className={`${containerClasses} pt-10 pb-4`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Column 1 */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <Link to="/" className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img src={logoImg} alt="Foxpress Logo" className="w-8 h-8 object-contain" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-cream text-lg leading-none tracking-widest">FOXPRESS</span>
                  <span className="font-display font-bold text-cream text-xs leading-none tracking-[0.3em] mt-1">STUDIOS</span>
                </div>
              </Link>
              <p className="text-muted text-sm leading-relaxed mt-2 max-w-xs mx-auto md:mx-0 text-center md:text-left">
                Elevating stories. Inspiring the world.
              </p>
              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/profile.php?id=61576760176785&mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-9 md:h-9 rounded-full border border-white/10 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@foxpressmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-9 md:h-9 rounded-full border border-white/10 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </m.div>

            {/* Column 2 */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <h4 className="text-cream text-xs tracking-[0.2em] uppercase font-semibold mb-3">QUICK LINKS</h4>
              <ul className="space-y-0.5 text-center w-full">
                {NAV_LINKS.filter(link => link.label !== "Contact Us").map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={(e) => handleLinkClick(e, link.label)}
                      className="text-muted text-sm hover:text-gold transition-colors duration-200 block py-0.5 text-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>

            {/* Column 3 */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <h4 className="text-cream text-xs tracking-[0.2em] uppercase font-semibold mb-3">OUR SERVICES</h4>
              <ul className="space-y-0.5">
                {SERVICES.map(service => (
                  <li key={service.title}>
                    <Link
                      to="/services"
                      className="text-muted text-sm hover:text-gold hover:drop-shadow-[0_0_12px_rgba(201,162,39,0.95)] hover:[text-shadow:0_0_8px_rgba(201,162,39,0.85)] transition-all duration-300 block py-0.5 text-center md:text-right cursor-pointer"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>
          </div>
        </div>

        {/* Row 2 — Contact info block */}
        <div className={`${containerClasses} pb-6`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start justify-center md:justify-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail size={14} className="text-gold" />
              </div>
              <span className="text-muted text-sm mt-1.5">studios@foxpressmedia.com</span>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 text-left"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={14} className="text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-muted text-sm">California: 45 S Arroyo Pkwy, Pasaden, CA, 91105.</span>
                <span className="text-muted text-sm mt-1">Founded in Slough, Berkshire, England</span>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start justify-center md:justify-end gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={14} className="text-gold" />
              </div>
              <span className="text-muted text-sm mt-1.5">(626) 460 0408</span>
            </m.div>
          </div>
        </div>

        {/* Row 3 — Gold divider */}
        <div className="border-t border-white/10 w-full"></div>

        {/* Row 4 — Copyright bar */}
        <div className={`${containerClasses} py-4`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center items-center">
            <div className="text-center md:text-left">
              <p className="text-muted text-xs">© 2026 Foxpress Studios. All rights reserved.</p>
            </div>
            <div className="text-center">
              <p className="text-gold/60 text-xs tracking-[0.2em] uppercase">Storytelling. Creativity. Impact.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted text-[10px] md:text-xs leading-relaxed">
                California: 45 S Arroyo Pkwy, Pasaden, CA, 91105<br />
                UK: The Future Works 2 Brunel Way Slough, SL1 1FQ
              </p>
            </div>
          </div>
        </div>
      </m.footer>

      {/* Back to top button */}
      <AnimatePresence>
        {scrollY > 400 && (
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold cursor-pointer hover:bg-gold-light transition-all duration-300 border-none outline-none"
              aria-label="Scroll to top"
            >
              <ChevronUp size={18} className="text-black" />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}