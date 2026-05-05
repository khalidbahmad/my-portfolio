// ============================================================
// About Component
// ============================================================

const ICONS = {
  code: `<svg class="h-6 w-6" style="color:var(--accent-blue);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>`,
  server: `<svg class="h-6 w-6" style="color:var(--accent-blue);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16v6H4zM4 14h16v6H4z"/></svg>`,
  database: `<svg class="h-6 w-6" style="color:var(--accent-blue);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  'pen-tool': `<svg class="h-6 w-6" style="color:var(--accent-blue);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`
};

export function renderAbout(data) {
  const a = data.about;
  const c = data.contact;

  const paras = a.paragraphs.map(p => `<p style="color:var(--text-secondary);margin-bottom:1.5rem;line-height:1.8;">${p}</p>`).join('');

  const specs = a.specialties.map(s => `
    <div class="flex items-start">
      <div style="margin-right:0.75rem;margin-top:0.25rem;">${ICONS[s.icon]||''}</div>
      <div>
        <h4 class="font-bold" style="margin-bottom:0.25rem;color:var(--text-primary);">${s.title}</h4>
        <p style="color:var(--text-secondary);font-size:0.875rem;">${s.description}</p>
      </div>
    </div>`).join('');

  const techs = a.techStack.map(t =>
    `<div class="flex flex-col items-center"><img src="${t.icon}" alt="${t.name}" style="width:3rem;height:3rem;margin-bottom:0.5rem;"/><span style="font-size:0.8rem;color:var(--text-secondary);">${t.name}</span></div>`
  ).join('');

  const gh = c.socialLinks.find(l => l.name === 'GitHub');
  const li = c.socialLinks.find(l => l.name === 'LinkedIn');

  return `
  <section id="about" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">${a.title}</h2>
        <div class="section-divider"></div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1">
          <h3 class="text-2xl font-bold mb-4" style="color:var(--text-primary);">${a.subtitle}</h3>
          ${paras}
          <div class="grid grid-cols-2 gap-6 mb-8">${specs}</div>
          <div class="flex" style="gap:1rem;">
            <a href="${gh?.url||'#'}" target="_blank" class="btn btn-secondary" style="padding:0.5rem 1rem;">
              <svg class="h-5 w-5" style="margin-right:0.5rem;" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2c-3.19.69-3.87-1.54-3.87-1.54-.52-1.31-1.27-1.65-1.27-1.65-1.03-.71.08-.7.08-.7 1.13.08 1.73 1.17 1.73 1.17 1.02 1.76 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.17-3.11-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.19a10.84 10.84 0 015.74 0c2.19-1.5 3.15-1.19 3.15-1.19.62 1.57.23 2.73.11 3.02.73.81 1.17 1.85 1.17 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.03.77 2.08v3.08c0 .3.21.65.79.54A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              GitHub
            </a>
            <a href="${li?.url||'#'}" target="_blank" class="btn btn-secondary" style="padding:0.5rem 1rem;">
              <svg class="h-5 w-5" style="margin-right:0.5rem;" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98 1.98-.88 1.98-1.98S6.08 3.5 4.98 3.5zM3.5 8h3v12h-3V8zm7 0h2.88v1.71h.04c.4-.76 1.38-1.55 2.85-1.55 3.05 0 3.61 2.01 3.61 4.63V20h-3v-5.36c0-1.28-.02-2.94-1.79-2.94-1.8 0-2.07 1.41-2.07 2.84V20h-3V8z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <div class="relative">
            <div class="absolute -inset-4 rounded-xl" style="background:var(--gradient-accent);filter:blur(20px);opacity:0.2;"></div>
            <div class="card relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1596003906949-67221c37965c?auto=format&fit=crop&w=800&q=80" alt="Workspace" style="width:100%;height:auto;object-fit:cover;"/>
              <div style="padding:1.5rem;">
                <h3 class="text-xl font-bold" style="margin-bottom:1rem;color:var(--text-primary);">My Tech Stack</h3>
                <div class="grid grid-cols-4 gap-4">${techs}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
