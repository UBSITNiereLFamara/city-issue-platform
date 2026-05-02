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
    <div className="container mt-4">
      <h2>Report Issue</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="issueType"
          placeholder="Issue Type"
          value={issue.issueType}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="location"
          placeholder="Location"
          value={issue.location}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          value={issue.description}
          onChange={handleChange}
        />

        <button className="btn btn-primary" type="submit">
          Submit Issue
        </button>
      </form>
    </div>
  );
}