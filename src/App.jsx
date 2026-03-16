import { useEffect } from 'react'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Story from './components/Story'
import Schedule from './components/Schedule'
import Location from './components/Location'
import Bus from './components/Bus'
import Gift from './components/Gift'
import Dresscode from './components/Dresscode'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavDots from './components/NavDots'

export default function App() {
  // Intersection Observer for section reveal animations
  useEffect(() => {
    const sections = document.querySelectorAll('section:not(.hero-section)')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      <NavDots />

      <div id="hero">
        <Hero />
      </div>

      <div id="countdown">
        <Countdown />
      </div>

      <div id="story">
        <Story />
      </div>

      <div id="schedule">
        <Schedule />
      </div>

      <div id="location">
        <Location />
      </div>

      <div id="bus">
        <Bus />
      </div>

      <div id="gift">
        <Gift />
      </div>

      <div id="dresscode">
        <Dresscode />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}
