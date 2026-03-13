import { motion } from 'framer-motion'

export default function Bus() {
  return (
    <section className="py-16 px-6 bg-cream-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="max-w-sm mx-auto text-center"
      >
        <div className="text-4xl mb-5 select-none">🚌</div>
        <h2 className="section-title">Bus</h2>
        <div className="section-divider" />

        <p className="text-charcoal-light text-sm leading-7 mt-8">
          Para indicar si necesitáis el servicio de autobús, contestadlo en el cuestionario de
          confirmación de asistencia.
        </p>

        <div className="mt-8 border border-dashed border-blush-dark rounded-sm p-6 text-left space-y-4">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-blush-dark mb-1">
              Horario
            </div>
            <p className="text-charcoal-light text-sm leading-6 italic">
              Os daremos más información más adelante
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-blush-dark mb-1">
              Dirección
            </div>
            <p className="text-charcoal-light text-sm leading-6 italic">
              Os daremos más información más adelante
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
