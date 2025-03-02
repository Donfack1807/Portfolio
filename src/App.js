import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css"; // Import du fichier CSS

const projects = [
  {
    title: "Gestionnaire de Tâches",
    description: "Une application web pour gérer des tâches avec Spring Boot et React.",
    link: "https://github.com/donfack1807/todolistproject"
  },
  {
    title: "API de Blogs",
    description: "Une API RESTful pour un blog avec authentication JWT et PostgreSQL.",
    link: "https://github.com/donfack1807/blog-api"
  }
];

export default function Portfolio() {
  return (
    <div className="container">
      <header className="header">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Développeur Web Java & Software Engineer</p>
        <div className="social-links">
          <a href="https://github.com/donfack1807" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/ton-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:ton.email@example.com"><FaEnvelope /></a>
        </div>
      </header>

      <section>
        <h2>Mes Projets</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="button">Voir sur GitHub</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
