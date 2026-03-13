import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const diff = target - now

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        done: false,
      }
    }

    setTimeLeft(calculate())
    const id = setInterval(() => setTimeLeft(calculate()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <span
          className="text-4xl sm:text-5xl text-charcoal tabular-nums"
          style={{ fontFamily: 'Alice, serif' }}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal-light mt-1">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const time = useCountdown('2026-07-11T16:00:00')

  return (
    <section className="py-16 px-6 bg-cream-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto text-center"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
          Cuenta atrás
        </p>

        {time.done ? (
          <p className="text-2xl text-charcoal">¡Hoy es el gran día! 🎉</p>
        ) : (
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <TimeUnit value={time.days} label="días" />
            <span className="text-3xl text-blush-dark mb-4 select-none">·</span>
            <TimeUnit value={time.hours} label="horas" />
            <span className="text-3xl text-blush-dark mb-4 select-none">·</span>
            <TimeUnit value={time.minutes} label="min" />
            <span className="text-3xl text-blush-dark mb-4 select-none">·</span>
            <TimeUnit value={time.seconds} label="seg" />
          </div>
        )}

        <div className="section-divider mt-8" />
      </motion.div>
    </section>
  )
}
