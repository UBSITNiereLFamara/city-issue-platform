import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: "#161d26",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container-fluid px-4">

        {/* BRAND */}
        <Link
          className="navbar-brand fw-bold"
          style={{ color: "var(--royal)" }}
          to="/"
        >
          Baguio Issue System
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto gap-2">

            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/create">
                Report Issue
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/reports">
                View Reports
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}