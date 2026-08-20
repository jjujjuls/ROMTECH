import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowIcon } from "../components/SiteLayout";
import { projects } from "../data/siteData";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;
  const related = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="detail-hero">
        <img src={project.image} alt={project.name} />
        <div className="detail-hero-overlay" />
        <div className="content-width detail-hero-copy">
          <Link to="/projects">← All projects</Link>
          <span>
            {project.category} · {project.location}
          </span>
          <h1>{project.name}</h1>
        </div>
      </section>
      <section className="detail-content section">
        <div className="content-width detail-grid">
          <article>
            <div className="eyebrow">
              <span /> Project reference
            </div>
            <h2>Establishment overview</h2>
            <p className="detail-lead">{project.summary}</p>
            <p>
              This entry confirms the establishment appears in ROMTECH's
              archived project gallery. The exact project scope, application
              system, completion date, and authentic site photographs should be
              added after validation with the company.
            </p>
            {project.confirmationNote && (
              <div className="confirmation-note">
                <strong>Confirmation needed</strong>
                <p>{project.confirmationNote}</p>
              </div>
            )}
            <a
              className="text-link"
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Image reference source <ArrowIcon />
            </a>
          </article>
          <aside className="project-facts">
            <span>Project information</span>
            <dl>
              <div>
                <dt>Establishment</dt>
                <dd>{project.name}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>ROMTECH scope</dt>
                <dd>For client confirmation</dd>
              </div>
            </dl>
            <Link className="button gold" to="/contact">
              Discuss a similar project <ArrowIcon />
            </Link>
          </aside>
        </div>
      </section>
      <section className="related-section">
        <div className="content-width">
          <div className="section-heading compact">
            <div className="eyebrow">
              <span /> Continue exploring
            </div>
            <h2>Related projects</h2>
          </div>
          <div className="related-grid">
            {related.map((item) => (
              <Link to={`/projects/${item.slug}`} key={item.slug}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <span>{item.location}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
