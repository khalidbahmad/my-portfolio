// ============================================================
// Theme Utility — Dark / Light mode with CSS custom properties
// ============================================================

export function initTheme() {
  const html = document.documentElement;
  const themeButtons = [
    document.getElementById('themeToggleDesktop'),
    document.getElementById('themeToggleMobile')
  ];

  function setDark() {
    html.classList.add('dark');
    themeButtons.forEach(btn => {
      if (btn) btn.innerHTML = '☀️';
    });
    localStorage.setItem('theme', 'dark');
  }

  function setLight() {
    html.classList.remove('dark');
    themeButtons.forEach(btn => {
      if (btn) btn.innerHTML = '🌙';
    });
    localStorage.setItem('theme', 'light');
  }

  function toggle() {
    if (html.classList.contains('dark')) {
      setLight();
    } else {
      setDark();
    }
  }

  // Init from saved preference
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    setDark();
  } else {
    setLight();
  }

  // Bind click
  themeButtons.forEach(btn => btn?.addEventListener('click', toggle));
}
