import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'navbar-stars';
    
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
      starsContainer.appendChild(star);
    }
    
    for (let i = 0; i < 10; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = `${Math.random() * 100}%`;
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite`;
      starsContainer.appendChild(shootingStar);
    }
    
    document.body.appendChild(starsContainer);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      document.body.removeChild(starsContainer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/" className="logo">
          <span className="logo-text">AH</span>
          <div className="logo-glow"></div>
        </Link>
        <span className="full-name">Ahmidserhan Halon</span>
      </div>
      <button 
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" />
            <span className="link-text">Home</span>
            <span className="link-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <FaUser className="nav-icon" />
            <span className="link-text">About</span>
            <span className="link-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            <FaProjectDiagram className="nav-icon" />
            <span className="link-text">Projects</span>
            <span className="link-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <FaEnvelope className="nav-icon" />
            <span className="link-text">Contact</span>
            <span className="link-underline"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
