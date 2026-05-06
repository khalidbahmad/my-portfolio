// ============================================================
// 404 Not Found Page
// ============================================================

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-4"
      style={{ minHeight: '80vh' }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <h1
          className="font-bold gradient-text"
          style={{ fontSize: '8rem', lineHeight: 1 }}
        >
          404
        </h1>
        <h2
          className="text-3xl font-bold"
          style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}
        >
          Page Not Found
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            maxWidth: '28rem',
            margin: '0 auto 2rem',
            lineHeight: 1.7,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link to="/" className="btn btn-primary">
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
