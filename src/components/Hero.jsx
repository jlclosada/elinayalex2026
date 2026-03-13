import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) el.classList.add('hero-section')
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden hero-section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)', backgroundPosition: 'center 70%' }}
      />
      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-[5vh] pb-6">
        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <h1 className="text-cream text-3xl sm:text-5xl tracking-[0.25em] uppercase mb-3 whitespace-nowrap"
              style={{ fontFamily: 'Alice, serif' }}>
            Elina & Alex
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-cream/60" />
            <span className="text-cream/80 text-xs tracking-[0.3em] uppercase">Nos casamos</span>
            <div className="w-12 h-px bg-cream/60" />
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="text-cream/90 text-lg tracking-[0.4em] uppercase mb-1"
        >
          11 · 07 · 2026
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="text-cream/60 text-xs tracking-[0.25em] uppercase"
        >
          Sant Andreu de Llavaneres · Barcelona
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-6 bg-gradient-to-b from-cream/50 to-transparent mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
