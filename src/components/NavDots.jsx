import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'countdown', label: 'Cuenta atrás' },
  { id: 'story', label: 'Nuestra historia' },
  { id: 'schedule', label: 'El día' },
  { id: 'location', label: 'Cómo llegar' },
  { id: 'bus', label: 'Bus' },
  { id: 'gift', label: 'Regalo' },
  { id: 'contact', label: 'Contacto' },
]

export default function NavDots() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={label}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            active === id
              ? 'bg-blush-dark scale-150'
              : 'bg-charcoal/25 hover:bg-charcoal/50'
          }`}
        />
      ))}
    </nav>
  )
}
