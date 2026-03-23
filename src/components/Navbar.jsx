import { useState, useEffect, useCallback } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { useTheme } from '../context/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', sectionId: 'home' },
  { name: 'Podcast', sectionId: 'podcast-snapshots' },
  { name: 'About', sectionId: 'about' },
  { name: 'Books', sectionId: 'books' },
  { name: 'Media', sectionId: 'media-snapshots' },
  { name: 'Articles', sectionId: 'articles' },
  { name: 'Contact', sectionId: 'contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers = [];

    // Small delay to ensure DOM elements are rendered after navigation
    const timeout = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: '-40% 0px -55% 0px' }
        );
        observer.observe(el);
        observers.push(observer);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observers.forEach((o) => o.disconnect());
    };
  }, [location.pathname]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 64; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleNavClick = (e, sectionId) => {
    if (e) e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-black'
              }`}
            >
              Asif Ahmed
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.sectionId}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className={`text-sm font-medium transition-colors duration-300 relative ${
                    activeSection === link.sectionId
                      ? 'text-black'
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {link.name}
                  {/* Active dot indicator */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black transition-opacity duration-300 ${
                      activeSection === link.sectionId ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              ))}
              {/* Theme Toggle Desktop */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-black hover:bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-100/50'}`}
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Nav Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-black"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-2 text-black"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavigate={(id) => handleNavClick(null, id)}
      />
    </>
  );
};

export default Navbar;
