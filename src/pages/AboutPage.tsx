import { ArrowIcon } from "../components/SiteLayout";
import { affiliations } from "../data/siteData";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-about">
        <div className="content-width">
          <div className="eyebrow light">
            <span /> About ROMTECH
          </div>
          <h1>
            A history of practical
            <br />
            <em>problem-solving.</em>
          </h1>
          <p>
            Technical knowledge, disciplined application, and long-term industry
            relationships since 2001.
          </p>
        </div>
      </section>
      <section className="history section">
        <div className="content-width">
          <div className="section-heading split-heading dark-text">
            <div>
              <div className="eyebrow">
                <span /> Company history
              </div>
              <h2>
                Progress through
                <br />
                <em>technical innovation.</em>
              </h2>
            </div>
            <p>
              ROMTECH pairs proven materials, skilled applicators, and project
              management to solve demanding waterproofing challenges.
            </p>
          </div>
          <div className="history-grid">
            <div className="history-copy">
              <p>
                Established in 2001, ROMTECH Construction, Inc. emerged as one
                of the Philippines' leading waterproofing specialists by
                providing innovative solutions to a diverse market.
              </p>
              <p>
                Carrying the <strong>Index / Flexcoat</strong> brand, the
                company offers sprayed polyurethane foam, membranes,
                cementitious systems, sealants, acrylic flexible coatings,
                grouting, epoxy injection, epoxy floor coatings, tank lining,
                crystallization, and carbon fiber solutions.
              </p>
              <p>
                ROMTECH advanced its methodology through equipment from{" "}
                <strong>Graco USA</strong>, continuous workforce training, and
                systems selected for Philippine conditions. The company built
                its reputation by accepting complex works that required
                practical, out-of-the-box approaches.
              </p>
              <p>
                Today, ROMTECH continues to look ahead—addressing environmental
                responsibility, changing climate conditions, and the
                requirements of future buildings.
              </p>
              <div className="office-hours">
                <span>Office schedule</span>
                <strong>Monday–Friday · 8:00 AM–5:00 PM</strong>
              </div>
            </div>
            <aside className="profile-card" id="profile">
              <span>Company document</span>
              <h3>ROMTECH Company Profile</h3>
              <p>
                View the complete printable profile, credentials, products, and
                experience.
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
                Add the approved PDF to the public folder as
                ROMTECH-Company-Profile.pdf.
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
    </>
  );
}
