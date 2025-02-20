import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import labrador from '../assets/images/labrador.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiSocketdotio, SiMysql } from 'react-icons/si';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with HTML, CSS, JS and PHP, featuring real-time updates and responsive design.",
      tech: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "MySQL", icon: <SiMysql /> }
      ],
      image: labrador,
      liveLink: "https://snhssims.online",
      githubLink: "#",
      category: "Full Stack"
    }
  ];
          
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (

    <section id="projects" className="projects">
        <motion.div 
          className="header-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ background: 'rgba(32, 32, 32, 0.7)' }} 
        >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Featured Projects</h2>
          <div className="underline"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            Some of my recent work includes a Student Information Management System, 
            featuring real-time updates and responsive design. Built with Php, 
            it demonstrates modern web development practices and clean architecture.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>←</button>
        
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentIndex}
            className="carousel-slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-card">
              <div className="project-image">
                <img src={projects[currentIndex].image} alt={projects[currentIndex].title} loading="lazy" />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentIndex].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentIndex].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </motion.a>
                </motion.div>
              </div>
              <div className="project-info">
                <h3>{projects[currentIndex].title}</h3>
                <p>{projects[currentIndex].description}</p>
                <div className="tech-stack">
                  {projects[currentIndex].tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech.icon}
                      <span className="tech-name">{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="carousel-button next" onClick={nextSlide}>→</button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;