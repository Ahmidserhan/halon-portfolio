import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Ahmidserhan Halon</h1>
        <p>Frontend Developer | Wannabe Programmer</p>
        <button className="cta-button">View My Work</button>
      </div>
      <div className="hero-image">
        <img src="./src/assets/images/labrador.jpg" alt="Golden Retriever" />
      </div>
    </section>
  );
};

export default Hero;
