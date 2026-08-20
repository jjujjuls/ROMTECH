import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import "./App.css";

const COMPANY_EMAIL = "romtech@romtechconstruction.com.ph";
const navLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Careers", "#careers"],
  ["Company Profile", "#profile"],
  ["Contact", "#contact"],
];
const services = [
  {
    slug: "waterproofing",
    number: "01",
    title: "Waterproofing",
    text: "Complete protection systems for roofs, basements, decks, and critical building areas.",
    detail:
      "ROMTECH supplies and applies membrane, cementitious, sealant, crystallization, acrylic flexible coating, tank-lining, and other waterproofing systems suited to tropical conditions.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "structural-repair",
    number: "02",
    title: "Structural Repair",
    text: "Engineered rehabilitation solutions that restore integrity, safety, and long-term performance.",
    detail:
      "Our repair capabilities include grouting, epoxy injection, concrete restoration, and carbon-fiber strengthening for retrofit and new construction requirements.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "industrial-flooring",
    number: "03",
    title: "Industrial Flooring",
    text: "Durable flooring systems built for demanding commercial and industrial environments.",
    detail:
      "High-performance epoxy floor coatings and specialized flooring materials deliver clean, resilient surfaces for plants, commercial buildings, and institutional spaces.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "protective-coatings",
    number: "04",
    title: "Protective Coatings",
    text: "High-performance coating applications for concrete, steel, and specialized surfaces.",
    detail:
      "Protective coating systems help shield concrete and steel from moisture, wear, chemicals, and environmental exposure while improving service life.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "roof-gardens",
    number: "05",
    title: "Roof Gardens",
    text: "Integrated green roof systems designed for durability, drainage, and sustainable spaces.",
    detail:
      "Our roof-garden approach coordinates waterproofing, protection, drainage, and planting layers to create usable green spaces above occupied structures.",
    image:
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "insulation-systems",
    number: "06",
    title: "Insulation Systems",
    text: "Thermal and specialty insulation solutions that improve building efficiency and comfort.",
    detail:
      "ROMTECH provides insulation solutions designed around project performance, installation conditions, and the demands of Philippine buildings.",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=85",
  },
];
const positions = [
  "Labor",
  "Painter",
  "Waterproofing Applicator",
  "Security Guard",
  "Accounting Staff",
  "Safety Officer",
];
const affiliations = [
  ["ISO", "ISO Registered Firm"],
  ["CPMAP", "Construction Project Management Association of the Philippines"],
  ["PCA", "Philippines Contractors Association"],
  [
    "PSVARE",
    "Philippine Society of Ventilating, Air-Conditioning and Refrigerating Engineers",
  ],
  ["PCAB", "Philippine Contractors Accreditation Board"],
  ["ACCI", "Architectural Centre Club, Inc."],
];

