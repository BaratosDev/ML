import './App.css'
import fallbackPortrait from './assets/portrait-fallback.svg'
import Galaxy from './Galaxy'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'WordPress',
  'WooCommerce',
  'Elementor',
  'Automation',
  'Information Technology',
  'Site Development',
]

const softSkills = [
  'Teamwork',
  'Communication',
  'Problem-solving',
  'Passion for learning',
]

const experience = [
  {
    role: 'Web Developer',
    company: 'Think Group',
    location: 'Rabat, Morocco',
    dates: 'Jul 2025 – Present',
    employment: 'Full-time',
    summary:
      'Web developer at Think Group (digital agency), building modern websites and web solutions for clients, collaborating with designers and the marketing team to deliver fast, responsive, and maintainable projects.',
  },
]

function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="brand">ML</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn small" href="#contact">
          Let&apos;s talk
        </a>
      </header>

      <main className="shell">
        <section className="hero" id="home">
          <div className="hero-bg" aria-hidden="true">
            <Galaxy
              density={1.05}
              glowIntensity={0.5}
              saturation={0.0}
              hueShift={205}
              twinkleIntensity={0.55}
              rotationSpeed={0.2}
              starSpeed={0.6}
              speed={1.05}
              mouseInteraction
              mouseRepulsion
              repulsionStrength={4.8}
              mouseEase={0.16}
              mouseBoost={2.0}
            />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <p className="eyebrow">FULL-STACK DEVELOPER</p>
              <h1>
                Mohamed
                <span>Laksiri</span>
              </h1>
              <p className="lead">
                I’m a passionate full-stack developer who designs and builds modern,
                high-performance web experiences from scratch. I turn ideas into clean,
                scalable products with a strong focus on UI, performance, and maintainable
                architecture.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#contact">
                  Contact me
                </a>
                <a className="btn outline" href="#skills">
                  Explore skills
                </a>
              </div>
            </div>
            <div className="hero-portrait">
              <img
                src="/mohamed.png"
                alt="Mohamed Laksiri portrait"
                onError={(event) => {
                  const target = event.currentTarget
                  target.onerror = null
                  target.src = fallbackPortrait
                }}
              />
            </div>
          </div>
        </section>

        <section className="section section-dark" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools, platforms, and technologies</h2>
            <p>
              A mix of front-end craft, back-end fundamentals, and automation tools to
              ship reliable web projects.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Work history</h2>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <article className="experience-card" key={item.company}>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <p className="muted">
                  {item.location} • {item.dates}
                </p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>How I work</h2>
            <p>Professional traits that guide how I collaborate and deliver projects.</p>
          </div>
          <div className="soft-skills">
            {softSkills.map((skill) => (
              <div className="soft-skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something meaningful</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <span>Phone</span>
              <a href="tel:0654197709">0654197709</a>
            </div>
            <div className="contact-card">
              <span>Location</span>
              <p>Agadir, Souss-Massa, Morocco</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Mohamed Laksiri. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
