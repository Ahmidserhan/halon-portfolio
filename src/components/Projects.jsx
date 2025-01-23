import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "project1.jpg"
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
