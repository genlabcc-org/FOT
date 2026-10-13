import { useState, useEffect, useRef } from 'react'

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

function RegisterForm({ form, onChange }) {
  const [done, setDone] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)

  const set = (key) => (e) => onChange(key, e.target.value)

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return nameRef.current.focus()
    if (form.email.indexOf('@') < 1) return emailRef.current.focus()
    setDone(true)
  }

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="name">
        Full name
        <input id="name" ref={nameRef} autoComplete="name" placeholder="Your name" value={form.name} onChange={set('name')} />
      </label>
      <label htmlFor="email">
        Email
        <input id="email" ref={emailRef} type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
      </label>
      <label htmlFor="college">
        College name
        <input id="college" autoComplete="organization" placeholder="Your college" value={form.college} onChange={set('college')} />
      </label>
      <label htmlFor="phone">
        Phone number
        <input id="phone" type="tel" autoComplete="tel" placeholder="Your phone number" value={form.phone} onChange={set('phone')} />
      </label>
      <button className="cta" type="submit" style={{ justifySelf: 'start', marginTop: 4 }}>
        <b>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M2 3l5 5-5 5M8 3l5 5-5 5" />
          </svg>
        </b>
        Register now
      </button>
      {done && (
        <p className="ok show" role="status">Thanks! This preview form does not store entries yet.</p>
      )}
      <p className="fine">Preview form. Connect it to your registration tool before sharing the page.</p>
    </form>
  )
}

export default function Talk() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    college: '',
    phone: ''
  })
  const smiling = Object.values(form).every((value) => value.trim().length > 0)
  const updateForm = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  return (
    <section className="talk pad" id="register" data-sec="register">
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="grid">
          <Blob smiling={smiling} />
          <div>
            <h2>Let's meet</h2>
            <p className="copy">
              Tell us a little about you so we can plan the day around what you want to learn. Come solo or bring a friend.
            </p>
            <RegisterForm form={form} onChange={updateForm} />
          </div>
        </div>
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
    </section>
  )
}
