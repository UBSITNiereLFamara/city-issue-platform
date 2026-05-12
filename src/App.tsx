import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateIssue from "./pages/CreateIssue";
import IssueList from "./pages/IssueList";
import IssueDetails from "./pages/IssueDetails";
import EditIssue from "./pages/EditIssue";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateIssue />} />
        <Route path="/reports" element={<IssueList />} />
        <Route path="/issue/:id" element={<IssueDetails />} />
        <Route path="/edit/:id" element={<EditIssue />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;