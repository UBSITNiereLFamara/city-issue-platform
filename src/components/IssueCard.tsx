import { Link } from "react-router-dom";
import type { Issue } from "../services/issueService";
import { deleteIssue } from "../services/issueService";

export default function IssueCard({ issue }: { issue: Issue }) {
  const handleDelete = async () => {
    if (!issue._id) return;

    const confirmDelete = confirm("Are you sure you want to delete this report?");
    if (!confirmDelete) return;

    await deleteIssue(issue._id);
    window.location.reload();
  };

  return (
    <div
      className="card shadow-sm"
      style={{
        backgroundColor: "#161d26",
        border: "none",
        color: "#e6edf3",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "22rem",
        overflow: "hidden",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
        className="card-img-top"
        style={{
          height: "190px",
          objectFit: "cover",
        }}
      />

      <div className="card-body">
        <h5 className="fw-bold" style={{ color: "#4a78d0" }}>
          {issue.issueType}
        </h5>

        <p style={{ color: "#a9b4c0" }}>📍 {issue.location}</p>

        <p style={{ color: "#a9b4c0", fontSize: "0.9rem" }}>
          {issue.description?.length > 80
            ? issue.description.substring(0, 80) + "..."
            : issue.description}
        </p>

        <span
          className="badge"
          style={{
            backgroundColor: issue.status === "Resolved" ? "#7aa78c" : "#f0ad4e",
            color: "white",
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

        <div className="d-flex gap-2 mt-2">
          <Link
            to={`/edit/${issue._id}`}
            className="btn btn-sm w-100"
            style={{
              border: "1px solid #f0ad4e",
              color: "#f0ad4e",
            }}
          >
            Edit
          </Link>

          <button
            onClick={handleDelete}
            className="btn btn-sm w-100"
            style={{
              border: "1px solid #dc3545",
              color: "#dc3545",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}