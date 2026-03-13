import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gift() {
  const [copied, setCopied] = useState(false)
  const iban = 'ES69 0182 9003 9102 0470 9226'

  const handleCopy = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, '')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="py-20 px-6 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="max-w-sm mx-auto text-center"
      >
        <div className="text-4xl mb-5 select-none">🎁</div>
        <h2 className="section-title">Regalo</h2>
        <div className="section-divider" />

        {/* Main message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-charcoal-light text-sm leading-8 mt-8 text-balance"
        >
          Para nosotros, el mejor regalo es que estés allí, compartiendo risas y momentos hasta el
          final de la fiesta. No necesitamos nada más para que este día sea perfecto.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-charcoal-light text-sm leading-8 mt-5 text-balance"
        >
          Sin embargo, como ya sabréis o si te acabas de enterar, ¡nos hemos comprado un piso!{' '}
          <span className="select-none">🥴</span> Así que, si de corazón queréis ayudarnos a que
          nuestra casa deje de tener eco, cualquier aportación será recibida con muchísima ilusión.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-charcoal text-sm leading-8 mt-5 italic text-balance"
        >
          "Aceptamos desde el clásico sobre en mano o un regalo personal, hasta una transferencia
          bancaria."
        </motion.p>

        {/* Bank details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 bg-cream-dark rounded-sm p-6 text-left space-y-4"
        >
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-blush-dark mb-1">
              IBAN
            </div>
            <button
              onClick={handleCopy}
              className="group flex items-center gap-2 w-full"
              title="Copiar IBAN"
            >
              <span className="text-charcoal text-sm font-medium tracking-wider">{iban}</span>
              <span className="text-charcoal-light text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                {copied ? '✓' : '⧉'}
              </span>
            </button>
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-sage mt-1 block"
                >
                  ¡Copiado!
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-blush-dark mb-1">
              Titulares
            </div>
            <p className="text-charcoal text-sm">Alejandro Vera Esteller</p>
            <p className="text-charcoal text-sm">Elina Vidal Moreso</p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-blush-dark mb-1">
              Concepto
            </div>
            <p className="text-charcoal-light text-sm leading-6">
              Vuestro nombre. Evitar poner "Regalo" o "Boda"... hacienda nos vigila{' '}
              <span className="select-none">👀</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
