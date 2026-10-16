import { useState, useEffect, useRef } from 'react'
import eventGroup from '../assets/events/event-group.jpg'
import eventSpeaker from '../assets/events/event-speaker.jpg'
import eventAudience from '../assets/events/event-audience.jpg'
import eventWorkshop from '../assets/events/event-workshop.jpg'
import eventAwards from '../assets/events/event-awards.jpg'

const ALL_PHOTOS = [
  {
    id: 'photo-1',
    type: 'photo',
    src: eventGroup,
    title: 'The FOT Community Squad',
    subtitle: 'WebCraft Challenge Finale',
    caption: 'Builders, students, freelancers, and mentors gathered together for the grand group finale.',
    tag: 'Community',
    badgeColor: 'var(--cyan)',
  },
  {
    id: 'photo-2',
    type: 'photo',
    src: eventSpeaker,
    title: 'Interactive Keynote & Talk',
    subtitle: 'AI & Creative Space',
    caption: 'Exploring real-world AI tools, prompt crafting, and the future of tech careers at GenLab.',
    tag: 'Keynote',
    badgeColor: 'var(--yellow)',
  },
  {
    id: 'photo-3',
    type: 'photo',
    src: eventWorkshop,
    title: 'Collaborative Build Jam',
    subtitle: 'Hands-on Laptop Challenge',
    caption: 'Participants heads-down coding and brainstorming real solutions in teams.',
    tag: 'Hackathon',
    badgeColor: 'var(--mint)',
  },
  {
    id: 'photo-4',
    type: 'photo',
    src: eventAudience,
    title: 'Curious & Engaged Minds',
    subtitle: 'Audience Discussions',
    caption: 'A packed room of tech enthusiasts asking questions and sharing experiences.',
    tag: 'Learning',
    badgeColor: 'var(--sand)',
  },
  {
    id: 'photo-5',
    type: 'photo',
    src: eventAwards,
    title: 'Celebrating Achievements',
    subtitle: 'Awarding Merit Certificates',
    caption: 'Honoring top innovators, great questions, and outstanding project submissions.',
    tag: 'Awards',
    badgeColor: 'var(--pink)',
  },
]

const ALL_REELS = [
  {
    id: 'reel-1',
    type: 'reel',
    code: 'DXjke_sgMxu',
    embedUrl: 'https://www.instagram.com/reel/DXjke_sgMxu/embed',
    directUrl: 'https://www.instagram.com/reel/DXjke_sgMxu/?vrfl=MTMwM2JwbHllM3hlbg==',
    title: 'WebCraft Challenge Reel',
    subtitle: 'High Energy & Community Action',
    tag: 'Reel 01',
    accentColor: 'var(--pink)',
    caption: 'Catch the high-voltage atmosphere, team synergy, and excitement from challenge day.',
  },
  {
    id: 'reel-2',
    type: 'reel',
    code: 'DX0c8UATpHs',
    embedUrl: 'https://www.instagram.com/reel/DX0c8UATpHs/embed',
    directUrl: 'https://www.instagram.com/reel/DX0c8UATpHs/?psln=cjRwa3ducXhpY2Fi',
    title: 'Vibes & Awards Reel',
    subtitle: 'Celebrating Builders',
    tag: 'Reel 02',
    accentColor: 'var(--cyan)',
    caption: 'Moments of laughter, learning presentations, and certificate ceremonies on camera.',
  },
]

// Distribute items across 3 vertical auto-scrolling columns for dynamic layout
const COLUMN_1_ITEMS = [
  ALL_PHOTOS[0], // Group photo
  ALL_PHOTOS[1], // Keynote
  ALL_PHOTOS[2], // Workshop
]

const COLUMN_2_ITEMS = [
  ALL_REELS[0],  // Reel 1
  ALL_PHOTOS[4], // Awards photo
  ALL_REELS[1],  // Reel 2
]

const COLUMN_3_ITEMS = [
  ALL_PHOTOS[3], // Audience photo
  ALL_PHOTOS[2], // Workshop photo
  ALL_PHOTOS[0], // Group photo
]

