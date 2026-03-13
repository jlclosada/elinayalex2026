import { motion } from 'framer-motion'

const events = [
  {
    time: '16:30 h',
    title: 'Ceremonia',
    place: 'Iglesia Sant Andreu de Llavaneres',
    icon: '⛪',
  },
  {
    time: '17:30 h',
    title: 'Cóctel',
    place: 'Hotel Can Mora de Dalt',
    icon: '🥂',
  },
  {
    time: '20:00 h',
    title: 'Cena',
    place: 'Hotel Can Mora de Dalt',
    icon: '🍽️',
  },
  {
    time: '22:30 h',
    title: 'Fiesta',
    place: '¡Hasta las 03:00 h!',
    icon: '🎶',
  },
]

export default function Schedule() {
  return (
    <section className="py-20 px-6 bg-cream-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="max-w-sm mx-auto text-center"
      >
        <h2 className="section-title">El día</h2>
        <div className="section-divider" />
        <p className="text-xs tracking-[0.2em] uppercase text-charcoal-light mt-2 mb-10">
          11 de Julio · 2026
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[38px] top-4 bottom-4 w-px bg-blush/60" />

          <div className="space-y-8">
            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex items-start gap-5 text-left"
              >
                {/* Icon circle */}
                <div className="relative z-10 w-[76px] shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-cream border border-blush-dark flex items-center justify-center text-lg shadow-sm">
                    {ev.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 pb-2">
                  <div className="text-xs tracking-[0.2em] text-blush-dark uppercase mb-0.5">
                    {ev.time}
                  </div>
                  <div className="text-charcoal text-base mb-0.5" style={{ fontFamily: 'Alice, serif' }}>
                    {ev.title}
                  </div>
                  <div className="text-charcoal-light text-xs leading-5">{ev.place}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
