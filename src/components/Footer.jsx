import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart, Mail, ArrowUp } from 'lucide-react';
import { designer } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-secondary)',
      marginTop: '80px',
      padding: '80px 24px 60px'
    }}>
      <div className="container-max">
        {/* Big Statement Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '60px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
              background: '#f5dda1',
              color: '#111212',
              padding: '4px 14px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.25rem',
              fontWeight: 700,
              transform: 'rotate(-2deg)'
            }}>
              Let's connect!
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              lineHeight: 1.25,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              maxWidth: '600px'
            }}>
              I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.
            </h2>
          </div>

          {/* Contact Card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={designer.avatar}
                alt={designer.name}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(255, 255, 255, 0.15)'
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{designer.name}</h3>
                <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {designer.role} • {designer.location}
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Open to contract work, full-time roles, and interesting conversations about hard design problems.
            </p>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: '#ffffff',
                color: '#111212',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.92rem',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fabed1'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              <span>Say Hello</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Links & Socials Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.85rem'
        }}>
          {/* Social Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {designer.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <span>{s.name}</span>
                <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
              </a>
            ))}
          </div>

          {/* Copyright & Scroll Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-muted)' }}>
            <span className="font-mono" style={{ fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} {designer.name}. Built with React & Vite.
            </span>
            <button
              onClick={scrollToTop}
              title="Back to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