function ArrowIcon({
  direction = "right",
}: {
  direction?: "right" | "up" | "down";
}) {
  if (direction === "up")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </svg>
    );
  if (direction === "down")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5v14m6-6-6 6-6-6" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState<
    (typeof services)[number] | null
  >(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToNextSection = () => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    const next = sections.find(
      (section) => section.offsetTop > window.scrollY + 120,
    );
    (next ?? sections[0])?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Job Application — ${data.get("position")} — ${data.get("fullName")}`;
    const body = [
      "ROMTECH JOB APPLICATION",
      "",
      `Full Name: ${data.get("fullName")}`,
      `Position: ${data.get("position")}`,
      `Preferred Project Location: ${data.get("location")}`,
      `Email: ${data.get("email")}`,
      `Contact Number: ${data.get("phone")}`,
      "",
      "Applicant Message:",
      `${data.get("message") || "None provided."}`,
      "",
      "Required attachments to add before sending:",
      "• NBI Clearance",
      "• Biodata / Résumé",
    ].join("\n");
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(COMPANY_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="site-shell">
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">
          <a className="brand" href="#top" aria-label="ROMTECH home">
            <span className="brand-mark">R</span>
            <span>
              <strong>ROMTECH</strong>
              <small>Construction, Inc.</small>
            </span>
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-background" />
          <div className="hero-content content-width">
            <div className="eyebrow light">
              <span /> Specialty Construction · Since 2001
            </div>
            <h1>
              Building
              <br />
              tomorrow
              <br />
              <em>together.</em>
            </h1>
            <p>
              Dependable waterproofing and specialty construction solutions,
              delivered with integrity and an uncompromising commitment to
              quality.
            </p>
            <div className="hero-actions">
              <a className="button gold" href="#projects">
                Explore Projects <ArrowIcon />
              </a>
              <a className="button outline" href="#services">
                Our Services
              </a>
            </div>
          </div>
          <div className="hero-stats content-width">
            <div>
              <strong>25+</strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>Specialized</strong>
              <span>Construction solutions</span>
            </div>
            <div>
              <strong>Nationwide</strong>
              <span>Project capability</span>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="content-width about-grid">
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=88"
                alt="Construction specialists reviewing a project"
              />
              <div className="experience-card">
                <strong>2001</strong>
                <span>
                  Established in
                  <br />
                  Pasay City
                </span>
              </div>
            </div>
            <div className="about-copy">
              <div className="eyebrow">
                <span /> About ROMTECH
              </div>
              <h2>
                Built on experience.
                <br />
                <em>Driven by trust.</em>
              </h2>
              <p className="lead">
                ROMTECH Construction, Inc. emerged as one of the Philippines'
                dependable waterproofing specialists by providing innovative
                solutions to a diverse market.
              </p>
              <p>
                Its experience covers houses, schools, malls, churches,
                manufacturing plants, and mid- to high-rise buildings—whether
                retrofit, existing, or new construction.
              </p>
              <div className="office-hours">
                <span>Office schedule</span>
                <strong>Monday–Friday · 8:00 AM–5:00 PM</strong>
              </div>
              <a className="text-link" href="#history">
                Read our history <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="history section" id="history">
          <div className="content-width">
            <div className="section-heading split-heading dark-text">
              <div>
                <div className="eyebrow">
                  <span /> Our history
                </div>
                <h2>
                  Progress through
                  <br />
                  <em>technical innovation.</em>
                </h2>
              </div>
              <p>
                ROMTECH pairs proven materials, skilled applicators, and
                disciplined project management to solve demanding waterproofing
                challenges.
              </p>
            </div>
            <div className="history-grid">
              <div className="history-copy">
                <p>
                  Carrying the <strong>Index / Flexcoat</strong> brand, ROMTECH
                  offers sprayed polyurethane foam, membranes, cementitious
                  systems, sealants, acrylic flexible coatings, grouting, epoxy
                  injection, epoxy floor coatings, tank lining, crystallization,
                  and carbon fiber solutions.
                </p>
                <p>
                  The company advanced its methodology through technologically
                  capable equipment from <strong>Graco USA</strong>, continuous
                  workforce training, and solutions tailored to Philippine
                  conditions. It built its reputation by taking on complex works
                  that required practical, out-of-the-box approaches.
                </p>
                <p>
                  Today, ROMTECH continues to look ahead—addressing
                  environmental responsibility, changing climate conditions, and
                  the exacting requirements of future buildings.
                </p>
              </div>
              <aside className="profile-card" id="profile">
                <span>Company document</span>
                <h3>ROMTECH Company Profile</h3>
                <p>
                  View the complete printable profile, credentials, products,
                  and project experience.
                </p>
                <a
                  className="button gold"
                  href="/ROMTECH-Company-Profile.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF <ArrowIcon />
                </a>
                <small>
                  Place the approved PDF in the public folder using the filename
                  shown above.
                </small>
              </aside>
            </div>
            <div className="affiliations">
              <div className="affiliation-intro">
                <div className="eyebrow">
                  <span /> Affiliations & accreditation
                </div>
                <h3>Recognized by industry organizations.</h3>
              </div>
              {affiliations.map(([abbr, name]) => (
                <article className="affiliation-card" key={abbr}>
                  <strong>{abbr}</strong>
                  <span>{name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="content-width">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow light">
                  <span /> What we do
                </div>
                <h2>
                  Specialized solutions.
                  <br />
                  <em>Lasting results.</em>
                </h2>
              </div>
              <p>
                Select any service to view its application and continue directly
                to a project inquiry.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <button
                  type="button"
                  className="service-card"
                  key={service.slug}
                  onClick={() => setActiveService(service)}
                  aria-label={`Learn about ${service.title}`}
                >
                  <img src={service.image} alt="" />
                  <div className="service-overlay" />
                  <div className="service-number">{service.number}</div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className="circle-arrow">
                      <ArrowIcon />
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="center-link">
              <a className="button outline" href="#contact">
                Discuss your requirements <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="content-width">
            <div className="section-heading split-heading dark-text">
              <div>
                <div className="eyebrow">
                  <span /> Selected work
                </div>
                <h2>
                  Projects that
                  <br />
                  <em>stand the test of time.</em>
                </h2>
              </div>
              <p>
                Our portfolio spans commercial, institutional, residential, and
                industrial developments. Verified ROMTECH project photography
                will be placed here.
              </p>
            </div>
            <div className="project-feature">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
                  alt="Contemporary commercial building"
                />
                <span>Featured project</span>
              </div>
              <div className="project-info">
                <span className="project-type">Commercial · Metro Manila</span>
                <h3>
                  Built for performance.
                  <br />
                  Finished with precision.
                </h3>
                <p>
                  This showcase is ready for an approved project name, scope,
                  and authentic ROMTECH photographs.
                </p>
                <a className="text-link" href="#contact">
                  Start a similar project <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="careers section" id="careers">
          <div className="content-width">
            <div className="section-heading split-heading dark-text">
              <div>
                <div className="eyebrow">
                  <span /> Join our team
                </div>
                <h2>
                  Build your career
                  <br />
                  <em>with ROMTECH.</em>
                </h2>
              </div>
              <p>
                Openings are available for Manila and Batangas projects. Walk-in
                applicants are also welcome at our Pasay City office.
              </p>
            </div>
            <div className="career-layout">
              <div className="positions-panel">
                <span className="panel-label">Open positions</span>
                <div className="position-list">
                  {positions.map((position, index) => (
                    <div key={position}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{position}</strong>
                    </div>
                  ))}
                </div>
                <div className="walk-in">
                  <span>Walk-in applications</span>
                  <strong>378 Edang St., Malibay District, Pasay City</strong>
                  <p>Monday–Friday · 8:00 AM–5:00 PM</p>
                </div>
              </div>
              <form className="application-form" onSubmit={handleApplication}>
                <div className="form-heading">
                  <span>Application form</span>
                  <h3>Apply through Gmail</h3>
                  <p>
                    Complete the form, then attach your NBI Clearance and
                    Biodata/Résumé in Gmail before sending.
                  </p>
                </div>
                <div className="form-grid">
                  <label>
                    Full name
                    <input
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </label>
                  <label>
                    Contact number
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                    />
                  </label>
                  <label>
                    Position
                    <select name="position" required defaultValue="">
                      <option value="" disabled>
                        Select a position
                      </option>
                      {positions.map((position) => (
                        <option key={position}>{position}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Preferred location
                    <select name="location" required defaultValue="">
                      <option value="" disabled>
                        Select a location
                      </option>
                      <option>Manila</option>
                      <option>Batangas</option>
                    </select>
                  </label>
                  <label className="form-full">
                    Short message
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us briefly about your relevant experience."
                    />
                  </label>
                </div>
                <div className="document-note">
                  <strong>Prepare these attachments:</strong>
                  <span>NBI Clearance</span>
                  <span>Biodata / Résumé</span>
                </div>
                <button className="button gold submit-button" type="submit">
                  Continue to Gmail <ArrowIcon />
                </button>
                <small>
                  No applicant information is stored on this website.
                </small>
              </form>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-bg" />
          <div className="content-width contact-content">
            <div className="eyebrow light">
              <span /> Start a conversation
            </div>
            <h2>
              Have a project
              <br />
              <em>in mind?</em>
            </h2>
            <p>
              Tell us what you are building and the specialized solution you
              need. Contact ROMTECH directly for project inquiries.
            </p>
            <a
              className="button gold"
              href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent("ROMTECH Project Inquiry")}`}
            >
              Contact ROMTECH <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <div className="scroll-controls" aria-label="Page navigation">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowIcon direction="up" />
        </button>
        <button
          type="button"
          onClick={scrollToNextSection}
          aria-label="Next section"
        >
          <ArrowIcon direction="down" />
        </button>
      </div>
      {activeService && (
        <div
          className="service-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-title"
          onClick={() => setActiveService(null)}
        >
          <div
            className="service-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveService(null)}
              aria-label="Close service details"
            >
              ×
            </button>
            <span>{activeService.number} · Service overview</span>
            <h2 id="service-title">{activeService.title}</h2>
            <p>{activeService.detail}</p>
            <a
              className="button gold"
              href="#contact"
              onClick={() => setActiveService(null)}
            >
              Inquire about this service <ArrowIcon />
            </a>
          </div>
        </div>
      )}
      <footer>
        <div className="content-width footer-top">
          <a className="brand" href="#top">
            <span className="brand-mark">R</span>
            <span>
              <strong>ROMTECH</strong>
              <small>Construction, Inc.</small>
            </span>
          </a>
          <p>
            Specialized construction solutions
            <br />
            built on experience and trust.
          </p>
          <div className="footer-links">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="content-width footer-bottom">
          <span>© {new Date().getFullYear()} ROMTECH Construction, Inc.</span>
          <span>378 Edang St., Malibay District, Pasay City</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
