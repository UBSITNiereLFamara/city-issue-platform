import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getIssueById, updateIssue } from "../services/issueService";
import type { Issue } from "../services/issueService";

export default function EditIssue() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [issue, setIssue] = useState({
    issueType: "",
    location: "",
    description: "",
    status: "Pending",
  });

  useEffect(() => {
    if (!id) return;

    getIssueById(id).then((data: Issue) =>
      setIssue({
        issueType: data.issueType || "",
        location: data.location || "",
        description: data.description || "",
        status: data.status || "Pending",
      })
    );
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    await updateIssue(id, issue);
    navigate("/reports");
  };

  return (
    <div style={{ backgroundColor: "#0f141a", minHeight: "100vh" }}>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(15,20,26,0.85),rgba(15,20,26,0.85)), url('https://baguio.ph/wp-content/uploads/2020/10/Baguio-City-Colorful-City-View.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          color: "#e6edf3",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-5">Edit Reported Issue</h1>

          <p
            className="lead mt-3"
            style={{ color: "#a9b4c0", maxWidth: "800px", margin: "0 auto" }}
          >
            Update issue details, change location information, revise descriptions,
            or modify the current status of the report. Keeping reports updated
            helps authorities respond more effectively.
          </p>
        </div>
      </section>

      {/* INFO SECTION */}
      <section style={{ padding: "60px 0", backgroundColor: "#161d26" }}>
        <div className="container text-center">

          <h2 className="fw-bold" style={{ color: "#7aa78c" }}>
            Why Updating Reports Matters
          </h2>

          <p
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "15px auto",
            }}
          >
            Accurate reports improve decision-making and ensure city concerns are
            properly monitored. Updating a report helps track progress and
            supports better urban governance in line with SDG 11: Sustainable
            Cities and Communities.
          </p>

          <div className="row mt-5">

            <div className="col-md-4 mb-4">
              <div
                className="p-4 rounded h-100"
                style={{ backgroundColor: "#0f141a" }}
              >
                <h5 style={{ color: "#4a78d0" }}>📍 Correct Details</h5>
                <p style={{ color: "#a9b4c0" }}>
                  Fix incorrect locations, issue types, or descriptions so the
                  report remains reliable.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="p-4 rounded h-100"
                style={{ backgroundColor: "#0f141a" }}
              >
                <h5 style={{ color: "#4a78d0" }}>🔄 Update Status</h5>
                <p style={{ color: "#a9b4c0" }}>
                  Mark issues as Pending or Resolved to show the latest progress.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="p-4 rounded h-100"
                style={{ backgroundColor: "#0f141a" }}
              >
                <h5 style={{ color: "#4a78d0" }}>🏙️ Help the City</h5>
                <p style={{ color: "#a9b4c0" }}>
                  Updated reports support faster responses and better city
                  management in Baguio City.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "70px 0" }}>
        <div className="container">

          <div
            className="mx-auto p-4 shadow-lg rounded"
            style={{
              maxWidth: "700px",
              backgroundColor: "#161d26",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              className="text-center fw-bold mb-4"
              style={{ color: "#7aa78c" }}
            >
              Edit Issue Form
            </h2>

            <form onSubmit={handleSubmit}>

              <label
                className="form-label"
                style={{ color: "#e6edf3" }}
              >
                Issue Type
              </label>
              <input
                className="form-control mb-3"
                name="issueType"
                value={issue.issueType}
                onChange={handleChange}
                placeholder="Ex: Road Damage"
                style={{
                  backgroundColor: "#0f141a",
                  color: "#e6edf3",
                  border: "1px solid #2b3440",
                }}
              />

              <label
                className="form-label"
                style={{ color: "#e6edf3" }}
              >
                Location
              </label>
              <input
                className="form-control mb-3"
                name="location"
                value={issue.location}
                onChange={handleChange}
                placeholder="Enter area/location"
                style={{
                  backgroundColor: "#0f141a",
                  color: "#e6edf3",
                  border: "1px solid #2b3440",
                }}
              />

              <label
                className="form-label"
                style={{ color: "#e6edf3" }}
              >
                Description
              </label>
              <textarea
                className="form-control mb-3"
                rows={5}
                name="description"
                value={issue.description}
                onChange={handleChange}
                placeholder="Update issue details..."
                style={{
                  backgroundColor: "#0f141a",
                  color: "#e6edf3",
                  border: "1px solid #2b3440",
                }}
              />

              <label
                className="form-label"
                style={{ color: "#e6edf3" }}
              >
                Status
              </label>
              <select
                className="form-control mb-4"
                name="status"
                value={issue.status}
                onChange={handleChange}
                style={{
                  backgroundColor: "#0f141a",
                  color: "#e6edf3",
                  border: "1px solid #2b3440",
                }}
              >
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
              </select>

              <button
                className="btn w-100 mb-3"
                type="submit"
                style={{
                  backgroundColor: "#4a78d0",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                Update Issue
              </button>

              <Link
                to="/reports"
                className="btn w-100"
                style={{
                  border: "1px solid #7aa78c",
                  color: "#7aa78c",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Back to Reports
              </Link>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
