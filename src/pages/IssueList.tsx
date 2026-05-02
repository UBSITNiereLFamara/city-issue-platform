import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIssues } from "../services/issueService";
import type { Issue } from "../services/issueService";

export default function IssueList() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const loadIssues = async () => {
      const data = await getIssues();
      setIssues(data);
    };

    loadIssues();
  }, []);

  return (
    <div style={{ backgroundColor: "#0f141a", minHeight: "100vh" }}>

      {/* HEADER */}
      <div className="container text-center py-5">

        <h2 style={{ color: "#7aa78c" }} className="fw-bold">
          Community Issue Reports
        </h2>

        <p style={{ color: "#a9b4c0", maxWidth: "700px", margin: "0 auto" }}>
          Below are real-time reports submitted by citizens of
          <strong> Baguio City, Philippines</strong>. These issues help support
          SDG 11: Sustainable Cities and Communities.
        </p>

      </div>

      {/* CAROUSEL */}
      <section className="container pb-5">

        {issues.length === 0 ? (
          <p className="text-center" style={{ color: "#a9b4c0" }}>
            No reports available yet.
          </p>
        ) : (
          <div id="issueCarousel" className="carousel slide" data-bs-ride="carousel">

            {/* INDICATORS */}
            <div className="carousel-indicators">
              {issues.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#issueCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                />
              ))}
            </div>

            {/* CARDS */}
            <div className="carousel-inner">

              {issues.map((issue, index) => (
                <div
                  key={issue._id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >

                  <div className="d-flex justify-content-center">

                    <div
                      className="card shadow-lg"
                      style={{
                        width: "22rem",
                        backgroundColor: "#161d26",
                        color: "#e6edf3",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                      }}
                    >

                      {/* IMAGE */}
                      <img
                        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
                        className="card-img-top"
                        style={{ height: "180px", objectFit: "cover" }}
                      />

                      {/* BODY */}
                      <div className="card-body">

                        <h5 style={{ color: "#4a78d0" }}>
                          {issue.issueType}
                        </h5>

                        <p style={{ color: "#a9b4c0" }}>
                          📍 {issue.location}
                        </p>

                        <p style={{ fontSize: "0.9rem", color: "#a9b4c0" }}>
                          {issue.description?.length > 90
                            ? issue.description.substring(0, 90) + "..."
                            : issue.description}
                        </p>

                        <span
                          className="badge"
                          style={{
                            backgroundColor:
                              issue.status === "Resolved"
                                ? "#7aa78c"
                                : "#f0ad4e",
                            color: "#fff",
                          }}
                        >
                          {issue.status}
                        </span>

                        <Link
                          to={`/issue/${issue._id}`}
                          className="btn btn-sm w-100 mt-3"
                          style={{
                            border: "1px solid #4a78d0",
                            color: "#4a78d0",
                          }}
                        >
                          View Details
                        </Link>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* CONTROLS */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#issueCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#issueCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>
        )}

      </section>

      {/* FOOT NOTE */}
      <div className="text-center pb-5">
        <p style={{ color: "#a9b4c0", fontSize: "0.9rem" }}>
          All reports are part of a civic initiative to improve urban
          sustainability and public service response in Baguio City.
        </p>
      </div>

    </div>
  );
}