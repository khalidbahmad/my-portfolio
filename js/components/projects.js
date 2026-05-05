export function renderProjects() {
  return `
  <section id="projects" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">My Projects</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Explore my recent work and personal projects. Each project showcases different skills and technologies.
        </p>
      </div>
      <div id="category-buttons" class="flex flex-wrap justify-center gap-3 mb-4"></div>
      <div id="filter-buttons" class="flex flex-wrap justify-center gap-3 mb-12"></div>
      <div id="projects-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"></div>
      <div class="text-center mt-12">
        <a id="github-link" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2c-3.19.69-3.87-1.54-3.87-1.54-.52-1.31-1.27-1.65-1.27-1.65-1.03-.71.08-.7.08-.7 1.13.08 1.73 1.17 1.73 1.17 1.02 1.76 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.17-3.11-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.19a10.84 10.84 0 015.74 0c2.19-1.5 3.15-1.19 3.15-1.19.62 1.57.23 2.73.11 3.02.73.81 1.17 1.85 1.17 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.03.77 2.08v3.08c0 .3.21.65.79.54A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
          View More on GitHub
        </a>
      </div>
    </div>
  </section>`;
}

// ── Slideshow registry: track intervals per card ──────────
const slideshowTimers = new Map();

function clearAllSlideshows() {
  slideshowTimers.forEach(id => clearInterval(id));
  slideshowTimers.clear();
}

// ── Build the image area (single img or slideshow) ────────
function buildImageArea(p, fallback) {
  const images = Array.isArray(p.src)
    ? p.src.filter(Boolean)
    : (p.src ? [p.src] : []);

  const isSlideshow = images.length >= 2;
  const cardId = `card-${p.title.replace(/\s+/g, '-').toLowerCase()}`;

  const badge = p.type === 'hackathon' && p.event
    ? `<div class="hackathon-badge" style="position:absolute;top:0.75rem;left:0.75rem;z-index:3;">${p.event}</div>`
    : '';

  // Dot indicators (only for slideshows)
  const dots = isSlideshow
    ? `<div class="slideshow-dots" style="
        position:absolute;bottom:0.6rem;left:50%;transform:translateX(-50%);
        display:flex;gap:5px;z-index:3;">
        ${images.map((_, i) => `
          <span data-dot="${i}" style="
            width:6px;height:6px;border-radius:50%;
            background:${i === 0 ? '#fff' : 'rgba(255,255,255,0.45)'};
            transition:background 0.3s;display:block;">
          </span>`).join('')}
      </div>`
    : '';

  // Slides
  const slides = images.length
    ? images.map((src, i) => `
        <img src="${src}" alt="${p.title} ${i + 1}"
          data-slide="${i}"
          onerror="this.onerror=null;this.src='${fallback}';"
          style="
            position:absolute;inset:0;width:100%;height:100%;
            object-fit:cover;
            opacity:${i === 0 ? 1 : 0};
            transition:opacity 0.7s ease;
          " />`).join('')
    : `<img src="${fallback}" alt="${p.title}"
        style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />`;

  // Hover overlay with "Voir plus"
  const detailHref = p.detailUrl || `./project.html?id=${encodeURIComponent(p.title)}`;
  const overlay = `
    <a href="${detailHref}" class="project-overlay" style="
      position:absolute;inset:0;z-index:4;
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;
      background:rgba(0,0,0,0.55);backdrop-filter:blur(3px);
      opacity:0;transition:opacity 0.3s ease;text-decoration:none;">
      <svg width="36" height="36" fill="none" stroke="#fff" stroke-width="1.8" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7
             -1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
      <span style="
        color:#fff;font-size:0.85rem;font-weight:600;letter-spacing:0.08em;
        text-transform:uppercase;border:1.5px solid rgba(255,255,255,0.7);
        padding:0.35rem 1rem;border-radius:999px;">
        View More
      </span>
    </a>`;

  return { cardId, isSlideshow, images, html: `
    <div id="${cardId}" class="project-img-wrap" style="
      position:relative;height:13rem;overflow:hidden;background:#111;">
      ${badge}
      ${slides}
      ${dots}
      ${overlay}

    </div>` };
}

// ── Start auto-slideshow for a card ──────────────────────
function startSlideshow(cardId, images) {
  const wrap = document.getElementById(cardId);
  if (!wrap) return;

  let current = 0;

  const timer = setInterval(() => {
    const prev = current;
    current = (current + 1) % images.length;

    // Fade slides
    wrap.querySelector(`[data-slide="${prev}"]`).style.opacity = '0';
    wrap.querySelector(`[data-slide="${current}"]`).style.opacity = '1';

    // Update dots
    wrap.querySelectorAll('[data-dot]').forEach(dot => {
      dot.style.background = Number(dot.dataset.dot) === current
        ? '#fff'
        : 'rgba(255,255,255,0.45)';
    });
  }, 2800);

  slideshowTimers.set(cardId, timer);
}

