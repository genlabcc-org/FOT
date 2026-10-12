import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Sparkles, Clock } from 'lucide-react';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Chicago time (US Central)
      const options = {
        timeZone: 'America/Chicago',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      };
      try {
        setTime(new Intl.DateTimeFormat('en-US', options).format(now));
      } catch (e) {
        setTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/case-studies', label: 'Case study' },
    { path: '/services', label: 'Services' },
    { path: '/journal', label: 'Journal' },
    { path: '/playground', label: 'Playground' },
  ];

  return (
    <>
      {/* Top Header / Status Bar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'rgba(17, 18, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '12px 24px'
      }}>
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.85rem'
        }}>
          {/* Logo / Identity */}
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#a1dfc5',
              display: 'inline-block',
              boxShadow: '0 0 10px rgba(161, 223, 197, 0.6)'
            }} />
            <span style={{ fontWeight: 700, letterSpacing: '-0.02em', fontSize: '1.05rem' }}>
              nudge<span style={{ color: '#fabed1' }}>.</span>
            </span>
            <span style={{
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              display: 'none',
              marginLeft: '4px'
            }} className="desktop-indicator">
              portfolio
            </span>
          </NavLink>

          {/* Right Status Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="font-mono" style={{
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Clock size={13} style={{ color: 'var(--text-muted)' }} />
              <span>Chicago: {time || '12:00:00 PM'}</span>
            </div>

            <NavLink
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#111212',
                backgroundColor: '#fabed1',
                padding: '4px 12px',
                borderRadius: '9999px',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span>Available for work</span>
              <ArrowUpRight size={13} />
            </NavLink>
          </div>
        </div>
      </header>

      {/* Floating Bottom Navigation Dock (Desktop & Tablet) */}
      <nav className="nav-dock" aria-label="Main Navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end={item.path === '/'}
          >
            {item.label}
          </NavLink>
        ))}

        <NavLink to="/contact" className="nav-cta-btn">
          <span>Contact</span>
          <ArrowUpRight size={14} />
        </NavLink>
      </nav>

      {/* Mobile Menu Backdrop & Sheet */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px'
        }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: location.pathname === item.path ? '#fabed1' : 'var(--text-primary)'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            style={{
              marginTop: '16px',
              padding: '12px 28px',
              background: '#ffffff',
              color: '#111212',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact me
          </NavLink>
        </div>
      )}
    </>
  );
}
