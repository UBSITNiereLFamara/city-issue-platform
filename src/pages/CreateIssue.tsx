import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createIssue } from "../services/issueService";

export default function CreateIssue() {
  const navigate = useNavigate();

  const [issue, setIssue] = useState({
    issueType: "",
    location: "",
    description: "",
    status: "Pending",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createIssue(issue);
    navigate("/reports");
  };

  return (
    <div style={{ backgroundColor: "#0f141a", minHeight: "100vh" }}>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(15,20,26,0.88),rgba(15,20,26,0.88)), url('https://baguio.ph/wp-content/uploads/2020/10/Baguio-City-Colorful-City-View.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          color: "#e6edf3",
        }}
      >
        <div className="container text-center">

          <h1 className="fw-bold display-5">
            Report a Community Issue
          </h1>

          <p
            className="lead mt-3"
            style={{ color: "#a9b4c0", maxWidth: "850px", margin: "0 auto" }}
          >
            Help improve <strong>Baguio City, Philippines</strong> by reporting
            public concerns such as road damage, flooding, garbage issues,
            drainage problems, broken streetlights, and safety hazards.
          </p>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: "70px 0" }}>
        <div className="container">

          <div className="row g-5">

            {/* LEFT SIDE */}
            <div className="col-lg-5">

              <div
                className="p-4 rounded h-100"
                style={{
                  backgroundColor: "#161d26",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >

                <h2 className="fw-bold" style={{ color: "#7aa78c" }}>
                  Why Report Issues?
                </h2>

                <p className="mt-3" style={{ color: "#a9b4c0" }}>
                  This page allows residents to directly submit community
                  concerns to the system. Every report helps identify city
                  problems faster and supports better government response.
                </p>

                <p style={{ color: "#a9b4c0" }}>
                  Your participation contributes to:
                </p>

                <ul style={{ color: "#a9b4c0", paddingLeft: "20px" }}>
                  <li>Cleaner streets and neighborhoods</li>
                  <li>Safer roads and public spaces</li>
                  <li>Faster issue monitoring</li>
                  <li>Improved city management</li>
                  <li>SDG 11: Sustainable Cities and Communities</li>
                </ul>

                <hr style={{ borderColor: "rgba(255,255,255,0.08)" }} />

                <h5 style={{ color: "#4a78d0" }}>Examples of Reports</h5>

                <p style={{ color: "#a9b4c0", marginBottom: "8px" }}>
                  * Potholes / Damaged Roads
                </p>

                <p style={{ color: "#a9b4c0", marginBottom: "8px" }}>
                  * Overflowing Garbage
                </p>

                <p style={{ color: "#a9b4c0", marginBottom: "8px" }}>
                  * Drainage Issues
                </p>

                <p style={{ color: "#a9b4c0", marginBottom: "8px" }}>
                  * Broken Street Lights
                </p>

                <p style={{ color: "#a9b4c0" }}>
                  * Public Safety Concerns
                </p>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-lg-7">

              <div
                className="p-5 rounded"
                style={{
                  backgroundColor: "#161d26",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >

                <h2 className="fw-bold mb-4" style={{ color: "#7aa78c" }}>
                  Submit Report Form
                </h2>

                <form onSubmit={handleSubmit}>

                  <label
                    className="mb-2 fw-semibold"
                    style={{ color: "#e6edf3" }}
                  >
                    Issue Type
                  </label>

                  <input
                    className="form-control mb-4"
                    name="issueType"
                    placeholder="Ex: Flooding, Garbage, Broken Road"
                    value={issue.issueType}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "#0f141a",
                      border: "1px solid #2a3441",
                      color: "white",
                    }}
                  />

                  <label
                    className="mb-2 fw-semibold"
                    style={{ color: "#e6edf3" }}
                  >
                    Location
                  </label>

                  <input
                    className="form-control mb-4"
                    name="location"
                    placeholder="Ex: Session Road, Burnham Park"
                    value={issue.location}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "#0f141a",
                      border: "1px solid #2a3441",
                      color: "white",
                    }}
                  />

                  <label
                    className="mb-2 fw-semibold"
                    style={{ color: "#e6edf3" }}
                  >
                    Description
                  </label>

                  <textarea
                    className="form-control mb-4"
                    rows={5}
                    name="description"
                    placeholder="Describe the issue clearly so authorities can understand the concern."
                    value={issue.description}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "#0f141a",
                      border: "1px solid #2a3441",
                      color: "white",
                    }}
                  />

                  <button
                    className="btn w-100 fw-semibold"
                    type="submit"
                    style={{
                      backgroundColor: "#4a78d0",
                      color: "white",
                      padding: "12px",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  >
                    Submit Issue Report
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#4a78d0",
          color: "white",
          padding: "50px 0",
        }}
      >
        <div className="container text-center">

          <h3 className="fw-bold">
            Every Report Makes a Difference
          </h3>

          <p className="mt-2">
            Your report helps make Baguio City cleaner, safer, and smarter.
          </p>

        </div>
      </section>

    </div>
  );
}