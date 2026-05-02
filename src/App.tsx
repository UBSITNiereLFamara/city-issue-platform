import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Contact from './pages/Contact'
import CreateIssue from './pages/CreateIssue'
import EditIssue from './pages/EditIssue'
import IssueDetails from './pages/IssueDetails'
import IssueList from './pages/IssueList'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">

        <Routes>

          
          <Route
            path="/"
            element={<IssueList />}
          />

         
          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/create-issue"
            element={<CreateIssue />}
          />

          
          <Route
            path="/edit-issue/:id"
            element={<EditIssue />}
          />

          <Route
            path="/issue/:id"
            element={<IssueDetails />}
          />

        </Routes>

      </div>

      {/* Footer */}
      <Footer />

    </Router>
  )
}

export default App