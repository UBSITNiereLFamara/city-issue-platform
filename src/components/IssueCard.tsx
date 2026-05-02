import { Link } from "react-router-dom";

type IssueCardProps = {
  _id: string;
  issueType: string;
  location: string;
  status: string;
};

export default function IssueCard({
  _id,
  issueType,
  location,
  status,
}: IssueCardProps) {
  return (
    <div className="card border-light shadow-sm mb-4 h-100">
      <div className="card-body p-4">
        {/* Issue Type Header */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h6 className="card-title mb-0 fw-bold text-dark fs-5">
            {issueType}
          </h6>
          
          {/* Status Badge */}
          <span
            className={`badge fw-semibold px-3 py-2 rounded-pill ${
              status === "Resolved" 
                ? "bg-success-subtle text-success border border-success-subtle" 
                : status === "In Progress"
                ? "bg-warning-subtle text-warning border border-warning-subtle"
                : "bg-secondary-subtle text-secondary border border-secondary-subtle"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Location */}
        <div className="mb-3">
          <small className="text-muted fw-medium">
            📍 <span className="text-dark">{location}</span>
          </small>
        </div>

        {/* Action Buttons */}
        <div className="d-flex gap-2">
          <Link 
            to={`/issue/${_id}`} 
            className="btn btn-outline-primary btn-sm px-3 fw-medium"
          >
            <i className="bi bi-eye me-1"></i>View
          </Link>

          <Link 
            to={`/edit/${_id}`} 
            className="btn btn-outline-warning btn-sm px-3 fw-medium text-warning"
          >
            <i className="bi bi-pencil me-1"></i>Edit
          </Link>
        </div>
      </div>
    </div>
  );
}