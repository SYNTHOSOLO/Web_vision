import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Solo Performance,<br />Elevated by AI
          </h1>
          <p className="hero-subtitle">
            SYNTHOSOLO understands what you play and accompanies you with bass, drums, and more—transforming solo performances into full-band experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('about')}>
              Learn More
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('plans')}>
              Our Vision
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="music-visualization">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

