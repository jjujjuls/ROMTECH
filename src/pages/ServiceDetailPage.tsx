import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowIcon } from "../components/SiteLayout";
import { serviceCategories } from "../data/siteData";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceCategories.find((item) => item.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  return (
    <>
      <section className="detail-hero service-detail-hero">
        <img src={service.image} alt="" />
        <div className="detail-hero-overlay" />
        <div className="content-width detail-hero-copy">
          <Link to="/services">← All products & services</Link>
          <span>Product & service category</span>
          <h1>{service.name}</h1>
        </div>
      </section>
      <section className="detail-content section">
        <div className="content-width">
          <div className="service-detail-intro">
            <div>
              <div className="eyebrow">
                <span /> Category overview
              </div>
              <h2>{service.summary}</h2>
            </div>
            <p>
              Product names and technical descriptions shown here are based on
              the recovered ROMTECH material. Final specifications and
              downloadable data sheets should be checked against the current
              supplier catalog before launch.
            </p>
          </div>
          <div className="product-list">
            {service.products.map((product, index) => (
              <article key={product.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <Link to="/contact">
                  Inquire <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
          <div className="technical-cta">
            <div>
              <span>Technical documents</span>
              <h3>Need a product data sheet or project recommendation?</h3>
            </div>
            <Link className="button gold" to="/contact">
              Request information <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
