import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/SiteLayout";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div>
        <span>404</span>
        <h1>Page not found.</h1>
        <p>The page may have moved as the ROMTECH website was reorganized.</p>
        <Link className="button gold" to="/">
          Return home <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
