import { useState, useEffect, useRef } from 'react'
import fotGroupImg from '../assets/fot-group.png'

function Blob({ smiling }) {
  const eyes = useRef(null)

  useEffect(() => {
    const move = (e) => {
      const el = eyes.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const d = Math.max(1, Math.hypot(dx, dy))
      const k = Math.min(10, d / 20)
      el.style.transform = `translate(${(dx / d) * k}px,${(dy / d) * k}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div className={`blob${smiling ? ' smiling' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 300 300">
        <g stroke="#101010" strokeWidth="5" fill="#3BCE86">
          <ellipse cx="150" cy="150" rx="132" ry="66" transform="rotate(45 150 150)" />
          <ellipse cx="150" cy="150" rx="132" ry="66" transform="rotate(-45 150 150)" />
        </g>
        <g fill="#3BCE86">
          <ellipse cx="150" cy="150" rx="129" ry="63" transform="rotate(45 150 150)" />
          <ellipse cx="150" cy="150" rx="129" ry="63" transform="rotate(-45 150 150)" />
        </g>
        <g ref={eyes} className="eye" fill="#101010">
          <rect x="122" y="104" width="16" height="40" rx="8" />
          <rect x="160" y="104" width="16" height="40" rx="8" />
        </g>
        <path className="mouth mouth-neutral" d="M137 171 Q150 174 163 171" />
        <path className="mouth mouth-smile" d="M126 168 Q150 198 174 168" />
      </svg>
    </div>
  )
}

export default function Talk() {
  const [smiling, setSmiling] = useState(false)
  const [registered, setRegistered] = useState(false)

  const handleRegister = () => {
    setRegistered(true)
    setSmiling(true)
  }

  return (
    <section className="talk pad" id="register" data-sec="register">
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="talk-h" style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2>LET<span className="talk-apos">&apos;</span>S MEET</h2>
          <p className="copy" style={{ margin: '14px auto 0', maxWidth: '34em', textAlign: 'center' }}>
            Tell us a little about you so we can plan the day around what you want to learn. Come solo or bring a friend.
          </p>
        </div>
        <div className="grid">
          <div className="blob-col">
            <Blob smiling={smiling || registered} />
            <div className="comment">
              <small>Comment</small>
              <div className="who">
                <span className="av">FT</span>
                <div>
                  <b>FOT crew</b>
                  <p>Open to students, freshers, freelancers and pros. Bring a friend and a laptop.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="media-col">
            <div className="talk-group-container">
              <div
                className="group-pic-frame"
                onMouseEnter={() => setSmiling(true)}
                onMouseLeave={() => !registered && setSmiling(false)}
              >
                <img
                  src={fotGroupImg}
                  alt="FOT Community Crew"
                />
              </div>

              <div className="talk-btn-wrap">
                <button
                  className="cta"
                  type="button"
                  onClick={handleRegister}
                  onMouseEnter={() => setSmiling(true)}
                  onMouseLeave={() => !registered && setSmiling(false)}
                  style={{ justifySelf: 'start', marginTop: 0 }}
                >
                  <b>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M2 3l5 5-5 5M8 3l5 5-5 5" />
                    </svg>
                  </b>
                  Register now
                </button>
                {registered && (
                  <p className="ok show" role="status" style={{ margin: 0 }}>
                    🎉 You're registered! See you at the meetup.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

