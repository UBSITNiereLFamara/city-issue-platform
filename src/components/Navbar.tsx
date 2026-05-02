import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-4 text-dark" to="/">
          City Issue Platform
        </Link>

        <button
          className="navbar-toggler bg-light border border-secondary-subtle rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3 py-2 rounded-pill" to="/">
                Issues
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3 py-2 rounded-pill" to="/create">
                Report Issue
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3 py-2 rounded-pill" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}