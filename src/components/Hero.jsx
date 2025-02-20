import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'hero-stars';

    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'hero-star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
      starsContainer.appendChild(star);
    }

    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'hero-shooting-star';
      shootingStar.style.left = `${Math.random() * 100}%`;
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite`;
      starsContainer.appendChild(shootingStar);
    }
                
    document.querySelector('.hero').appendChild(starsContainer);

    return () => {
      document.querySelector('.hero')?.removeChild(starsContainer);
    };
  }, []);

  return (
    <section id="home" className="hero" style={{ background: 'linear-gradient(135deg, var(--background-light) 0%, var(--background-white) 100%)' }}>
      <div className="hero-content">
        <span className="greeting">Welcome, I'm</span>
        <h1>Ahmidserhan Halon</h1>
        <h2 className="role">Full Stack Developer</h2>
        <p className="bio">Passionate about building web applications using PHP, Django, JavaScript, React, and more. Still learning and growing every day!</p>
        <div className="cta-group">
          <Link to="/projects" className="cta-button primary">View Project</Link>
          <button className="cta-button secondary">Download CV</button>
        </div>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-wrapper">
          <img src="./src/assets/images/labrador.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
