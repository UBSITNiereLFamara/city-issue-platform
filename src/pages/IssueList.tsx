import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIssues, deleteIssue } from "../services/issueService";
import type { Issue } from "../services/issueService";

export default function IssueList() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    const data = await getIssues();
    setIssues(data);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this issue?"
    );

    if (!confirmDelete) return;

    await deleteIssue(id);
    setIssues((prev) => prev.filter((issue) => issue._id !== id));
  };

  return (
    <div style={{ backgroundColor: "#0f141a", minHeight: "100vh" }}>

      {/* HERO HEADER */}
      <section
        style={{
          background:
            "linear-gradient(rgba(15,20,26,0.88),rgba(15,20,26,0.88)), url('https://baguio.ph/wp-content/uploads/2020/10/Baguio-City-Colorful-City-View.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
        }}
      >
        <div className="container text-center">

          <h1 className="fw-bold display-5" style={{ color: "#e6edf3" }}>
            Community Issue Reports
          </h1>

          <p className="lead mt-3" style={{ color: "#a9b4c0" }}>
            View real-time reports submitted by citizens of{" "}
            <strong>Baguio City, Philippines</strong>.
          </p>

        </div>
      </section>

      {/* INFO SECTION */}
      <section style={{ padding: "60px 0", backgroundColor: "#161d26" }}>
        <div className="container text-center">

          <h2 className="fw-bold" style={{ color: "#7aa78c" }}>
            What This Page Does
          </h2>

          <p
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "15px auto",
            }}
          >
            This page shows all community issues reported by citizens.
            Each report contains important details such as the issue type,
            location, and current status.
          </p>

          <p
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            You can also view full details, edit reports, or delete
            outdated entries.
          </p>

        </div>
      </section>

      {/* REPORTS */}
      <section className="container py-5">

        {issues.length === 0 ? (
          <p className="text-center" style={{ color: "#a9b4c0" }}>
            No reports available yet.
          </p>
        ) : (
          <div className="row g-4">

            {issues.map((issue) => (

              <div className="col-md-4" key={issue._id}>

                <div
                  className="card h-100 shadow"
                  style={{
                    backgroundColor: "#161d26",
                    color: "#e6edf3",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                  }}
                >

                  <img
                    src="https://files01.pna.gov.ph/ograph/2025/09/11/bgo-breath-baguio-marker-september-11-2025lta.jpg"
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body d-flex flex-column">

                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "#4a78d0" }}
                    >
                      {issue.issueType}
                    </h4>

                    <p style={{ color: "#a9b4c0" }}>
                      📍 {issue.location}
                    </p>

                    <p style={{ color: "#c9d1d9" }}>
                      {issue.description}
                    </p>

                    <div className="mb-3">

                      <span
                        className="badge"
                        style={{
                          backgroundColor:
                            issue.status === "Resolved"
                              ? "#7aa78c"
                              : "#f0ad4e",
                          padding: "8px 12px",
                          fontSize: "14px",
                        }}
                      >
                        {issue.status}
                      </span>

                    </div>

                    <div className="d-grid gap-2 mt-auto">

                      <Link
                        to={`/issue/${issue._id}`}
                        className="btn btn-sm"
                        style={{
                          border: "1px solid #4a78d0",
                          color: "#4a78d0",
                        }}
                      >
                        View
                      </Link>

                      <Link
                        to={`/edit/${issue._id}`}
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#7aa78c",
                          color: "white",
                        }}
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => issue._id && handleDelete(issue._id)}
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#d9534f",
                          color: "white",
                        }}
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </section>

    </div>
  );
}