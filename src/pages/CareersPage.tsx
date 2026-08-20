import type { FormEvent } from "react";
import { ArrowIcon } from "../components/SiteLayout";
import { positions } from "../data/siteData";

const companyEmail = "romtech@romtechconstruction.com.ph";

export default function CareersPage() {
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
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <section className="page-hero page-hero-careers">
        <div className="content-width">
          <div className="eyebrow light">
            <span /> Careers
          </div>
          <h1>
            Build your future
            <br />
            <em>with ROMTECH.</em>
          </h1>
          <p>Open opportunities for Manila and Batangas project locations.</p>
        </div>
      </section>
      <section className="careers section">
        <div className="content-width">
          <div className="section-heading split-heading dark-text">
            <div>
              <div className="eyebrow">
                <span /> Join our team
              </div>
              <h2>Open positions</h2>
            </div>
            <p>
              Walk-in applicants are welcome at the Pasay City office during
              regular weekday hours.
            </p>
          </div>
          <div className="career-layout">
            <div className="positions-panel">
              <span className="panel-label">Current openings</span>
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
                  <input name="phone" type="tel" required autoComplete="tel" />
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
              <small>No applicant information is stored on this website.</small>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
