import React, { useEffect, useRef, useState } from 'react';

const Team = () => {
  const sectionRef = useRef(null);
  const [imageErrors, setImageErrors] = useState({});

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

    const cards = sectionRef.current?.querySelectorAll('.team-card');
    cards?.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHmvc3m4ONjSQ/profile-displayphoto-scale_200_200/B4EZo7gWYCHcAc-/0/1761934927936?e=1764806400&v=beta&t=mfOPK0G_o-g-EeYOiFepgcZWBIyeQXmTcLPMU4VMxUo',
      initials: 'AA',
      name: 'Amirreza Alasti',
      role: 'Co-Founder',
      email: 'amirrezalasti@gmail.com',
      bio: 'Passionate about music technology and AI, Amirreza brings expertise in developing innovative solutions that bridge the gap between musicians and technology.',
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHvAR8SLwcFlg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670080110582?e=1764806400&v=beta&t=83dP5dnqgJU5I4VXDXf8UVolABsHk6MPidhNinZpp64',
      initials: 'EE',
      name: 'Efe Erdal',
      role: 'Co-Founder',
      email: 'efeerdal1998@gmail.com',
      bio: 'With a deep understanding of music and software engineering, Efe is dedicated to creating tools that empower solo musicians to create fuller, richer performances.',
    },
  ];

  return (
    <>
      <section className="team-hero">
        <div className="container">
          <h1 className="page-title">Meet the Team</h1>
          <p className="page-subtitle">The passionate minds behind SYNTHOSOLO</p>
        </div>
      </section>

      <section className="team-section" ref={sectionRef}>
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  {!imageErrors[index] ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-profile-img"
                      onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                    />
                  ) : (
                    <div className="avatar-placeholder">{member.initials}</div>
                  )}
                </div>
                <h2 className="team-name">{member.name}</h2>
                <p className="team-role">{member.role}</p>
                <a href={`mailto:${member.email}`} className="team-email">{member.email}</a>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

