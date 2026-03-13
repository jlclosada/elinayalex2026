import { motion } from 'framer-motion'

const contacts = [
  {
    name: 'Elina',
    phone: '626 386 930',
    phoneRaw: '+34626386930',
    email: 'elinavm1@gmail.com',
  },
  {
    name: 'Alex',
    phone: '617 129 909',
    phoneRaw: '+34617129909',
    email: 'alexveradn@gmail.com',
  },
]

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-cream-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="max-w-sm mx-auto text-center"
      >
        <div className="text-4xl mb-5 select-none">💌</div>
        <h2 className="section-title">Contacto</h2>
        <div className="section-divider" />

        <p className="text-charcoal-light text-sm leading-7 mt-8 mb-10">
          Para cualquier duda o pregunta, ¡no dudes en escribirnos!
        </p>

        <div className="space-y-6">
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-cream rounded-sm p-5 text-left"
            >
              <div className="text-charcoal text-base mb-3" style={{ fontFamily: 'Alice, serif' }}>
                {c.name}
              </div>
              <div className="space-y-2">
                <a
                  href={`tel:${c.phoneRaw}`}
                  className="flex items-center gap-2 text-charcoal-light text-sm hover:text-charcoal transition-colors duration-200"
                >
                  <span className="text-blush-dark text-base select-none">☎</span>
                  {c.phone}
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-2 text-charcoal-light text-sm hover:text-charcoal transition-colors duration-200 break-all"
                >
                  <span className="text-blush-dark text-base select-none">@</span>
                  {c.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
