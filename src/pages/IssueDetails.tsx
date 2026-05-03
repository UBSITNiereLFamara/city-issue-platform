import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getIssueById } from "../services/issueService";
import type { Issue } from "../services/issueService";

export default function IssueDetails() {
  const { id } = useParams();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    const loadIssue = async () => {
      if (!id) return;

      const data = await getIssueById(id);
      setIssue(data);
    };

    loadIssue();
  }, [id]);

  if (!issue)
    return (
      <div
        style={{
          backgroundColor: "#0f141a",
          minHeight: "100vh",
          color: "#a9b4c0",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        Loading...
      </div>
    );

  return (
    <div style={{ backgroundColor: "#0f141a", minHeight: "100vh" }}>

      {/* HEADER */}
      <section
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(rgba(15,20,26,0.88),rgba(15,20,26,0.88)), url('https://baguio.ph/wp-content/uploads/2020/10/Baguio-City-Colorful-City-View.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">

          <h1 className="fw-bold" style={{ color: "#e6edf3" }}>
            Issue Details
          </h1>

          <p style={{ color: "#a9b4c0" }}>
            Full information about the reported community issue
          </p>

        </div>
      </section>

      {/* DETAILS CARD */}
      <section style={{ padding: "60px 0" }}>
        <div className="container d-flex justify-content-center">

          <div
            className="card shadow-lg"
            style={{
              width: "30rem",
              backgroundColor: "#161d26",
              color: "#e6edf3",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >

            <img
              src="https://files01.pna.gov.ph/ograph/2025/09/11/bgo-breath-baguio-marker-september-11-2025lta.jpg"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />

            <div className="card-body">

              <h3 style={{ color: "#4a78d0" }}>
                {issue.issueType}
              </h3>

              <p style={{ color: "#a9b4c0" }}>
                📍 <strong>Location:</strong> {issue.location}
              </p>

              <p style={{ color: "#a9b4c0" }}>
                📝 <strong>Description:</strong><br />
                {issue.description}
              </p>

              <p>
                <span
                  className="badge"
                  style={{
                    backgroundColor:
                      issue.status === "Resolved"
                        ? "#7aa78c"
                        : "#f0ad4e",
                    color: "white",
                    padding: "8px 12px",
                  }}
                >
                  {issue.status}
                </span>
              </p>

              {/* BACK BUTTON (FIXED ROUTE) */}
              <div className="mt-4">

                <Link
                  to="/reports"
                  className="btn w-100"
                  style={{
                    border: "1px solid #4a78d0",
                    color: "#4a78d0",
                  }}
                >
                  ← Back to Reports
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}