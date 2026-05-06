// ============================================================
// Hero Component
// ============================================================

import { useState, useRef } from 'react';
import { useHeroCanvas } from '../utils/heroCanvas';

export default function Hero({ profile }) {
  const hero = profile.hero;
  const cv = profile.cv;
  const canvasRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize hero canvas particle animation
  useHeroCanvas(canvasRef);

  const hasCv = cv && cv.url;

  return (
    <>
      <section
        id="home"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        <canvas
          ref={canvasRef}
          id="heroCanvas"
          className="absolute inset-0 z-0"
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block" style={{ color: 'var(--text-primary)' }}>
              {hero.greeting}
            </span>
            <span className="gradient-text">{hero.name}</span>
          </h1>
          <h2
            className="text-2xl md:text-4xl font-medium mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            {hero.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href={hero.ctaPrimary.href} className="btn btn-primary">
              {hero.ctaPrimary.text}
            </a>
            <button
              className="cv-btn"
              aria-label="View or upload CV"
              onClick={() => setModalOpen(true)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>My CV</span>
            </button>
          </div>
          <div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            style={{ animation: 'bounce 2s infinite' }}
          >
            <a href="#about" aria-label="Scroll down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '2rem', height: '2rem', color: 'var(--text-muted)' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <div
        className={`cv-modal-overlay${modalOpen ? ' active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setModalOpen(false);
        }}
      >
        <div className="cv-modal">
          <div className="flex justify-between items-center mb-6">
            <h3
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              My CV
            </h3>
            <button
              onClick={() => setModalOpen(false)}
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
              }}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {hasCv ? (
              <>
                <a
                  href={cv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ textAlign: 'center' }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View CV
                </a>
                <a
                  href={cv.url}
                  download
                  className="btn btn-secondary"
                  style={{ textAlign: 'center' }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
              </>
            ) : (
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                }}
              >
                No CV available.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
