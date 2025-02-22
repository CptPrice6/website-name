import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Welcome to the Home Page</h1>
        <p className="lead">
          This is a simple React App with random number generation.
        </p>
        <Link to="/random-number" className="btn btn-primary btn-lg">
          Go to Random Number Generator
        </Link>
      </div>
    </div>
  );
}

function RandomNumberPage() {
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomNumber = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8000/api/random-number"
      );
      setNumber(response.data.number);
    } catch (error) {
      console.error("Error fetching the number:", error);
      setNumber("Error fetching number");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body text-center">
          <h2 className="card-title mb-4">Random Number Generator</h2>
          <button
            className="btn btn-primary btn-lg mb-3"
            onClick={getRandomNumber}
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Random Number"}
          </button>
          {number !== null && (
            <div className="alert alert-success mt-4">
              <h3>Random Number: {number}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Random Number App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/random-number">
                  Random Number
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random-number" element={<RandomNumberPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
