import { SESSIONS } from '../data.js'
import Art from './Art.jsx'

function SessionPanel({ s, index }) {
  return (
    <article
      className={'proj ' + s.tone}
      style={{ '--i': index, '--stack-offset': `${index * 64}px` }}
    >
      <div className="tab">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1 15V9h4v6zm5 0V5h4v10zm5 0V1h4v14z" />
        </svg>
        Session {String(s.id).padStart(2, '0')}
      </div>
      <div className="body">
        <div className="info">
          <span className="when mono">{s.when}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <a className="more" href="#register">Save a seat ↗</a>
          <div className="chips">
            {s.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="frame" role="img" aria-label={s.title + ' illustration'}>
          <i></i><i></i><i></i><i></i>
          <span className="fl">{s.label}</span>
          <Art name={s.art} />
        </div>
      </div>
    </article>
  )
}

export default function Sessions() {
  return (
    <section className="pad" id="sessions" data-sec="sessions">
      <div className="wrap">
        <div className="works-h">
          <span className="mono">explore the day!</span>
          <h2>The Sessions</h2>
          <p>Four short, practical sessions. Each one leaves you with something to try the same day.</p>
        </div>
        <div className="stack">
          {SESSIONS.map((s, i) => (
            <SessionPanel key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
