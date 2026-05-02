import { useEffect, useState } from "react";
import { getIssues } from "../services/issueService";
import type { Issue } from "../services/issueService";
import IssueCard from "../components/IssueCard";

export default function ReportsPage() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const loadIssues = async () => {
      const data = await getIssues();
      setIssues(data);
    };

    loadIssues();
  }, []);

  return (
    <div style={{ backgroundColor: "#f7f3ee", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2
          className="fw-bold mb-5 text-center"
          style={{
            color: "#2f8f5b",
            fontSize: "2.4rem",
          }}
        >
          Submitted Reports
        </h2>

        {issues.length === 0 ? (
          <p className="text-center text-muted">No reports submitted yet.</p>
        ) : (
          <div className="row g-4 justify-content-center">
            {issues.map((issue) => (
              <div className="col-md-6 col-lg-4 d-flex justify-content-center" key={issue._id}>
                <IssueCard issue={issue} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}