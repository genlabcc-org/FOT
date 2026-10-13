
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

function Clock() {
  const [now, setNow] = useState(() => new Date().toLocaleTimeString('en-US'))

  useEffect(() => {
    const id = setInterval(
      () => setNow(new Date().toLocaleTimeString('en-US')),
      1000
    )
    return () => clearInterval(id)
  }, [])

  return <span className="clock mono">{now}</span>
}

function Handles() {
  return (
    <>
      <i></i><i></i><i></i><i></i>
    </>
  )
}

const ARROW = 'M2 12L24 2 14 24 12 14z'

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section className="hero pad" id="top" data-sec="top">
      <div className="wrap" style={{ position: 'relative' }}>

        {/* Clock */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Clock />
        </motion.div>

        {/* Floating tags */}
        <motion.span
          className="tag t-mint"
          aria-hidden="true"
          initial={{ opacity: 0, x: -60, rotate: -14 }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
            y: [0, -10, 0, -4, 0]
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          whileHover={{ rotate: -2, x: 8, y: -12, scale: 1.04 }}
        >
          Friends of Tech meetup
        </motion.span>

        <motion.span
          className="tag t-sand"
          aria-hidden="true"
          initial={{ opacity: 0, x: 60, rotate: 14 }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
            y: [0, 10, 0, 5, 0]
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
            y: {
              duration: 4.8,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          whileHover={{ rotate: 2, x: -8, y: -12, scale: 1.04 }}
        >
          Welcome Developers
        </motion.span>

        {/* HTML pin */}
        <motion.span
          className="pin pin1"
          aria-hidden="true"
          animate={{ y: [0, -18, 0], rotate: [-3, 3, -3] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <span>HTML</span>
        </motion.span>

        {/* CSS pin */}
        <motion.span
          className="pin pin2"
          aria-hidden="true"
          animate={{ y: [0, 18, 0], rotate: [3, -3, 3] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <span>CSS</span>
        </motion.span>

        {/* Lets Code */}
        <motion.span
          className="pillt p-yel"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.45, rotate: -8 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -12, 0, 6, 0]
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 14,
            delay: 0.5,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          whileHover={{ scale: 1.08, rotate: 2, y: -16 }}
        >
          Lets Code
        </motion.span>

        <motion.svg
          className="arrow a-yel"
          viewBox="0 0 26 26"
          aria-hidden="true"
          animate={{ x: [0, 10, 0], y: [0, -8, 0], rotate: [-4, 6, -4] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <path d={ARROW} />
        </motion.svg>

        {/* GenLAB */}
        <motion.span
          className="pillt p-pink"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.45, rotate: 8 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, 12, 0, -6, 0]
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 14,
            delay: 0.7,
            y: {
              duration: 4.3,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          whileHover={{ scale: 1.08, rotate: -2, y: -16 }}
        >
          GenLAB
        </motion.span>

        <motion.svg
          className="arrow a-pink"
          viewBox="0 0 26 26"
          aria-hidden="true"
          animate={{ x: [0, -10, 0], y: [0, 8, 0], rotate: [8, -6, 8] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <path d={ARROW} />
        </motion.svg>

        {/* we are */}
        <motion.span
          className="hand"
          initial={{ opacity: 0, y: 25, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotate: 3, y: -4 }}
        >
          we are
        </motion.span>

        {/* Animated FOT heading */}
        <motion.div
          className="sel word"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.08, rotate: 1.5 }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.6,
              rotate: -4
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.2,
                duration: 0.7
              }
            }
          }}
        >
          <Handles />

          <h1>
            {'FOT'.split('').map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                style={{ display: 'inline-block' }}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 90,
                    rotate: -18
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 280,
                      damping: 16,
                      mass: 0.8
                    }
                  }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="sub"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          Friends of Tech
        </motion.p>

        {/* Registration status */}
        <motion.div
          className="avail mono"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Registration open for the next meetup
        </motion.div>

        {/* Headline */}
        <motion.p
          className="headline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          We bring{' '}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="#3BCE86"
              strokeWidth="2.5"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
              fill="none"
              stroke="#3BCE86"
              strokeWidth="2.5"
            />
            <circle
              cx="12"
              cy="12"
              r="2.2"
              fill="#3BCE86"
            />
          </svg>{' '}
          builders together for one great{' '}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g fill="#D1055E">
              <circle cx="12" cy="5" r="4" />
              <circle cx="19" cy="12" r="4" />
              <circle cx="12" cy="19" r="4" />
              <circle cx="5" cy="12" r="4" />
              <circle
                cx="12"
                cy="12"
                r="3.5"
                fill="#fff"
              />
            </g>
          </svg>{' '}
          day of tech.
        </motion.p>

        {/* Register button */}
        <motion.a
          className="cta"
          href="#register"
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 1.0, type: 'spring', stiffness: 220, damping: 15 }}
          whileHover={{ scale: 1.08, y: -4, rotate: 1.5 }}
          whileTap={{ scale: 0.96 }}
        >
          <b>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            >
              <path d="M2 3l5 5-5 5M8 3l5 5-5 5" />
            </svg>
          </b>
          Register now
        </motion.a>

        {/* Mobile tags */}
        <div className="tags-m" aria-hidden="true">
          <span className="a" style={{ position: 'static' }}>
            Friends of Tech meetup
          </span>
          <span className="b" style={{ position: 'static' }}>
            Welcome Developers
          </span>
          <span className="c">Lets Code</span>
          <span className="d">GenLAB</span>
        </div>

      </div>
    </section>
  )
}
