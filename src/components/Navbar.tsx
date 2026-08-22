import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../content';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll<HTMLElement>('section[id], header[id]');
      let current = 'inicio';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      setActiveHref(`#${current}`);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.nav
      className={`navbar-glc${scrolled ? ' scrolled' : ''}`}
      id="mainNav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a className="badge-logo" href="#inicio">
          <span>Guadalajara Lancer Club</span>
        </a>

        <button
          className="navbar-toggler-glc d-lg-none"
          type="button"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} color="#edeff2" /> : <Menu size={22} color="#edeff2" />}
        </button>

        {/* Menú Desktop */}
        <div className="nav-collapse d-none d-lg-block">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={`nav-link-glc${activeHref === item.href ? ' active' : ''}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn-rally btn-animated ms-2" href="#unete">
                Únete
              </a>
            </li>
          </ul>
        </div>

        {/* Menú Móvil Animado */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav-collapse show d-lg-none"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      className={`nav-link-glc${activeHref === item.href ? ' active' : ''}`}
                      href={item.href}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a className="btn btn-rally w-100 text-center" href="#unete" onClick={handleLinkClick}>
                    Únete
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}