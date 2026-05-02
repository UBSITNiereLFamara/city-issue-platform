// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IssueList from "./pages/IssueList";
import CreateIssue from "./pages/CreateIssue";
import IssueDetails from "./pages/IssueDetails";
import EditIssue from "./pages/EditIssue";
import Contact from "./pages/Contact";
import ReportsPage from "./pages/ReportsPage";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Create Report */}
        <Route path="/create" element={<CreateIssue />} />

        {/* Create Report */}
        <Route path="/list" element={<IssueList />} />

        {/* Reports List */}
        <Route path="/reports" element={<ReportsPage />} />

        {/* Details */}
        <Route path="/issue/:id" element={<IssueDetails />} />

        {/* Edit */}
        <Route path="/edit/:id" element={<EditIssue />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}