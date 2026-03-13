import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-charcoal text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-sm mx-auto"
      >
        <div className="w-14 h-14 rounded-full mx-auto mb-4 overflow-hidden">
          <img
            src="/logo.jpg"
            alt="EA"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(1) brightness(2.5) contrast(0.5)' }}
          />
        </div>
        <p className="text-cream/50 text-xs tracking-[0.3em] uppercase mb-1">Elina & Alex</p>
        <p className="text-cream/30 text-xs tracking-[0.2em]">11 · 07 · 2026</p>
        <div className="w-8 h-px bg-cream/20 mx-auto mt-6" />
        <p className="text-cream/20 text-[10px] mt-4 tracking-wider">
          Con amor ✦ Barcelona
        </p>
      </motion.div>
    </footer>
  )
}
