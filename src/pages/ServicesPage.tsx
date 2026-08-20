import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/SiteLayout";
import { serviceCategories } from "../data/siteData";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero-services">
        <div className="content-width">
          <div className="eyebrow light">
            <span /> Products & services
          </div>
          <h1>
            Systems selected
            <br />
            <em>for performance.</em>
          </h1>
          <p>
            Explore ROMTECH's product and service families through dedicated
            category pages.
          </p>
        </div>
      </section>
      <section className="directory-page section">
        <div className="content-width">
          <div className="directory-intro">
            <div>
              <span>Seven categories</span>
              <h2>Complete capabilities</h2>
            </div>
            <p>
              Each category has its own page for products, application notes,
              downloadable technical documents, and project inquiries.
            </p>
          </div>
          <div className="service-directory-grid">
            {serviceCategories.map((service, index) => (
              <Link
                className="service-directory-card"
                to={`/services/${service.slug}`}
                key={service.slug}
              >
                <div className="service-directory-image">
                  <img src={service.image} alt="" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <span className="service-directory-link">
                    Explore category <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
