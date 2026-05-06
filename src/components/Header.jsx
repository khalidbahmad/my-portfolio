// ============================================================
// Header Component — React Router navigation + theme toggle
// ============================================================

import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../utils/theme';

export default function Header() {
  const { isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', to: '/', hash: '#home' },
    { label: 'About', to: '/about', hash: '#about' },
    { label: 'Projects', to: '/projects', hash: '#projects' },
    { label: 'Skills', to: '/', hash: '#skills' },
    { label: 'Experience', to: '/', hash: '#experience' },
    { label: 'Contact', to: '/contact', hash: '#contact' },
  ];

  const handleNavClick = (item, e) => {
    if (isHome && item.hash) {
      e.preventDefault();
      const el = document.querySelector(item.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const headerStyle = {
    background: scrolled ? undefined : 'transparent',
    paddingTop: scrolled ? '0.75rem' : '1.25rem',
    paddingBottom: scrolled ? '0.75rem' : '1.25rem',
  };

  return (
    <header
      id="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300${scrolled ? ' header-scrolled' : ''}`}
      style={headerStyle}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold gradient-text">
          My<span>Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center" style={{ gap: '1.75rem' }}>
          {navItems.map((item) => {
            // For Home page with hash navigation
            if (isHome && item.hash) {
              return (
                <a
                  key={item.label}
                  href={item.hash}
                  className="nav-link"
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item.label}
                </a>
              );
            }
            // For other pages, use React Router NavLink
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            );
          })}
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggle}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden" style={{ gap: '0.5rem' }}>
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggle}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? '✖' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mobile-menu py-4 px-4">
          <div className="flex flex-col" style={{ gap: '0.75rem' }}>
            {navItems.map((item) => {
              if (isHome && item.hash) {
                return (
                  <a
                    key={item.label}
                    href={item.hash}
                    className="nav-mobile"
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => `nav-mobile${isActive ? ' active' : ''}`}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
