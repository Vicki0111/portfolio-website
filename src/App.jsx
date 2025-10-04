import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaMoon, FaSun, FaGlobe } from 'react-icons/fa'
import './App.css'

export default function App() {
  const name = 'Vignesh M'
  const tagline = 'Student at SRMIST KTR'
  const email = 'vicvignesh0111@gmail.com'
  const phone = '+91 6379278253'
  const phoneTel = '+916379278253'
  // Ensure correct path in both local dev and GitHub Pages builds
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

  // Theme state: initialize from localStorage or system preference
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    try{
      const stored = localStorage.getItem('theme')
      if (stored === 'light' || stored === 'dark'){
        setTheme(stored)
        document.documentElement.setAttribute('data-theme', stored)
        return
      }
    }catch{}
    const prefersLight = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    const initial = prefersLight ? 'light' : 'dark'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try{ localStorage.setItem('theme', next) }catch{}
    document.documentElement.setAttribute('data-theme', next)
  }

  const socials = [
    { href: 'https://github.com/Vicki0111', label: 'GitHub', icon: <FaGithub /> },
    { href: 'https://www.linkedin.com/in/vignesh-m-a65a75381/', label: 'LinkedIn', icon: <FaLinkedin /> },
    { href: 'https://www.instagram.com/_.wicckee._', label: 'Instagram', icon: <FaInstagram /> },
    { href: 'https://averagecinema.blogspot.com/', label: 'Blog', icon: <FaGlobe /> },
  ]

  return (
    <div className="shell">
      <header className="header">
        <a className="brand" href="#top">{name}</a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href={resumeUrl} download target="_blank" rel="noreferrer">Resume</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
            <span className="sr-only">Toggle theme</span>
          </button>
        </nav>
      </header>

      <main id="top" className="main">
        <section className="hero">
          <div className="avatar">
<img src="/image.jpg" alt={`${name} portrait`} />
          </div>
          <h1>{name}</h1>
          <p className="tagline">{tagline}</p>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
          <div className="cta">
            <a className="btn primary" href="#contact">Get in touch</a>
            <a className="btn" href={resumeUrl} download target="_blank" rel="noreferrer">Download Resume</a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            Hey! I am college student who is passionate about computers and intend to dedicate myself in learning more and gaining knowledge.
            This simple portfolio website provides a self intoduction to me and is built with React.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Reach me via email or phone.</p>
          <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
          <p>Phone: <a href={`tel:${phoneTel}`}>{phone}</a></p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${email}`}>Email me</a>
            <a className="btn" href={`tel:${phoneTel}`}>Call me</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {name}. All rights reserved.</small>
      </footer>
    </div>
  )
}
