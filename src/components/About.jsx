import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaLaravel, FaPython, FaPhp, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiDjango, SiMysql, SiSqlite } from 'react-icons/si';

const About = () => {
  const skills = [
    { 
      category: "Frontend", 
      items: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Bootstrap", icon: <FaBootstrap /> }
      ] 
    },
    {
      category: "Backend & Framework",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Java", icon: <FaJava /> }, 
        { name: "React", icon: <FaReact /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "Django", icon: <SiDjango /> }
      ]
    }
  ];


  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      
      <div className="about-container">
        <div className="about-left">
          <img src="./src/assets/images/labrador.jpg" alt="Professional headshot" />
          <div className="experience-cards">
            <div className="exp-card">
              <span className="number">1+</span>
              <span className="label">Years Experience</span>
            </div>
            <div className="exp-card">
              <span className="number">4+</span>
              <span className="label">Projects Completed</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="bio">
            <h3>Fullstack Developer specializing in PHP, Python, Java</h3>
            <p>I transform ideas into elegant, responsive web applications. With a keen eye for detail and a passion for clean code, I create seamless user experiences that drive results.</p>
          </div>

          <div className="skills-container">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h4>{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, i) => (
                      <span key={i} className="skill-tag" style={{ background: 'var(--background-light)' }}>
                      {skill.icon}
                      <span className="skill-name">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
