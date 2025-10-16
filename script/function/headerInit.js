export function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  // --- Effet de scroll ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add(
        'bg-white/80',
        'dark:bg-gray-900/80',
        'backdrop-blur-md',
        'py-3',
        'shadow-md'
      );
      header.classList.remove('bg-transparent', 'py-5');
    } else {
      header.classList.add('bg-transparent', 'py-5');
      header.classList.remove(
        'bg-white/80',
        'dark:bg-gray-900/80',
        'backdrop-blur-md',
        'py-3',
        'shadow-md'
      );
    }
  });

  // --- Sélecteurs du thème ---
  const themeButtons = [
    document.getElementById('themeToggleDesktop'),
    document.getElementById('themeToggleMobile'),
  ];
  const themeIcons = [
    document.getElementById('themeIconDesktop'),
    document.getElementById('themeIconMobile'),
  ];
  const app = document.getElementById('app');

  // --- Dark Theme ---
  function setDarkTheme() {
    document.documentElement.classList.add('dark');

    app.classList.add('bg-background-dark', 'text-text-dark-primary');
    app.classList.remove('bg-background-light', 'text-text-light-primary');

    // Icônes
    themeIcons.forEach(icon => (icon.textContent = '☀️'));

    // Texte gris
    document.querySelectorAll('.text-gray-600').forEach(el => {
      el.classList.remove('text-gray-600');
      el.classList.add('text-gray-300');
    });

    // Boutons / backgrounds
    document.querySelectorAll('.bg-gray-200').forEach(el => {
      el.classList.remove('bg-gray-200', 'hover:bg-gray-300');
      el.classList.add('bg-gray-800', 'text-gray-300');
    });
   

    // input form
    document.querySelectorAll('.themeF').forEach(el => {
      el.classList.add('bg-gray-700', 'text-gray-300');
    });

    localStorage.setItem('theme', 'dark');
  }

  // --- Light Theme ---
  function setLightTheme() {
    document.documentElement.classList.remove('dark');

    app.classList.add('bg-background-light', 'text-text-light-primary');
    app.classList.remove('bg-background-dark', 'text-text-dark-primary');

    // Icônes
    themeIcons.forEach(icon => (icon.textContent = '🌙'));

    // Texte gris
    document.querySelectorAll('.text-gray-600, .text-gray-300').forEach(el => {
      el.classList.remove('text-gray-300');
      el.classList.add('text-gray-600');
    });

    // Boutons / backgrounds
    document.querySelectorAll('.bg-gray-200, .bg-gray-800').forEach(el => {
      el.classList.remove('bg-gray-800', 'text-gray-300');
      el.classList.add('bg-gray-200', 'hover:bg-gray-300');
    });

    // input form
    document.querySelectorAll('.themeF').forEach(el => {
      el.classList.remove('bg-gray-700', 'text-gray-300');
    });

    localStorage.setItem('theme', 'light');
  }

  // --- Toggle ---
  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }

  // --- Initialisation ---
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  // --- Écouteurs ---
  themeButtons.forEach(btn => btn?.addEventListener('click', toggleTheme));

  // --- Menu mobile ---
  const menuToggle = document.getElementById('menuToggle');
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle?.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuIcon.textContent = isHidden ? '☰' : '✖';
  });
}
