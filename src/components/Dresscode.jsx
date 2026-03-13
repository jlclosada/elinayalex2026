import { motion } from 'framer-motion'

export default function Dresscode() {
  return (
    <section className="py-20 px-6 bg-cream-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="max-w-sm mx-auto text-center"
      >
        <div className="text-4xl mb-5 select-none">👔</div>
        <h2 className="section-title">Dresscode</h2>
        <div className="section-divider" />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-charcoal-light text-sm leading-8 mt-8 text-balance"
        >
          Formal. Queremos veros brillar. Traje para ellos y vestido largo o cocktail para ellas.
        </motion.p>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 relative overflow-hidden rounded-sm"
        >
          <img
            src="/dresscode.jpeg"
            alt="Dresscode"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center top' }}
          />
          {/* Soft vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cream-dark/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>
    </section>
  )
}
