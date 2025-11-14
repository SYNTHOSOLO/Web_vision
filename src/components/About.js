import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.about-card');
    cards?.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🎸',
      title: 'Real-Time Recognition',
      description: 'Our AI listens to your instrument in real-time, understanding the notes, rhythm, and style you\'re playing.',
    },
    {
      icon: '🎹',
      title: 'Intelligent Accompaniment',
      description: 'Automatically generates bass lines, drum patterns, and additional instruments that complement your performance.',
    },
    {
      icon: '🎵',
      title: 'Seamless Integration',
      description: 'Works with any instrument—guitar, piano, violin, or vocals. Just play, and SYNTHOSOLO does the rest.',
    },
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">What We're Building</h2>
        <div className="about-grid">
          {features.map((feature, index) => (
            <div key={index} className="about-card">
              <div className="card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

