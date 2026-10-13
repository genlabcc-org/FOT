import { useState, useEffect } from 'react'
import { Cursor, Header, Footer } from './components/Chrome.jsx'
import Hero from './components/Hero.jsx'
import About, { Wave } from './components/About.jsx'
import Sessions from './components/Sessions.jsx'
import Talk from './components/Talk.jsx'

export default function App() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.getAttribute('data-sec'))
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('[data-sec]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Header active={active} />
      <main>
        <Hero />
        <Wave />
        <About />
        <Sessions />
        <Talk />
      </main>
      <Footer />
    </>
  )
}