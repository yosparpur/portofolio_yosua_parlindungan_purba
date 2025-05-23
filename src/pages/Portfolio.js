import React, { useState } from "react";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Bookshelf App",
      category: ["web", "frontend"],
      image: require("../img/Projects/BookShelf.png"),
      description: "Website pencatatan riwayat baca buku, CRUD Sederhana",
      technologies: ["HTML", "CSS", "JavaScript", "Bootsrap"],
      link: "https://yosparpur.github.io/bookshelf-app-starter-project/",
      startDate: "Desember 2024",
      endDate: "Desember 2024",
    },
    {
      id: 2,
      title: "Residence",
      category: ["web", "frontend"],
      image: require("../img/Projects/Residence.png"), // Gunakan require untuk import gambar
      description: "Proyek Analisis Data",
      technologies: ["HTML", "CSS", "JavaScript", "Bootsrap"],
      link: "https://yosparpur.github.io/yospur-residence-property/",
      startDate: "Desember  2024",
      endDate: "Desember  2024",
    },
    {
      id: 3,
      title: "Landing Page Movie Web",
      category: ["web", "frontend"],
      image: require("../img/Projects/Movie App.png"),
      description: "Website yang menampilkan list film terkini",
      technologies: ["HTML", "CSS", "JavaScript", "Bootsrap"],
      link: "https://yosparpur.github.io/movie-web-app/",
      startDate: "Desember 2024",
      endDate: "Desember 2024",
    },
    {
      id: 4,
      title: "Web Quizz",
      category: ["web", "frontend"],
      image: require("../img/Projects/Quizz.png"),
      description:
        "Website Quizz yang menggunakan Sistem login dan register. Beserta terdapat fitur anticheat",
      technologies: ["HTML", "CSS", "JavaScript", "Bootsrap"],
      link: "https://yosparpur.github.io/quiz-web-app/",
      startDate: "Desember 2024",
      endDate: "Desember 2024",
    },
    {
      id: 5,
      title: "Project Portofolio Subsmission Note App",
      category: ["web", "frontend"],
      image: require("../img/Projects/Submit Note.png"),
      description: "Project Portofolio Submission Note App",
      technologies: ["HTML", "CSS", "JavaScript", "Bootsrap"],
    },
  ];

  return (
    <article className="portfolio-section page-transition">
      <div className="section-header">
        <h2>Portfolio</h2>
        <div className="title-bar"></div>
      </div>

      <div className="portfolio-filter">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "web" ? "active" : ""}`}
          onClick={() => setFilter("web")}
        >
          Web
        </button>
        <button
          className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={`filter-btn ${filter === "dataanalyst" ? "active" : ""}`}
          onClick={() => setFilter("dataanalyst")}
        >
          Data Analyst
        </button>
      </div>

      <div className="portfolio-grid">
        {projects
          .filter(
            (project) => filter === "all" || project.category.includes(filter)
          )
          .map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-img-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <p className="project-date">
                      {project.startDate} - {project.endDate}
                    </p>
                    <div className="tech-stack">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project"
                    >
                      <i className="fas fa-external-link-alt"></i> View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h4>{project.title}</h4>
                <p className="project-date">
                  {project.startDate} - {project.endDate}
                </p>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </article>
  );
}

export default Portfolio;
