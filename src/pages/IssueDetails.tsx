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

  if (!issue) return <div className="container py-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="card shadow-sm p-4">
        <h2 className="text-success">{issue.issueType}</h2>
        <p><strong>Location:</strong> {issue.location}</p>
        <p><strong>Description:</strong> {issue.description}</p>
        <p><strong>Status:</strong> {issue.status}</p>
        <Link to="/" className="btn btn-outline-primary">Back</Link>
      </div>
    </div>
  );
}