export default function Highlights() {
  const [isPaused, setIsPaused] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const containerRef = useRef(null)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!selectedPhoto) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPhoto(null)
      if (e.key === 'ArrowRight') {
        setSelectedPhoto((prev) => {
          const idx = ALL_PHOTOS.findIndex((p) => p.id === prev.id)
          return ALL_PHOTOS[(idx + 1) % ALL_PHOTOS.length]
        })
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhoto((prev) => {
          const idx = ALL_PHOTOS.findIndex((p) => p.id === prev.id)
          return ALL_PHOTOS[(idx - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length]
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedPhoto])

  // Render individual item (Photo card or Reel card)
  const renderItem = (item, keyPrefix = '') => {
    if (item.type === 'reel') {
      return (
        <div key={`${keyPrefix}-${item.id}`} className="vscroll-card reel-card">
          <div className="reel-frame-wrap">
            <iframe
              src={item.embedUrl}
              className="reel-iframe"
              title={item.title}
              scrolling="no"
              allow="encrypted-media"
              loading="lazy"
            />
            <a
              href={item.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-click-overlay"
              aria-label={`Open and play ${item.title} on Instagram`}
              title="Open and play on Instagram"
            >
              <span className="reel-play-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
                <span>Play on Instagram</span>
              </span>
            </a>
          </div>

          <div className="reel-caption">
            <h4>{item.title}</h4>
            <p>{item.caption}</p>
            <a
              href={item.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-link-cta"
            >
              View on Instagram &rarr;
            </a>
          </div>
        </div>
      )
    }

    // Photo card
    return (
      <div
        key={`${keyPrefix}-${item.id}`}
        className="vscroll-card photo-card"
        onClick={() => setSelectedPhoto(item)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setSelectedPhoto(item)
          }
        }}
        aria-label={`View photo: ${item.title}`}
      >
        <i className="pc-corner tl" />
        <i className="pc-corner tr" />
        <i className="pc-corner bl" />
        <i className="pc-corner br" />

        <div className="photo-img-wrap">
          <img src={item.src} alt={item.title} loading="lazy" />
          <div className="photo-overlay">
            <span className="photo-expand-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
              Click to Expand
            </span>
          </div>
        </div>

        <div className="photo-meta">
          <div className="photo-badge" style={{ background: item.badgeColor }}>
            {item.tag}
          </div>
          <h3 className="photo-title">{item.title}</h3>
          <p className="photo-caption">{item.caption}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="highlights pad" id="highlights" data-sec="highlights">
      <div className="wrap">
        {/* Section Header */}
        <div className="highlights-header">
          <h2 className="highlights-note-wrap">
            <span className="highlights-sticky">✦ EVENT HIGHLIGHTS</span>
            <span className="highlights-hand">WebCraft Challenge memories</span>
          </h2>

          <p className="highlights-subtitle">
            Relive the best moments from our previous meetup: real projects built,
            insightful speaker sessions, community connections, and certificate celebrations.
          </p>
        </div>

        {/* Vertical Automatic Scrolling Feed */}
        <div
          className="vscroll-stage-wrap"
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top & Bottom Soft Fading Masks */}
          <div className="vscroll-mask-top" aria-hidden="true" />
          <div className="vscroll-mask-bottom" aria-hidden="true" />

          <div className="vscroll-grid">
            {/* Column 1: Upward scrolling */}
            <div className="vscroll-col col-1">
              <div
                className={`vscroll-track track-up ${isPaused ? 'paused' : ''}`}
              >
                {/* First set */}
                {COLUMN_1_ITEMS.map((item) => renderItem(item, 'c1-orig'))}
                {/* Duplicated set for seamless loop */}
                {COLUMN_1_ITEMS.map((item) => renderItem(item, 'c1-dup'))}
              </div>
            </div>

            {/* Column 2: Downward / Offset scrolling for rich counter-motion */}
            <div className="vscroll-col col-2">
              <div
                className={`vscroll-track track-down ${isPaused ? 'paused' : ''}`}
              >
                {/* First set */}
                {COLUMN_2_ITEMS.map((item) => renderItem(item, 'c2-orig'))}
                {/* Duplicated set for seamless loop */}
                {COLUMN_2_ITEMS.map((item) => renderItem(item, 'c2-dup'))}
              </div>
            </div>

            {/* Column 3: Upward scrolling with staggered timing */}
            <div className="vscroll-col col-3">
              <div
                className={`vscroll-track track-up-alt ${isPaused ? 'paused' : ''}`}
              >
                {/* First set */}
                {COLUMN_3_ITEMS.map((item) => renderItem(item, 'c3-orig'))}
                {/* Duplicated set for seamless loop */}
                {COLUMN_3_ITEMS.map((item) => renderItem(item, 'c3-dup'))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats Ribbon */}
        <div className="highlights-ribbon" aria-hidden="true">
          <div className="ribbon-item">
            <span className="r-icon">⚡</span>
            <b>Hands-on WebCraft Challenge</b>
          </div>
          <span className="r-sep">/</span>
          <div className="ribbon-item">
            <span className="r-icon">👥</span>
            <b>35+ Active Builders &amp; Creators</b>
          </div>
          <span className="r-sep">/</span>
          <div className="ribbon-item">
            <span className="r-icon">🏆</span>
            <b>Merit Certificates Awarded</b>
          </div>
          <span className="r-sep">/</span>
          <div className="ribbon-item">
            <span className="r-icon">🎬</span>
            <b>2 Official Instagram Reels</b>
          </div>
          <span className="r-sep">/</span>
          <div className="ribbon-item">
            <span className="r-icon">🚀</span>
            <b>Next Meetup: Nov 14th</b>
          </div>
        </div>
      </div>

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL
          ======================================================== */}
      {selectedPhoto && (
        <div
          className="hl-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="hl-lightbox-backdrop" />

          <div
            className="hl-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="lb-top">
              <div className="lb-tag" style={{ background: selectedPhoto.badgeColor }}>
                {selectedPhoto.tag}
              </div>
              <span className="lb-counter">
                {ALL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id) + 1} / {ALL_PHOTOS.length}
              </span>
              <button
                type="button"
                className="lb-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo modal"
              >
                ✕
              </button>
            </div>

            {/* Image View */}
            <div className="lb-media">
              <img src={selectedPhoto.src} alt={selectedPhoto.title} />

              {/* Prev / Next controls */}
              <button
                type="button"
                className="lb-nav lb-prev"
                onClick={(e) => {
                  e.stopPropagation()
                  const idx = ALL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id)
                  setSelectedPhoto(ALL_PHOTOS[(idx - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length])
                }}
                aria-label="Previous photo"
              >
                &#x2190;
              </button>
              <button
                type="button"
                className="lb-nav lb-next"
                onClick={(e) => {
                  e.stopPropagation()
                  const idx = ALL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id)
                  setSelectedPhoto(ALL_PHOTOS[(idx + 1) % ALL_PHOTOS.length])
                }}
                aria-label="Next photo"
              >
                &#x2192;
              </button>
            </div>

            {/* Caption */}
            <div className="lb-info">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
