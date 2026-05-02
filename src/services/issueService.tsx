import axios from "axios";

const API_URL = "http://localhost:5000/issues";

// GET ALL ISSUES
export const getIssues = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// GET ISSUE BY ID
export const getIssueById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// CREATE ISSUE
export const createIssue = async (issue: any) => {
  const response = await axios.post(API_URL, issue);
  return response.data;
};

// UPDATE ISSUE
export const updateIssue = async (id: string, issue: any) => {
  const response = await axios.put(`${API_URL}/${id}`, issue);
  return response.data;
};

// DELETE ISSUE
export const deleteIssue = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};