import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export function ArrowIcon({
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

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const scrollToNextSection = () => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    const next = sections.find(
      (section) => section.offsetTop > window.scrollY + 120,
    );
    (next ?? sections[0])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header
        className={`navbar ${scrolled || !isHome ? "navbar-scrolled" : ""}`}
      >
        <div className="navbar-inner">
          <Link
            className="brand"
            to="/"
            aria-label="ROMTECH home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark" aria-hidden="true">
              <img src="/romtech-logo.jpg" alt="" />
            </span>
            <span>
              <strong>ROMTECH</strong>
              <small>Construction, Inc.</small>
            </span>
          </Link>
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
              <NavLink
                key={label}
                to={href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {label}
              </NavLink>
            ))}
            <Link
              className="nav-cta"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
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

      <footer>
        <div className="content-width footer-top">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              <img src="/romtech-logo.jpg" alt="" />
            </span>
            <span>
              <strong>ROMTECH</strong>
              <small>Construction, Inc.</small>
            </span>
          </Link>
          <p>
            Specialized construction solutions
            <br />
            built on experience and trust.
          </p>
          <div className="footer-links">
            {navLinks.map(([label, href]) => (
              <Link key={label} to={href}>
                {label}
              </Link>
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
