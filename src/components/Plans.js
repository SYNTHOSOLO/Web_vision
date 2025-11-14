import React, { useEffect, useRef } from 'react';

const Plans = () => {
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

    const items = sectionRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      title: 'Phase 1: Core Technology',
      description: 'Developing the AI engine that recognizes musical patterns and generates complementary accompaniments in real-time.',
    },
    {
      title: 'Phase 2: Multi-Instrument Support',
      description: 'Expanding support for various instruments and musical styles, ensuring SYNTHOSOLO works for every musician.',
    },
    {
      title: 'Phase 3: Advanced Features',
      description: 'Adding customizable accompaniment styles, recording capabilities, and collaborative features for musicians.',
    },
    {
      title: 'Phase 4: Launch & Growth',
      description: 'Releasing SYNTHOSOLO to musicians worldwide and building a community of solo artists creating together.',
    },
  ];

  return (
    <section id="plans" className="plans" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Our Roadmap</h2>
        <div className="timeline">
          {phases.map((phase, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

