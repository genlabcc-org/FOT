import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/portfolioData';

export default function JournalDetailPage() {
  const { id } = useParams();
  const articleIndex = articles.findIndex((a) => a.id === id);

  if (articleIndex === -1) {
    return <Navigate to="/journal" replace />;
  }

  const article = articles[articleIndex];
  const nextArticle = articles[(articleIndex + 1) % articles.length];

  return (
    <article className="container-max" style={{ paddingTop: '30px' }}>
      {/* Back Link */}
      <Link
        to="/journal"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          fontWeight: 500,
          marginBottom: '32px',
          transition: 'color 0.15s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
      >
        <ArrowLeft size={16} />
        <span>Back to all essays</span>
      </Link>

      {/* Article Header */}
      <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <span style={{
            background: article.accentColor || '#a1dfc5',
            color: '#111212',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 700
          }}>
            {article.category}
          </span>
          <span className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={13} />
            {article.date}
          </span>
          <span className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={13} />
            {article.readTime}
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '20px'
        }}>
          {article.title}
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          fontStyle: 'italic'
        }}>
          {article.excerpt}
        </p>
      </div>

      {/* Hero Image */}
      <div style={{
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        marginBottom: '48px',
        maxWidth: '900px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '740px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginBottom: '80px'
      }}>
        {article.content.map((paragraph, idx) => (
          <p
            key={idx}
            style={{
              fontSize: '1.12rem',
              color: 'var(--text-primary)',
              lineHeight: 1.8,
              opacity: 0.95
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Next Article Card */}
      <div style={{
        maxWidth: '780px',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '40px',
        marginBottom: '60px'
      }}>
        <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Read Next
        </span>
        <Link
          to={`/journal/${nextArticle.id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '12px',
            textDecoration: 'none',
            color: 'inherit'
          }}
          className="card-hover"
        >
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              {nextArticle.title}
            </h3>
            <span className="font-mono" style={{ color: nextArticle.accentColor, fontSize: '0.85rem' }}>
              {nextArticle.category} • {nextArticle.readTime}
            </span>
          </div>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#ffffff',
            color: '#111212',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <ArrowUpRight size={20} />
          </div>
        </Link>
      </div>
    </article>
  );
}
