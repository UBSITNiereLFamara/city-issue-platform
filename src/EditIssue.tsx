import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
    axios.get(`http://localhost:5000/issues/${id}`).then((res) => {
      setIssue(res.data);
    });
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/issues/${id}`, issue);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Issue</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="issueType"
          value={issue.issueType}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="location"
          value={issue.location}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          name="description"
          value={issue.description}
          onChange={handleChange}
        />

        <select
          className="form-control mb-3"
          name="status"
          value={issue.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>

        <button className="btn btn-warning" type="submit">
          Update Issue
        </button>
      </form>
    </div>
  );
}