// ============================================================
// Footer Component
// ============================================================

export default function Footer() {
  return (
    <footer className="footer" style={{ padding: '3rem 0' }}>
      <div className="container mx-auto px-4 text-center">
        <p style={{ color: 'var(--text-secondary)' }}>
          &copy; <span>{new Date().getFullYear()}</span> Khalid. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
