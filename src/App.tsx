import { useState } from 'react'
import './App.css'

const navLinks = [['About', '#about'], ['Services', '#services'], ['Projects', '#projects'], ['Company Profile', '#profile'], ["What's New", '#news'], ['Contact', '#contact']]
const services = [
  { number: '01', title: 'Waterproofing', text: 'Complete protection systems for roofs, basements, decks, and critical building areas.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85' },
  { number: '02', title: 'Structural Repair', text: 'Engineered rehabilitation solutions that restore integrity, safety, and long-term performance.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85' },
  { number: '03', title: 'Industrial Flooring', text: 'Durable flooring systems built for demanding commercial and industrial environments.', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85' },
  { number: '04', title: 'Protective Coatings', text: 'High-performance coating applications for concrete, steel, and specialized surfaces.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85' },
  { number: '05', title: 'Roof Gardens', text: 'Integrated green roof systems designed for durability, drainage, and sustainable spaces.', image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=85' },
  { number: '06', title: 'Insulation Systems', text: 'Thermal and specialty insulation solutions that improve building efficiency and comfort.', image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=85' },
]

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="site-shell">
    <header className="navbar">
      <a className="brand" href="#top" aria-label="ROMTECH home"><span className="brand-mark">R</span><span><strong>ROMTECH</strong><small>Construction, Inc.</small></span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /><span /></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote</a>
      </nav>
    </header>

    <main>
      <section className="hero" id="top">
        <div className="hero-background" />
        <div className="hero-content content-width">
          <div className="eyebrow light"><span /> Specialty Construction · Since 2001</div>
          <h1>Building<br />tomorrow<br /><em>together.</em></h1>
          <p>Dependable waterproofing and specialty construction solutions, delivered with integrity and an uncompromising commitment to quality.</p>
          <div className="hero-actions"><a className="button gold" href="#projects">Explore Projects <ArrowIcon /></a><a className="button outline" href="#services">Our Services</a></div>
        </div>
        <div className="hero-stats content-width"><div><strong>25+</strong><span>Years of experience</span></div><div><strong>Specialized</strong><span>Construction solutions</span></div><div><strong>Nationwide</strong><span>Project capability</span></div></div>
        <a className="scroll-cue" href="#about"><span>Scroll</span><i /></a>
      </section>

      <section className="about section" id="about"><div className="content-width about-grid">
        <div className="about-image-wrap"><img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=88" alt="Construction specialists reviewing a project" /><div className="experience-card"><strong>25+</strong><span>Years building<br />with purpose</span></div></div>
        <div className="about-copy"><div className="eyebrow"><span /> Who we are</div><h2>Built on experience.<br /><em>Driven by trust.</em></h2><p className="lead">ROMTECH Construction, Inc. provides specialized construction systems engineered to protect, restore, and strengthen the spaces people rely on.</p><p>Since 2001, our work has been defined by technical knowledge, proven solutions, and close collaboration with clients across the Philippines.</p><a className="text-link" href="#profile">Discover our company <ArrowIcon /></a></div>
      </div></section>

      <section className="services section" id="services"><div className="content-width">
        <div className="section-heading split-heading"><div><div className="eyebrow light"><span /> What we do</div><h2>Specialized solutions.<br /><em>Lasting results.</em></h2></div><p>From protection to rehabilitation, we deliver integrated systems suited to each structure's needs.</p></div>
        <div className="service-grid">{services.map(service => <article className="service-card" key={service.title}><img src={service.image} alt="" /><div className="service-overlay" /><div className="service-number">{service.number}</div><div className="service-content"><h3>{service.title}</h3><p>{service.text}</p><span className="circle-arrow"><ArrowIcon /></span></div></article>)}</div>
        <div className="center-link"><a className="button outline" href="#contact">Discuss your requirements <ArrowIcon /></a></div>
      </div></section>

      <section className="projects section" id="projects"><div className="content-width">
        <div className="section-heading split-heading dark-text"><div><div className="eyebrow"><span /> Selected work</div><h2>Projects that<br /><em>stand the test of time.</em></h2></div><p>Our portfolio spans commercial, institutional, residential, and industrial developments. Verified ROMTECH project photography will be placed here.</p></div>
        <div className="project-feature"><div className="project-image"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90" alt="Contemporary commercial building" /><span>Featured project</span></div><div className="project-info"><span className="project-type">Commercial · Metro Manila</span><h3>Built for performance.<br />Finished with precision.</h3><p>This temporary showcase demonstrates the final project presentation. It will be replaced with the approved project name, scope, and authentic ROMTECH photographs.</p><a className="text-link" href="#contact">View project approach <ArrowIcon /></a></div></div>
      </div></section>

      <section className="profile-band" id="profile"><div className="content-width profile-grid"><div><div className="eyebrow light"><span /> Company profile</div><h2>A dependable partner from specification to completion.</h2></div><div><p>Explore our capabilities, systems, experience, and commitment to delivering quality specialty construction work.</p><a className="button gold" href="#contact">Request Company Profile <ArrowIcon /></a></div></div></section>

      <section className="news section" id="news"><div className="content-width"><div className="section-heading compact"><div className="eyebrow"><span /> What's new</div><h2>From the field.</h2></div><div className="news-grid"><article><span>Company update</span><h3>Building the next chapter of ROMTECH</h3><p>Our redesigned digital presence brings our capabilities and project experience into clearer focus.</p><a className="text-link" href="#contact">Read update <ArrowIcon /></a></article><article><span>Project stories</span><h3>Real project highlights are coming next</h3><p>Once client-approved photographs are ready, this space will feature completed work and technical stories.</p><a className="text-link" href="#projects">Explore work <ArrowIcon /></a></article></div></div></section>

      <section className="contact" id="contact"><div className="contact-bg" /><div className="content-width contact-content"><div className="eyebrow light"><span /> Start a conversation</div><h2>Have a project<br /><em>in mind?</em></h2><p>Tell us what you are building and the specialized solution you need. The quote workflow will be activated after ROMTECH confirms the receiving email.</p><a className="button gold" href="mailto:romtech@romtechconstruction.com.ph">Contact ROMTECH <ArrowIcon /></a></div></section>
    </main>

    <footer><div className="content-width footer-top"><a className="brand" href="#top"><span className="brand-mark">R</span><span><strong>ROMTECH</strong><small>Construction, Inc.</small></span></a><p>Specialized construction solutions<br />built on experience and trust.</p><div className="footer-links">{navLinks.slice(0,4).map(([label,href]) => <a key={label} href={href}>{label}</a>)}</div></div><div className="content-width footer-bottom"><span>© {new Date().getFullYear()} ROMTECH Construction, Inc.</span><span>Pasay City, Philippines</span></div></footer>
  </div>
}

export default App
