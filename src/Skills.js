import React from "react";

function Skills() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "MySQL",
    
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <p className="section-intro">
        I enjoy building clean, efficient, and user-friendly experiences with modern tools.
      </p>

      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
