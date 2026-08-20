import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/SiteLayout";
import { projects } from "../data/siteData";

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero page-hero-projects">
        <div className="content-width">
          <div className="eyebrow light">
            <span /> Project directory
          </div>
          <h1>
            Experience across
            <br />
            <em>the Philippines.</em>
          </h1>
          <p>
            A modern presentation of establishments retained in ROMTECH's
            archived project gallery.
          </p>
        </div>
      </section>
      <section className="directory-page section">
        <div className="content-width">
          <div className="directory-intro">
            <div>
              <span>{projects.length} establishments</span>
              <h2>Project portfolio</h2>
            </div>
            <p>
              Online establishment photographs are being used as visual
              references. Authentic ROMTECH site photographs should replace them
              before production launch.
            </p>
          </div>
          <div className="project-directory-grid">
            {projects.map((project, index) => (
              <Link
                className="directory-project-card"
                to={`/projects/${project.slug}`}
                key={project.slug}
              >
                <div className="directory-project-image">
                  <img src={project.image} alt={project.name} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="directory-project-copy">
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.location}</p>
                  <i>
                    <ArrowIcon />
                  </i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
