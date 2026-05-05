// ============================================================
// Header Component
// ============================================================

export function renderHeader() {
  return `
  <header id="header" class="fixed top-0 w-full z-50 transition-all duration-300 py-5" style="background:transparent;">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <a href="#home" class="text-2xl font-bold gradient-text">
        My<span>Portfolio</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center" style="gap:1.75rem;">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#contact" class="nav-link">Contact</a>
        <button id="themeToggleDesktop" class="theme-toggle" aria-label="Toggle theme">🌙</button>
      </nav>

      <!-- Mobile Controls -->
      <div class="flex items-center md:hidden" style="gap:0.5rem;">
        <button id="themeToggleMobile" class="theme-toggle" aria-label="Toggle theme">🌙</button>
        <button id="menuToggle" class="menu-toggle" aria-label="Toggle menu">
          <span id="menuIcon">☰</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav id="mobileMenu" class="hidden md:hidden mobile-menu py-4 px-4">
      <div class="flex flex-col" style="gap:0.75rem;">
        <a href="#home" class="nav-mobile">Home</a>
        <a href="#about" class="nav-mobile">About</a>
        <a href="#projects" class="nav-mobile">Projects</a>
        <a href="#skills" class="nav-mobile">Skills</a>
        <a href="#experience" class="nav-mobile">Experience</a>
        <a href="#contact" class="nav-mobile">Contact</a>
      </div>
    </nav>
  </header>
  `;
}

export function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
      header.style.paddingTop = '0.75rem';
      header.style.paddingBottom = '0.75rem';
    } else {
      header.classList.remove('header-scrolled');
      header.style.paddingTop = '1.25rem';
      header.style.paddingBottom = '1.25rem';
      header.style.background = 'transparent';
    }
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle?.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuIcon.textContent = isHidden ? '☰' : '✖';
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.textContent = '☰';
    });
  });
}
