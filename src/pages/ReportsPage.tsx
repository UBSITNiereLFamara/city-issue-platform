// src/pages/ReportsPage.tsx

import { useEffect, useState } from "react";
import { getIssues } from "../services/issueService";
import IssueCard from "../components/IssueCard";

export default function ReportsPage() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    const data = await getIssues();
    setIssues(data);
  };

  return (
    <div className="container py-5">
      <h2 className="text-success fw-bold mb-4 text-center">
        Submitted Reports
      </h2>

      <div className="row g-4">
        {issues.map((issue: any) => (
          <div className="col-md-6 col-lg-4" key={issue._id}>
            <IssueCard issue={issue} />
          </div>
        ))}
      </div>
    </div>
  );
}