// ============================================================
// Projects Component — with filtering, slideshow, and CanvasImage protection
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react';
import CanvasImage from '../utils/CanvasImage';
import { resolveImage } from '../utils/imageMap';

const FALLBACK = 'https://picsum.photos/1200/800?random=42';

function ProjectCard({ project }) {
  const images = Array.isArray(project.src)
    ? project.src.filter(Boolean)
    : project.src
      ? [project.src]
      : [];

  const isSlideshow = images.length >= 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const hasToken = sessionStorage.getItem('access_token');

  // Auto-slideshow
  useEffect(() => {
    if (!isSlideshow) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2800);
    return () => clearInterval(timerRef.current);
  }, [isSlideshow, images.length]);

  const resolvedImages = images.map((src) => resolveImage(src));

  return (
    <div className="card overflow-hidden" style={{ cursor: 'default' }}>
      {/* Image area */}
      <div
        className="project-img-wrap"
        style={{
          position: 'relative',
          height: '13rem',
          overflow: 'hidden',
          background: '#111',
        }}
      >
        {/* Hackathon badge */}
        {project.type === 'hackathon' && project.event && (
          <div
            className="hackathon-badge"
            style={{
              position: 'absolute',
              top: '0.75rem',
              left: '0.75rem',
              zIndex: 3,
            }}
          >
            {project.event}
          </div>
        )}

        {/* Slides */}
        {hasToken && resolvedImages.length > 0 ? (
          resolvedImages.map((src, i) => (
            <CanvasImage
              key={i}
              src={src}
              alt={`${project.title} ${i + 1}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: i === currentSlide ? 1 : 0,
                transition: 'opacity 0.7s ease',
              }}
            />
          ))
        ) : (
          <CanvasImage
            src={FALLBACK}
            alt={project.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}

        {/* Dots */}
        {isSlideshow && (
          <div className="slideshow-dots">
            {images.map((_, i) => (
              <span
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background:
                    i === currentSlide ? '#fff' : 'rgba(255,255,255,0.45)',
                  transition: 'background 0.3s',
                  display: 'block',
                }}
              />
            ))}
          </div>
        )}

        {/* Hover overlay */}
        <a
          href={project.detailUrl || project.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="project-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(3px)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            textDecoration: 'none',
          }}
        >
          <svg
            width="36"
            height="36"
            fill="none"
            stroke="#fff"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span
            style={{
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '1.5px solid rgba(255,255,255,0.7)',
              padding: '0.35rem 1rem',
              borderRadius: '999px',
            }}
          >
            View More
          </span>
        </a>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.5rem' }}>
        <h3
          className="text-lg font-semibold"
          style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginBottom: '1rem',
            lineHeight: 1.6,
          }}
        >
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2" style={{ marginBottom: '1rem' }}>
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">
              &lt;/&gt; {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium"
          style={{
            fontSize: '0.875rem',
            color: 'var(--accent-blue)',
            transition: 'color 0.25s',
          }}
        >
          {project.linkLabel}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects({ projectsData }) {
  const projects = projectsData.projects;
  const [activeCategory, setActiveCategory] = useState('project');
  const [activeTech, setActiveTech] = useState('All');

  const getByCategory = useCallback(() => {
    return projects.filter((p) => p.type === activeCategory);
  }, [projects, activeCategory]);

  const getTechsForCategory = useCallback(() => {
    const set = new Set();
    getByCategory().forEach((p) => p.tech.forEach((t) => set.add(t)));
    return [...set];
  }, [getByCategory]);

  const filteredProjects = (() => {
    let list = getByCategory();
    if (activeCategory === 'project' && activeTech !== 'All') {
      list = list.filter((p) => p.tech.includes(activeTech));
    }
    return list;
  })();

  const techOptions = ['All', ...getTechsForCategory()];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Explore my recent work and personal projects. Each project showcases
            different skills and technologies.
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            ['project', 'Projects'],
            ['hackathon', 'Hackathons'],
          ].map(([val, label]) => (
            <button
              key={val}
              className={`filter-btn${val === activeCategory ? ' active' : ''}`}
              onClick={() => {
                setActiveCategory(val);
                setActiveTech('All');
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tech filter buttons */}
        {activeCategory !== 'hackathon' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techOptions.map((t) => (
              <button
                key={t}
                className={`filter-btn${t === activeTech ? ' active' : ''}`}
                onClick={() => setActiveTech(t)}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={`${p.title}-${i}`} project={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={projectsData.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2c-3.19.69-3.87-1.54-3.87-1.54-.52-1.31-1.27-1.65-1.27-1.65-1.03-.71.08-.7.08-.7 1.13.08 1.73 1.17 1.73 1.17 1.02 1.76 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.17-3.11-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.19a10.84 10.84 0 015.74 0c2.19-1.5 3.15-1.19 3.15-1.19.62 1.57.23 2.73.11 3.02.73.81 1.17 1.85 1.17 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.03.77 2.08v3.08c0 .3.21.65.79.54A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
              />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
