// ============================================================
// Experience Component
// ============================================================

function TimelineCard({ date, title, subtitle, info, index, color = 'blue' }) {
  const dotColor = color === 'purple' ? 'var(--accent-purple)' : 'var(--accent-blue)';
  const subColor = color === 'purple' ? 'var(--accent-purple)' : 'var(--accent-blue)';

  return (
    <div className="card relative" style={{ padding: '1.5rem', marginBottom: '2rem', marginLeft: '1.25rem' }}>
      <div className={`timeline-dot${color === 'purple' ? ' purple' : ''}`} style={{ borderColor: dotColor, color: dotColor }}>
        {index + 1}
      </div>
      <div style={{ paddingLeft: '1rem' }}>
        <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
          <svg style={{ width: '1rem', height: '1rem', color: 'var(--text-muted)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z" />
          </svg>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{date}</span>
        </div>
        <h4 className="text-lg font-semibold" style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{title}</h4>
        <p style={{ color: subColor, fontWeight: 500, marginBottom: '0.5rem' }}>{subtitle}</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{info}</p>
      </div>
    </div>
  );
}

function SectionHeader({ icon, title, bgColor }) {
  return (
    <div className="flex items-center mb-8">
      <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
    </div>
  );
}

export default function Experience({ experience }) {
  const workIcon = (
    <svg style={{ color: 'var(--accent-blue)', width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
  const eduIcon = (
    <svg style={{ color: 'var(--accent-purple)', width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
  const certIcon = (
    <svg style={{ color: 'var(--accent-purple)', width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience &amp; Education</h2>
          <div className="section-divider" />
          <p className="section-subtitle">My professional journey and educational background in the tech industry.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader icon={workIcon} title="Work Experience" bgColor="rgba(59,130,246,0.15)" />
            <div className="relative timeline-line" style={{ paddingLeft: '2rem' }}>
              {(experience.workExperience || []).map((item, i) => (
                <TimelineCard key={i} date={item.date} title={item.role} subtitle={item.company} info={item.info} index={i} color="blue" />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader icon={eduIcon} title="Education" bgColor="rgba(139,92,246,0.15)" />
            <div className="relative timeline-line" style={{ paddingLeft: '2rem' }}>
              {(experience.education || []).map((item, i) => (
                <TimelineCard key={i} date={item.date} title={item.degree} subtitle={item.school} info={item.info} index={i} color="purple" />
              ))}
            </div>
            <div style={{ marginTop: '3rem' }}>
              <SectionHeader icon={certIcon} title="Licences & Certifications" bgColor="rgba(139,92,246,0.15)" />
            </div>
            <div className="relative timeline-line" style={{ paddingLeft: '2rem' }}>
              {(experience.certifications || []).map((item, i) => (
                <TimelineCard key={i} date={item.date} title={item.degree} subtitle={item.school} info={item.info} index={i} color="purple" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
