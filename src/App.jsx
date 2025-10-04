import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './App.css'

export default function App() {
  const name = 'Your Name'
  const tagline = 'Software Developer'
  const email = 'you@example.com'

  const socials = [
    { href: 'https://github.com/your-username', label: 'GitHub', icon: <FaGithub /> },
    { href: 'https://www.linkedin.com/in/your-username', label: 'LinkedIn', icon: <FaLinkedin /> },
    { href: 'https://twitter.com/your-username', label: 'Twitter', icon: <FaTwitter /> },
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
          <p>
            The fastest way to reach me is by email. I’m open to collaboration and opportunities.
          </p>
          <a className="btn primary" href={`mailto:${email}`}>Email me</a>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {name}. All rights reserved.</small>
      </footer>
    </div>
  )
}
