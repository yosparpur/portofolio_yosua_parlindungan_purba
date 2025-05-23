// Hapus useState jika tidak digunakan
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import avatar from "./img/avatar.png";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <aside className="sidebar">
          <div className="profile-container">
            <div className="profile-image-container">
              <img src={avatar} alt="Profile" className="profile-image" />
            </div>
            <h1 className="profile-name">Yosua Parlindungan Purba</h1>
            <p className="profile-title">
              Web Entuhaist , Data Analys Entuhaist
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>yosuappurba@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+62 812-9330-1937</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Depok, Jawa Barat</span>
              </div>
            </div>

            {/* Tambahkan Social Media Links */}
            <div className="social-media">
              <a
                href="https://github.com/YosParPur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yospur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/tyosua2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@yosparpur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <nav className="main-nav">
            <ul>
              <li>
                <Link
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
