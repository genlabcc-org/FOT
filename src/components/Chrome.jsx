import { useState, useEffect, useRef } from 'react'
import { NAV } from '../data.js'

export function Cursor() {
  const ref = useRef(null)
  const lensRef = useRef(null)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const move = (e) => {
      if (e.pointerType === 'touch') return
      setLive(true)
      if (ref.current) ref.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`

      const lens = lensRef.current
      const wordmark = document.querySelector('.word h1')
      if (!lens || !wordmark) return

      const bounds = wordmark.getBoundingClientRect()
      const padding = 64
      const nearWordmark =
        e.clientX >= bounds.left - padding &&
        e.clientX <= bounds.right + padding &&
        e.clientY >= bounds.top - padding &&
        e.clientY <= bounds.bottom + padding

      lens.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0) translate(-50%,-50%)`
      lens.classList.toggle('visible', nearWordmark)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <>
      <div ref={lensRef} className="cursor-invert" aria-hidden="true">
        <i className="corner top-left" />
        <i className="corner top-right" />
        <i className="corner bottom-left" />
        <i className="corner bottom-right" />
      </div>
      <div ref={ref} className={'you' + (live ? ' live' : '')} aria-hidden="true">
        <i></i>
        <b>YOU</b>
      </div>
    </>
  )
}

function Ruler() {
  const [width, setWidth] = useState(1200)
  const ref = useRef(null)

  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const move = (event) => {
      const ruler = ref.current
      if (!ruler) return
      const { left, top, bottom } = ruler.getBoundingClientRect()
      if (event.clientY < top - 24 || event.clientY > bottom + 24) {
        ruler.querySelectorAll('[data-ruler-x]').forEach((mark) => {
          mark.style.setProperty('--cursor-shift', '0px')
        })
        return
      }

      ruler.querySelectorAll('[data-ruler-x]').forEach((mark) => {
        const markX = Number(mark.dataset.rulerX)
        const distance = Math.abs(event.clientX - (left + markX))
        const influence = Math.max(0, 1 - distance / 180)
        const shift = (event.clientX - (left + markX)) * influence * 0.22
        mark.style.setProperty('--cursor-shift', `${shift.toFixed(2)}px`)
      })
    }
    const reset = () => {
      ref.current?.querySelectorAll('[data-ruler-x]').forEach((mark) => {
        mark.style.setProperty('--cursor-shift', '0px')
      })
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerleave', reset)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', reset)
    }
  }, [width])

  const marks = []
  for (let x = 25; x <= width; x += 25) marks.push(x)

  return (
    <div ref={ref} className="ruler" aria-hidden="true">
      {marks.map((x) => (
        <span
          key={x}
          className={`ruler-mark${x % 100 === 0 ? ' numbered' : ''}`}
          data-ruler-x={x}
          style={{ left: x }}
        >
          {x % 100 === 0 ? x : ''}
        </span>
      ))}
    </div>
  )
}

export function Header({ active }) {
  return (
    <header className="top">
      <nav className="nav" aria-label="Main">
        <ul>
          <li className="logo-li">
            <a className="logo" href="#top" aria-label="FOT home">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#101010" strokeWidth="3">
                <path d="M2 20a11 11 0 0 1 22 0M7 20a6 6 0 0 1 12 0" />
              </svg>
            </a>
          </li>
          {NAV.map((item) => (
            <li key={item.id}>
              <a href={'#' + item.id} className={active === item.id ? 'on' : ''}>
                <svg viewBox="0 0 16 16" fill="currentColor"><path d={item.icon} /></svg>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="right">
          <span className="dot-chip" aria-hidden="true">14</span>
          <span className="dot-chip" aria-hidden="true">NOV</span>
          <a className="nav-btn" href="#register">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 14S1 9.5 1 5a3.7 3.7 0 0 1 7-1.6A3.7 3.7 0 0 1 15 5c0 4.5-7 9-7 9z" />
            </svg>
            Join
          </a>
        </div>
      </nav>
      <Ruler />
    </header>
  )
}

export function Footer() {
  return (
    <footer className="band">
      <div className="wrap pad">
        <div className="in">
          <div>
            <h4>The event</h4>
            <p className="lead">FOT · Friends of Tech</p>
            <p style={{ marginTop: 10 }}>A relaxed community meetup for anyone who loves tech.</p>
          </div>
          <div>
            <h4>When &amp; where</h4>
            <ul>
              <li>Sat, 14 Nov 2026</li>
              <li>10:00 AM to 1:00 PM IST</li>
              <li style={{ marginTop: 4, lineHeight: 1.45 }}>
                <a
                  href="https://maps.google.com/?q=121/C,+Kottar-Parvathipuram+Rd,+Chetti+Kulam,+Simon+Nagar,+Nagercoil,+Tamil+Nadu+629001"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  title="Open location in Google Maps"
                >
                  121/C, Kottar-Parvathipuram Rd,<br />
                  Chetti Kulam, Simon Nagar,<br />
                  Nagercoil, Tamil Nadu 629001
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Jump to</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#sessions">Sessions</a></li>
              <li><a href="#register">Register</a></li>
              <li><a href="#highlights">Highlights</a></li>
            </ul>
          </div>
          <div className="big" aria-hidden="true" style={{ textAlign: 'center' }}>FOT</div>
        </div>
      </div>
    </footer>
  )
}
