import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { articles } from '../data/portfolioData';

export default function JournalPage() {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Design', 'Workspace', 'Creativity'];

  const filteredArticles = selectedCat === 'All'
    ? articles
    : articles.filter(a => a.category === selectedCat);

  return (
    <div className="container-max" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-flex',
          background: 'var(--pastel-pink)',
          color: '#111212',
          fontFamily: 'var(--font-handwritten)',
          fontSize: '1.3rem',
          fontWeight: 700,
          padding: '4px 14px',
          borderRadius: '9999px',
          marginBottom: '16px',
          transform: 'rotate(-2deg)'
        }}>
          written thoughts
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '16px'
        }}>
          The Journal
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '620px',
          lineHeight: 1.6
        }}>
          Essays and field notes on product architecture, tactile craft, physical workspaces, and protecting creative focus.
        </p>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '28px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                background: selectedCat === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
                color: selectedCat === cat ? '#111212' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: selectedCat === cat ? '#ffffff' : 'var(--border-subtle)',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Articles */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '28px',
        marginBottom: '80px'
      }}>
        {filteredArticles.map((art) => (
          <Link
            key={art.id}
            to={`/journal/${art.id}`}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all var(--transition-normal)'
            }}
            className="card-hover"
          >
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img
                src={art.image}
                alt={art.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '0.78rem', color: art.accentColor || '#a1dfc5' }}>
                  {art.category}
                </span>
                <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {art.readTime}
                </span>
              </div>

              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                {art.title}
              </h2>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginTop: 'auto'
              }}>
                {art.excerpt}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#ededed',
                marginTop: '8px'
              }}>
                <span>Read essay</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
