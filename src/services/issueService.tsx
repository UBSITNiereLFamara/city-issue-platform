import axios from "axios";

export type Issue = {
  _id?: string;
  issueType: string;
  description: string;
  location: string;
  status?: string;
  createdAt?: string;
};

export type IssueInput = {
  issueType: string;
  description: string;
  location: string;
  status?: string;
};

const API_URL = "http://localhost:5000/issues";

// GET ALL ISSUES
export const getIssues = async (): Promise<Issue[]> => {
  const response = await axios.get<Issue[]>(API_URL);
  return response.data;
};

// GET ISSUE BY ID
export const getIssueById = async (id: string): Promise<Issue> => {
  const response = await axios.get<Issue>(`${API_URL}/${id}`);
  return response.data;
};

// CREATE ISSUE
export const createIssue = async (issue: IssueInput): Promise<Issue> => {
  const response = await axios.post<Issue>(API_URL, issue);
  return response.data;
};

// UPDATE ISSUE
export const updateIssue = async (
  id: string,
  issue: Partial<IssueInput>
): Promise<Issue> => {
  const response = await axios.put<Issue>(`${API_URL}/${id}`, issue);
  return response.data;
};

// DELETE ISSUE
export const deleteIssue = async (id: string): Promise<Issue> => {
  const response = await axios.delete<Issue>(`${API_URL}/${id}`);
  return response.data;
};