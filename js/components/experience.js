// ============================================================
// Experience Component
// ============================================================

export function renderExperience() {
  return `
  <section id="experience" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">Experience &amp; Education</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">My professional journey and educational background in the tech industry.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div class="flex items-center mb-8">
            <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(59,130,246,0.15);display:flex;align-items:center;justify-content:center;margin-right:1rem;">
              <svg style="color:var(--accent-blue);width:1.5rem;height:1.5rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            </div>
            <h3 class="text-2xl font-bold" style="color:var(--text-primary);">Work Experience</h3>
          </div>
          <div id="work-timeline" class="relative pl-8 timeline-line" style="padding-left:2rem;"></div>
        </div>
        <div>
          <div class="flex items-center mb-8">
            <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(139,92,246,0.15);display:flex;align-items:center;justify-content:center;margin-right:1rem;">
              <svg style="color:var(--accent-purple);width:1.5rem;height:1.5rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h3 class="text-2xl font-bold" style="color:var(--text-primary);">Education</h3>
          </div>
          <div id="education-timeline" class="relative pl-8 timeline-line" style="padding-left:2rem;"></div>

          <div class="flex items-center mb-8" style="margin-top:3rem;">
            <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(139,92,246,0.15);display:flex;align-items:center;justify-content:center;margin-right:1rem;">
              <svg style="color:var(--accent-purple);width:1.5rem;height:1.5rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            </div>
            <h3 class="text-2xl font-bold" style="color:var(--text-primary);">Licences &amp; Certifications</h3>
          </div>
          <div id="certifications-timeline" class="relative pl-8 timeline-line" style="padding-left:2rem;"></div>
        </div>
      </div>
    </div>
  </section>`;
}

export function initExperience(expData) {
  const workTL = document.getElementById('work-timeline');
  const eduTL = document.getElementById('education-timeline');
  const certTL = document.getElementById('certifications-timeline');

  function createCard({ date, title, subtitle, info, index, color }) {
    const div = document.createElement('div');
    div.className = 'card relative';
    div.style.cssText = 'padding:1.5rem;margin-bottom:2rem;margin-left:1.25rem;';
    const c = color || 'blue';
    const dotColor = c === 'purple' ? 'var(--accent-purple)' : 'var(--accent-blue)';
    const subColor = c === 'purple' ? 'var(--accent-purple)' : 'var(--accent-blue)';

    div.innerHTML = `
      <div class="timeline-dot ${c === 'purple' ? 'purple' : ''}" style="border-color:${dotColor};color:${dotColor};">${index + 1}</div>
      <div style="padding-left:1rem;">
        <div class="flex items-center gap-2" style="margin-bottom:0.5rem;">
          <svg style="width:1rem;height:1rem;color:var(--text-muted);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z"/></svg>
          <span style="font-size:0.85rem;color:var(--text-muted);">${date}</span>
        </div>
        <h4 class="text-lg font-semibold" style="margin-bottom:0.25rem;color:var(--text-primary);">${title}</h4>
        <p style="color:${subColor};font-weight:500;margin-bottom:0.5rem;">${subtitle}</p>
        <p style="color:var(--text-secondary);font-size:0.875rem;line-height:1.6;">${info}</p>
      </div>`;
    return div;
  }

  (expData.workExperience || []).forEach((item, i) => {
    workTL?.appendChild(createCard({ date: item.date, title: item.role, subtitle: item.company, info: item.info, index: i, color: 'blue' }));
  });

  (expData.education || []).forEach((item, i) => {
    eduTL?.appendChild(createCard({ date: item.date, title: item.degree, subtitle: item.school, info: item.info, index: i, color: 'purple' }));
  });

  (expData.certifications || []).forEach((item, i) => {
    certTL?.appendChild(createCard({ date: item.date, title: item.degree, subtitle: item.school, info: item.info, index: i, color: 'purple' }));
  });
}
