import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function CaseStudyDetailPage() {
  const { id } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    return <Navigate to="/case-studies" replace />;
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="container-max" style={{ paddingTop: '30px' }}>
      {/* Back Button */}
      <Link
        to="/case-studies"
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
        <span>Back to all case studies</span>
      </Link>

      {/* Header Info */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{
            background: project.accentColor || '#a1dfc5',
            color: '#111212',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 700
          }}>
            project {project.number}
          </span>
          <span className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {project.date}
          </span>
          <span className="pill-tag">{project.tag}</span>
          <span className="pill-tag">{project.category}</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '16px',
          color: 'var(--text-primary)'
        }}>
          {project.title}
        </h1>

        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          lineHeight: 1.5
        }}>
          {project.subtitle}
        </p>
      </div>

      {/* Meta Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '48px'
      }}>
        <div>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ROLE</span>
          <p style={{ fontWeight: 600, marginTop: '4px' }}>{project.role}</p>
        </div>
        <div>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>TIMELINE</span>
          <p style={{ fontWeight: 600, marginTop: '4px' }}>{project.timeline}</p>
        </div>
        <div>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>TEAM</span>
          <p style={{ fontWeight: 600, marginTop: '4px' }}>{project.team}</p>
        </div>
        <div>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PLATFORM</span>
          <p style={{ fontWeight: 600, marginTop: '4px' }}>{project.platform}</p>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div style={{
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        marginBottom: '60px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* The Real Problem */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        alignItems: 'start',
        marginBottom: '60px',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(28px, 5vw, 48px)'
      }}>
        <div>
          <span style={{
            background: '#fabed1',
            color: '#111212',
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.25rem',
            fontWeight: 700,
            padding: '4px 14px',
            borderRadius: '9999px',
            display: 'inline-block',
            marginBottom: '14px',
            transform: 'rotate(-2deg)'
          }}>
            the challenge
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            The Real Problem
          </h2>
        </div>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          {project.problem}
        </p>
      </div>

      {/* Key Metrics / Impact */}
      {project.metrics && (
        <div style={{ marginBottom: '60px' }}>
          <h3 className="font-mono" style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '20px'
          }}>
            Measured Impact & Results
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <span style={{
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: project.accentColor || '#ffffff',
                  lineHeight: 1
                }}>
                  {m.value}
                </span>
                <span style={{ fontWeight: 700, fontSize: '1.05rem', marginTop: '8px' }}>
                  {m.label}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {m.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* The Solution */}
      <div style={{
        marginBottom: '60px',
        padding: 'clamp(28px, 5vw, 48px)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)'
      }}>
        <div style={{
          display: 'inline-flex',
          background: '#a1dfc5',
          color: '#111212',
          fontFamily: 'var(--font-handwritten)',
          fontSize: '1.25rem',
          fontWeight: 700,
          padding: '4px 14px',
          borderRadius: '9999px',
          marginBottom: '16px',
          transform: 'rotate(1deg)'
        }}>
          the design response
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '20px' }}>
          Solution & Execution
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '800px', marginBottom: '32px' }}>
          {project.solution}
        </p>

        {project.features && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '0.95rem'
                }}
              >
                <CheckCircle2 size={18} style={{ color: project.accentColor || '#a1dfc5', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-primary)', lineHeight: 1.4 }}>{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Secondary Project Image */}
      {project.secondaryImage && (
        <div style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          marginBottom: '80px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
        }}>
          <img
            src={project.secondaryImage}
            alt={`${project.title} detail`}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      )}

      {/* Next Project Footer Link */}
      <div style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '60px',
        marginBottom: '60px'
      }}>
        <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Next Case Study
        </span>
        <Link
          to={`/case-studies/${nextProject.id}`}
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
            <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              {nextProject.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '4px' }}>
              {nextProject.subtitle}
            </p>
          </div>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#ffffff',
            color: '#111212',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <ArrowUpRight size={24} />
          </div>
        </Link>
      </div>
    </article>
  );
}
