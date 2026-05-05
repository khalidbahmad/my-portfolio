// ============================================================
// Hero Component
// ============================================================

export function renderHero(data) {
  const hero = data.hero;
  return `
    <section id="home" class="relative flex items-center justify-center overflow-hidden" style="min-height:100vh;">
      <canvas id="heroCanvas" class="absolute inset-0 z-0"></canvas>
      <div class="container mx-auto px-4 z-10 text-center">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span class="block" style="color:var(--text-primary);">${hero.greeting}</span>
          <span class="gradient-text">${hero.name}</span>
        </h1>
        <h2 class="text-2xl md:text-4xl font-medium mb-8" style="color:var(--text-secondary);">${hero.title}</h2>
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <a href="${hero.ctaPrimary.href}" class="btn btn-primary">${hero.ctaPrimary.text}</a>
          <button id="cvBtn" class="cv-btn" aria-label="View or upload CV">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <span>My CV</span>
          </button>
        </div>
        <div class="absolute bottom-8 left-0 right-0 flex justify-center" style="animation: bounce 2s infinite;">
          <a href="#about" aria-label="Scroll down">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:2rem;height:2rem;color:var(--text-muted);" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- CV Modal -->
    <div id="cvModalOverlay" class="cv-modal-overlay">
      <div class="cv-modal">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold" style="color:var(--text-primary);">My CV</h3>
          <button id="cvModalClose" style="color:var(--text-muted);font-size:1.5rem;cursor:pointer;background:none;border:none;">✕</button>
        </div>
        <div class="flex flex-col gap-3">
          <a id="cvViewLink" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-align:center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            View CV
          </a>
          <label class="btn btn-secondary" style="cursor:pointer;text-align:center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Upload CV
            <input id="cvUploadInput" type="file" accept=".pdf,.doc,.docx" style="display:none;" />
          </label>
          <p id="cvStatus" style="font-size:0.85rem;color:var(--text-muted);text-align:center;margin-top:0.5rem;"></p>
        </div>
      </div>
    </div>
  `;
}

export function initHero(profileData) {
  // CV button logic
  const cvBtn = document.getElementById('cvBtn');
  const overlay = document.getElementById('cvModalOverlay');
  const closeBtn = document.getElementById('cvModalClose');
  const viewLink = document.getElementById('cvViewLink');
  const uploadInput = document.getElementById('cvUploadInput');
  const cvStatus = document.getElementById('cvStatus');

  function openModal() { overlay?.classList.add('active'); }
  function closeModal() { overlay?.classList.remove('active'); }

  cvBtn?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Check for stored CV
  function updateCvLink() {
    const storedCV = localStorage.getItem('portfolio_cv');
    const configUrl = profileData?.cv?.url;

    if (storedCV) {
      viewLink.href = storedCV;
      viewLink.style.display = 'inline-flex';
      cvStatus.textContent = 'CV uploaded ✓';
    } else if (configUrl) {
      viewLink.href = configUrl;
      viewLink.style.display = 'inline-flex';
      cvStatus.textContent = '';
    } else {
      viewLink.style.display = 'none';
      cvStatus.textContent = 'No CV uploaded yet. Upload one below.';
    }
  }
  updateCvLink();

  // Upload
  uploadInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem('portfolio_cv', reader.result);
      updateCvLink();
    };
    reader.readAsDataURL(file);
  });

  // Bounce animation
  if (!document.getElementById('bounce-keyframes')) {
    const style = document.createElement('style');
    style.id = 'bounce-keyframes';
    style.innerHTML = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
    `;
    document.head.appendChild(style);
  }
}
