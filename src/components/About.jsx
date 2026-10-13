import { SKILLS } from '../data.js'

export function Wave() {
  return (
    <svg className="wave" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 52C140 30 260 22 420 24S700 12 860 10 1100 22 1200 30" fill="none" stroke="#9A9A9A" strokeWidth="2" />
    </svg>
  )
}

export default function About() {
  return (
    <section className="about pad" id="about" data-sec="about">
      <div className="wrap">
        <span className="note">about us!</span>
        <div className="sel boxlabel">
          <i></i><i></i><i></i><i></i>
          <span>what's up</span>
        </div>
        <p className="lede">
          We're{' '}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="#E5B230" />
            <circle cx="8.5" cy="10" r="1.6" fill="#101010" />
            <circle cx="15.5" cy="10" r="1.6" fill="#101010" />
            <path d="M7 14.5q5 5 10 0" fill="none" stroke="#101010" strokeWidth="2" strokeLinecap="round" />
          </svg>{' '}
          a friendly community that loves <mark>technology</mark>, from first-time coders to seasoned pros, sharing what we{' '}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3l2.6 6.4L21 10l-5 4.4L17.5 21 12 17.5 6.5 21 8 14.4 3 10l6.4-.6z" fill="#D1055E" />
          </svg>{' '}
          know.
        </p>
        <div className="skills">
          {SKILLS.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