// ── Hover show/hide overlay ───────────────────────────────
function attachOverlayHover(cardEl) {
  const overlay = cardEl.querySelector('.project-overlay');
  if (!overlay) return;
  cardEl.addEventListener('mouseenter', () => overlay.style.opacity = '1');
  cardEl.addEventListener('mouseleave', () => overlay.style.opacity = '0');
}

export function initProjects(projectsData) {
  const grid          = document.getElementById('projects-grid');
  const catContainer  = document.getElementById('category-buttons');
  const techContainer = document.getElementById('filter-buttons');
  const ghLink        = document.getElementById('github-link');
  if (!grid || !catContainer || !techContainer) return;

  const projects = projectsData.projects;
  if (ghLink) ghLink.href = projectsData.githubUrl || '#';

  const fallback = 'https://picsum.photos/1200/800?random=42';

  let activeCategory = 'project';
  let activeTech     = 'All';

  function getByCategory() {
    return projects.filter(p => p.type === activeCategory);
  }

  function getTechsForCategory() {
    const set = new Set();
    getByCategory().forEach(p => p.tech.forEach(t => set.add(t)));
    return [...set];
  }

  function buildCategoryButtons() {
    catContainer.innerHTML = '';
    [['project', 'Projects'], ['hackathon', 'Hackathons']].forEach(([val, label]) => {
      const btn = document.createElement('button');
      btn.className = `filter-btn${val === activeCategory ? ' active' : ''}`;
      btn.textContent = label;
      btn.dataset.category = val;
      catContainer.appendChild(btn);
    });
  }

  function buildTechButtons() {
    techContainer.innerHTML = '';
    if (activeCategory === 'hackathon') {
      techContainer.style.display = 'none';
      return;
    }
    techContainer.style.display = '';
    ['All', ...getTechsForCategory()].forEach(t => {
      const btn = document.createElement('button');
      btn.className = `filter-btn${t === activeTech ? ' active' : ''}`;
      btn.textContent = t;
      btn.dataset.tech = t;
      techContainer.appendChild(btn);
    });
  }

  function render() {
    // Stop all running slideshows before clearing DOM
    clearAllSlideshows();
    grid.innerHTML = '';

    let list = getByCategory();
    if (activeCategory === 'project' && activeTech !== 'All') {
      list = list.filter(p => p.tech.includes(activeTech));
    }

    list.forEach(p => {
      const { cardId, isSlideshow, images, html: imgHtml } = buildImageArea(p, fallback);

      const div = document.createElement('div');
      div.className = 'card overflow-hidden';
      div.style.cssText = 'cursor:default;';

      div.innerHTML = `
        ${imgHtml}
        <div style="padding:1.5rem;">
          <h3 class="text-lg font-semibold"
            style="margin-bottom:0.5rem;color:var(--text-primary);">${p.title}</h3>
          <p style="color:var(--text-secondary);font-size:0.875rem;
            margin-bottom:1rem;line-height:1.6;">${p.desc}</p>
          <div class="flex flex-wrap gap-2" style="margin-bottom:1rem;">
            ${p.tech.map(t => `<span class="tech-badge">&lt;/&gt; ${t}</span>`).join('')}
          </div>
          <a href="${p.link}" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 font-medium"
            style="font-size:0.875rem;color:var(--accent-blue);transition:color 0.25s;">
            ${p.linkLabel}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="${p.link}" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 font-medium"
            style="font-size:0.875rem;color:var(--accent-blue);transition:color 0.25s;">
            View More
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>`;

      grid.appendChild(div);

      // Start slideshow after element is in DOM
      if (isSlideshow) startSlideshow(cardId, images);

      // Attach hover overlay
      attachOverlayHover(div);
    });
  }

  function refresh() {
    buildCategoryButtons();
    buildTechButtons();
    render();
  }

  catContainer.addEventListener('click', e => {
    const btn = e.target.closest('button[data-category]');
    if (!btn) return;
    activeCategory = btn.dataset.category;
    activeTech = 'All';
    refresh();
  });

  techContainer.addEventListener('click', e => {
    const btn = e.target.closest('button[data-tech]');
    if (!btn) return;
    activeTech = btn.dataset.tech;
    buildTechButtons();
    render();
  });

  refresh();
}