import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function CaseStudiesPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Healthcare', 'SaaS', 'Proptech', 'Strategy'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.tag === selectedFilter);

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
          transform: 'rotate(-1.5deg)'
        }}>
          selected work
        </div>
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '16px'
        }}>
          Case Studies & Projects
        </h1>
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '640px',
          lineHeight: 1.6
        }}>
          In-depth product breakdowns focusing on business impact, system architecture, and crafting human-centered workflows.
        </p>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '28px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                background: selectedFilter === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
                color: selectedFilter === cat ? '#111212' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: selectedFilter === cat ? '#ffffff' : 'var(--border-subtle)',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid-projects" style={{ marginBottom: '80px' }}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} featured={true} />
        ))}
      </div>
    </div>
  );
}
