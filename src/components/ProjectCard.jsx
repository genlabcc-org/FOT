import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link
      to={`/case-studies/${project.id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all var(--transition-normal)',
        position: 'relative'
      }}
      className="card-hover"
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('.project-img');
        if (img) img.style.transform = 'scale(1.04)';
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('.project-img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      {/* Header bar */}
      <div style={{
        padding: '20px 24px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="font-mono" style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            project {project.number}
          </span>
          <span style={{ color: 'var(--border-subtle)' }}>•</span>
          <span className="font-mono" style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)'
          }}>
            {project.date}
          </span>
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: project.accentColor || '#a1dfc5',
          transition: 'transform 0.2s ease'
        }}>
          <span>View Project</span>
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Image Preview Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: featured ? '360px' : '280px',
        overflow: 'hidden',
        background: '#161717'
      }}>
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          loading="lazy"
        />

        {/* Floating Category Pills over image */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <span style={{
            background: 'rgba(17, 18, 18, 0.85)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {project.tag}
          </span>
          <span style={{
            background: 'rgba(17, 18, 18, 0.85)',
            backdropFilter: 'blur(8px)',
            color: 'var(--text-secondary)',
            fontSize: '0.75rem',
            padding: '4px 10px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Body info */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)'
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.92rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5
        }}>
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
}
