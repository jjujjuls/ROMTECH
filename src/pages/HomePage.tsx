import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/SiteLayout";
import { projects, serviceCategories } from "../data/siteData";

export default function HomePage() {
  return (
    <>
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
            <Link className="button gold" to="/projects">
              Explore Projects <ArrowIcon />
            </Link>
            <Link className="button outline" to="/services">
              Our Services
            </Link>
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

      <section className="home-about section">
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
              Its experience covers houses, schools, malls, churches, plants,
              and mid- to high-rise buildings.
            </p>
            <Link className="text-link" to="/about">
              Read our story <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="services section">
        <div className="content-width">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow light">
                <span /> Core capabilities
              </div>
              <h2>
                Specialized solutions.
                <br />
                <em>Lasting results.</em>
              </h2>
            </div>
            <p>
              The homepage shows selected capabilities. Explore the full catalog
              on the dedicated services pages.
            </p>
          </div>
          <div className="home-card-grid">
            {serviceCategories.slice(0, 3).map((service) => (
              <Link
                className="route-card"
                to={`/services/${service.slug}`}
                key={service.slug}
              >
                <img src={service.image} alt="" />
                <div className="route-card-overlay" />
                <div className="route-card-copy">
                  <span>Service category</span>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <i>
                    <ArrowIcon />
                  </i>
                </div>
              </Link>
            ))}
          </div>
          <div className="center-link">
            <Link className="button outline" to="/services">
              View all products & services <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="projects section">
        <div className="content-width">
          <div className="section-heading split-heading dark-text">
            <div>
              <div className="eyebrow">
                <span /> Featured projects
              </div>
              <h2>
                Work across
                <br />
                <em>recognized landmarks.</em>
              </h2>
            </div>
            <p>
              Browse the full project directory for residential, commercial,
              institutional, and infrastructure work.
            </p>
          </div>
          <div className="home-project-grid">
            {projects.slice(0, 6).map((project) => (
              <Link
                className="project-tile"
                to={`/projects/${project.slug}`}
                key={project.slug}
              >
                <img src={project.image} alt={project.name} />
                <div>
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="center-link">
            <Link className="button green" to="/projects">
              View all projects <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-careers">
        <div className="content-width home-careers-grid">
          <div>
            <div className="eyebrow light">
              <span /> Careers
            </div>
            <h2>
              Build your future
              <br />
              with ROMTECH.
            </h2>
          </div>
          <div>
            <p>
              Open opportunities are available for Manila and Batangas project
              locations.
            </p>
            <Link className="button gold" to="/careers">
              See open positions <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact">
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
            Tell us what you are building and the specialized solution you need.
          </p>
          <Link className="button gold" to="/contact">
            Contact ROMTECH <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
