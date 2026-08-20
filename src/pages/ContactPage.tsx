import type { FormEvent } from "react";
import { ArrowIcon } from "../components/SiteLayout";
import { serviceCategories } from "../data/siteData";

const companyEmail = "romtech@romtechconstruction.com.ph";

export default function ContactPage() {
  const handleInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Project Inquiry — ${data.get("service")} — ${data.get("fullName")}`;
    const body = [
      "ROMTECH PROJECT INQUIRY",
      "",
      `Full Name: ${data.get("fullName")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      `Email: ${data.get("email")}`,
      `Contact Number: ${data.get("phone")}`,
      `Service Needed: ${data.get("service")}`,
      `Project Location: ${data.get("location")}`,
      "",
      "Project Details:",
      `${data.get("message")}`,
    ].join("\n");
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <section className="page-hero page-hero-contact">
        <div className="content-width">
          <div className="eyebrow light">
            <span /> Contact ROMTECH
          </div>
          <h1>
            Let’s discuss
            <br />
            <em>your project.</em>
          </h1>
          <p>
            Send a structured inquiry through Gmail or visit the Pasay City
            office.
          </p>
        </div>
      </section>
      <section className="contact-page section">
        <div className="content-width contact-page-grid">
          <aside>
            <div className="eyebrow">
              <span /> Office information
            </div>
            <h2>ROMTECH Construction, Inc.</h2>
            <dl>
              <div>
                <dt>Address</dt>
                <dd>378 Edang St., Malibay District, Pasay City</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
                </dd>
              </div>
              <div>
                <dt>Office hours</dt>
                <dd>
                  Monday–Friday
                  <br />
                  8:00 AM–5:00 PM
                </dd>
              </div>
            </dl>
          </aside>
          <form
            className="application-form contact-form"
            onSubmit={handleInquiry}
          >
            <div className="form-heading">
              <span>Project inquiry</span>
              <h3>Tell us what you need</h3>
              <p>
                Your responses will open as a prefilled Gmail message. The
                website does not store submitted information.
              </p>
            </div>
            <div className="form-grid">
              <label>
                Full name
                <input name="fullName" required autoComplete="name" />
              </label>
              <label>
                Company
                <input name="company" autoComplete="organization" />
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
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label>
                Service needed
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a category
                  </option>
                  {serviceCategories.map((service) => (
                    <option key={service.slug}>{service.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Project location
                <input name="location" required />
              </label>
              <label className="form-full">
                Project details
                <textarea name="message" rows={6} required />
              </label>
            </div>
            <button className="button gold submit-button" type="submit">
              Continue to Gmail <ArrowIcon />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
