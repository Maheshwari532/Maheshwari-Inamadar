import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-container">

        <div className="project-card">

          <div className="project-icon">
            <i className="fa-solid fa-gamepad"></i>
          </div>

          <a
            href="https://github.com/Maheshwari532/Number-guessing-game"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          ><h3>Number Guessing Game</h3></a>

          <p>
            Interactive web game where users guess a randomly
            generated number and receive instant feedback.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          
          

        </div>

        <div className="project-card">

          <div className="project-icon">
            <i className="fa-solid fa-seedling"></i>
          </div>

          <a
            href="https://github.com/Maheshwari532/Agri-Market-Price-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          ><h3>Agri Market Price Tracker</h3></a>

          <p>
            Real-time agricultural commodity price tracker
            helping farmers and traders make informed decisions.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Python</span>
          </div>

          

        </div>

      </div>
    </section>
  );
}

export default Projects;