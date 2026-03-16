import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section className="py-20 px-6 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="max-w-sm mx-auto text-center"
      >
        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-blush-dark" />
          <span className="text-blush-dark text-xl select-none">✦</span>
          <div className="w-8 h-px bg-blush-dark" />
        </div>

        <h2 className="section-title mb-4">Nuestra historia</h2>
        <div className="section-divider" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-charcoal-light text-sm leading-8 mt-8 text-justify"
          style={{ fontFamily: 'Alice, serif' }}
        >
          Todo empezó entre clase y clase, donde además de aprender sobre alimentos y
          macronutrientes, descubrimos que teníamos una química especial.
          <br />
          Lo que empezó como una gran amistad en la uni, acabó siendo lo que somos ahora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-charcoal-light text-sm leading-8 mt-5 text-justify"
        >
          Desde entonces, hemos crecido juntos compartiendo momentos, viajes, retos profesionales y
          con ganas de seguir sumando experiencias. Ahora, queremos celebrar este día tan especial
          y, por supuesto, ¡queremos que forméis parte!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-charcoal text-base mt-8 font-medium"
        >
          ¡Os esperamos!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScCl5OazKwzGzNBumK6Ce15e5lVmuRNutddr4thMA-dWGhyrA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Confirmar asistencia
          </a>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="w-8 h-px bg-blush-dark" />
          <span className="text-blush-dark text-xl select-none">✦</span>
          <div className="w-8 h-px bg-blush-dark" />
        </div>
      </motion.div>
    </section>
  )
}
