import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'

export default function App() {
  const name = 'Vignesh M'
  const tagline = 'College Student'
  const email = 'vicvignesh0111@gmail.com'
  const phone = '+91 6379278253'
  const phoneTel = '+916379278253'

  const socials = [
    { href: 'https://github.com/Vicki0111', label: 'GitHub', icon: <FaGithub /> },
    { href: 'https://www.linkedin.com/in/vignesh-m-a65a75381/', label: 'LinkedIn', icon: <FaLinkedin /> },
  ]

  return (
    <div className="shell">
      <header className="header">
        <a className="brand" href="#top">{name}</a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="btn" href="/resume.pdf" download>Download Resume</a>
        </nav>
      </header>

      <main id="top" className="main">
        <section className="hero">
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
            <a className="btn" href="/resume.pdf" download>Resume</a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            I’m a developer passionate about building minimal, performant, and accessible web apps.
            This simple portfolio is built with React and Vite.
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
