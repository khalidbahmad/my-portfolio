// ============================================================
// Skills Component
// ============================================================

import { useEffect, useRef } from 'react';

function SkillBar({ name, level }) {
  const barRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = `${level}%`;
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div
        className="flex justify-between items-center"
        style={{ marginBottom: '0.25rem' }}
      >
        <h4
          className="font-bold"
          style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}
        >
          {name}
        </h4>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          {level}%
        </span>
      </div>
      <div className="progress-track">
        <div ref={barRef} className="progress-fill" style={{ width: '0%' }} />
      </div>
    </div>
  );
}

function TechCarousel({ technologies }) {
  // Duplicate list for seamless loop
  const fullList = [...technologies, ...technologies];

  return (
    <div style={{ marginTop: '5rem' }}>
      <h3
        className="text-xl font-bold mb-8 text-center"
        style={{ color: 'var(--text-primary)' }}
      >
        Technologies I Work With
      </h3>
      <div className="section-divider" />
      <div className="techs-grid-wrapper">
        <div className="techs-grid">
          {fullList.map((tool, i) => (
            <div key={i} className="tech-carousel-item">
              <img
                src={tool.icon}
                alt={tool.name}
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  objectFit: 'contain',
                }}
              />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            My technical skills and proficiency levels across different areas of
            web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text">
              Frontend
            </h3>
            {skills.frontend?.map((s, i) => (
              <SkillBar key={i} name={s.name} level={s.level} />
            ))}
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-6"
              style={{
                background: 'linear-gradient(135deg,#22c55e,#3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Backend
            </h3>
            {skills.backend?.map((s, i) => (
              <SkillBar key={i} name={s.name} level={s.level} />
            ))}
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-6"
              style={{
                background: 'linear-gradient(135deg,#facc15,#ef4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DevOps
            </h3>
            {skills.devops?.map((s, i) => (
              <SkillBar key={i} name={s.name} level={s.level} />
            ))}
          </div>
        </div>

        {skills.technologies && (
          <TechCarousel technologies={skills.technologies} />
        )}
      </div>
    </section>
  );
}
