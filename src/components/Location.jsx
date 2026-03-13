import { motion } from 'framer-motion'

const places = [
  {
    label: 'Ceremonia',
    name: 'Iglesia Sant Andreu de Llavaneres',
    address: 'Carrer Munt, 2, 08392 Sant Andreu de Llavaneres, Barcelona',
    icon: '⛪',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Carrer+Munt+2+08392+Sant+Andreu+de+Llavaneres+Barcelona',
    embedUrl:
      'https://maps.google.com/maps?q=Carrer+Munt,+2,+08392+Sant+Andreu+de+Llavaneres&output=embed&z=15',
  },
  {
    label: 'Celebración',
    name: 'Hotel Can Mora de Dalt',
    address: 'Raval de Font Mitjana, 3, 08394 Sant Vicenç de Montalt, Barcelona',
    icon: '🏡',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Raval+de+Font+Mitjana+3+08394+Sant+Vicenc+de+Montalt+Barcelona',
    embedUrl:
      'https://maps.google.com/maps?q=Raval+de+Font+Mitjana,+3,+08394+Sant+Vicenç+de+Montalt&output=embed&z=15',
  },
]

export default function Location() {
  return (
    <section className="py-20 px-6 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="max-w-sm mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="section-title">Cómo llegar</h2>
          <div className="section-divider" />
        </div>

        <div className="space-y-10">
          {places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{place.icon}</span>
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-blush-dark">
                    {place.label}
                  </div>
                  <div className="text-charcoal text-sm" style={{ fontFamily: 'Alice, serif' }}>
                    {place.name}
                  </div>
                </div>
              </div>

              {/* Address */}
              <p className="text-charcoal-light text-xs leading-6 mb-4 pl-9">
                {place.address}
              </p>

              {/* Map embed */}
              <div className="w-full rounded-sm overflow-hidden border border-cream-dark shadow-sm">
                <iframe
                  title={place.name}
                  src={place.embedUrl}
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Direction button */}
              <div className="mt-3 text-center">
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-charcoal-light border-b border-charcoal-light/40 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                >
                  Ver en Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
