import { Link } from "react-router-dom";
import type { Issue } from "../services/issueService";

export default function IssueCard({ issue }: { issue: Issue }) {
  return (
    <div
      className="card shadow-sm"
      style={{
        backgroundColor: "#161d26",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#e6edf3",
        borderRadius: "12px",
        width: "22rem",
      }}
    >

      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
        className="card-img-top"
        style={{
          height: "180px",
          objectFit: "cover",
          filter: "brightness(0.85)",
        }}
      />

      {/* BODY */}
      <div className="card-body">

        <h5 style={{ color: "#4a78d0" }}>{issue.issueType}</h5>

        <p style={{ color: "#a9b4c0" }}>📍 {issue.location}</p>

        <p style={{ color: "#a9b4c0", fontSize: "0.9rem" }}>
          {issue.description?.length > 80
            ? issue.description.substring(0, 80) + "..."
            : issue.description}
        </p>

        {/* STATUS */}
        <span
          className="badge"
          style={{
            backgroundColor:
              issue.status === "Resolved" ? "#7aa78c" : "#f0ad4e",
            color: "white",
          }}
        >
          {issue.status}
        </span>

        {/* BUTTON */}
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
  );
}