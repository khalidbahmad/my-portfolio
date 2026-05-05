// ============================================================
// Skills Component
// ============================================================

export function renderSkills() {
  return `
  <section id="skills" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">Skills &amp; Expertise</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">My technical skills and proficiency levels across different areas of web development.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div id="skills-frontend">
          <h3 class="text-xl font-semibold mb-6 gradient-text">Frontend</h3>
        </div>
        <div id="skills-backend">
          <h3 class="text-xl font-semibold mb-6" style="background:linear-gradient(135deg,#22c55e,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Backend</h3>
        </div>
        <div id="skills-devops">
          <h3 class="text-xl font-semibold mb-6" style="background:linear-gradient(135deg,#facc15,#ef4444);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">DevOps</h3>
        </div>
      </div>
      <div style="margin-top:5rem;">
        <h3 class="text-xl font-bold mb-8 text-center" style="color:var(--text-primary);">Technologies I Work With</h3>
        <div class="section-divider"></div>
        <div class="relative overflow-hidden">
          <div id="techs-grid" class="flex gap-10"></div>
        </div>
      </div>
    </div>
  </section>`;
}

export function initSkills(skillsData) {
  const containers = {
    frontend: document.getElementById('skills-frontend'),
    backend: document.getElementById('skills-backend'),
    devops: document.getElementById('skills-devops')
  };

  function renderBars(list, container) {
    if (!container || !list) return;
    list.forEach(skill => {
      const div = document.createElement('div');
      div.style.marginBottom = '1.5rem';
      div.innerHTML = `
        <div class="flex justify-between items-center" style="margin-bottom:0.25rem;">
          <h4 class="font-bold" style="color:var(--text-primary);font-size:0.95rem;">${skill.name}</h4>
          <span style="font-size:0.85rem;color:var(--text-secondary);">${skill.level}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:0%;"></div>
        </div>`;
      container.appendChild(div);

      // Animate bar on scroll
      setTimeout(() => {
        div.querySelector('.progress-fill').style.width = skill.level + '%';
      }, 300);
    });
  }

  renderBars(skillsData.frontend, containers.frontend);
  renderBars(skillsData.backend, containers.backend);
  renderBars(skillsData.devops, containers.devops);
}
