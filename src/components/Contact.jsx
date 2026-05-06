// ============================================================
// Contact Component
// ============================================================

import { GitHub, Linkedin, Twitter, Instagram } from 'react-feather';

const ICON_MAP = {
  github: GitHub,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Contact({ profile }) {
  const c = profile.contact;

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">{c.title}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{c.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="card" style={{ padding: '2rem' }}>
            <h3 className="text-2xl font-bold" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Contact Information
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Email */}
              <div className="flex items-start">
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(59,130,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', flexShrink: 0 }}>
                  <svg style={{ color: 'var(--accent-blue)', width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold" style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Email</h4>
                  <a href={`mailto:${c.email}`} style={{ color: 'var(--text-secondary)' }}>{c.email}</a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start">
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', flexShrink: 0 }}>
                  <svg style={{ color: 'var(--accent-purple)', width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold" style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Phone</h4>
                  <a href={`tel:${c.phone.replace(/\s/g, '')}`} style={{ color: 'var(--text-secondary)' }}>{c.phone}</a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start">
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', flexShrink: 0 }}>
                  <svg style={{ color: 'var(--accent-green)', width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold" style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{c.location}</p>
                </div>
              </div>
            </div>
            {/* Social */}
            <div style={{ marginTop: '2rem' }}>
              <h3 className="text-xl font-bold" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Follow Me</h3>
              <div className="flex" style={{ gap: '0.75rem' }}>
                {c.socialLinks.map((s, i) => {
                  const IconComp = ICON_MAP[s.icon] || ICON_MAP[s.name.toLowerCase()];
                  return (
                    <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className={`social-icon ${s.name.toLowerCase()}`} aria-label={s.name}>
                      {IconComp ? <IconComp size={18} /> : <span>{s.name[0]}</span>}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="card" style={{ padding: '2rem' }}>
            <h3 className="text-2xl font-bold" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Send Me a Message</h3>
            <form id="contactForm">
              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required className="form-input" />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Your Email</label>
                <input type="email" id="email" name="email" placeholder="youremail@example.com" required className="form-input" />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required className="form-input" />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Hello, I'd like to discuss a project..." required className="form-input" style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
