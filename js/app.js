// ============================================================
// App Entry Point — loads data, renders components, initializes
// ============================================================

import { loadAllData } from './data.js';
import { renderHeader, initHeader } from './components/header.js';
import { renderHero, initHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderProjects, initProjects } from './components/projects.js';
import { renderSkills, initSkills } from './components/skills.js';
import { renderExperience, initExperience } from './components/experience.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { initTheme } from './utils/theme.js';
import { initHeroCanvas } from './utils/heroCanvas.js';
import { initTechCarousel } from './utils/techCarousel.js';

async function init() {
  const app = document.getElementById('app');
  if (!app) return;

  // Load all JSON data
  const data = await loadAllData();

  // Render HTML
  app.innerHTML = `
    ${renderHeader()}
    <main style="padding-top:5rem;">
      ${renderHero(data.profile)}
      ${renderAbout(data.profile)}
      ${renderProjects()}
      ${renderSkills()}
      ${renderExperience()}
      ${renderContact(data.profile)}
    </main>
    ${renderFooter()}
  `;

  // Replace feather icons
  if (window.feather) feather.replace();

  // Initialize interactivity
  initHeader();
  initTheme();
  initHero(data.profile);
  initProjects(data.projects);
  initSkills(data.skills);
  initExperience(data.experience);
  initTechCarousel(data.skills.technologies);
  initHeroCanvas();

  // Fade-up animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-up');
    observer.observe(section);
  });
}

// Run
document.addEventListener('DOMContentLoaded', init);
