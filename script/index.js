import { mainContainer } from './function/main.js';
import { header } from './function/header.js';
import { footer } from './function/footer.js';
import { initHeader } from './function/headerInit.js';
import { initProjects } from './function/projectsInit.js';
import { initSkills } from './function/skillsInit.js';
import { initExperience } from './function/experienceInit.js';
import { initAbout } from './function/aboutInit.js';
import { initHeroCanvas } from './function/heroCanvas.js';
import { initTechCarousel } from './function/techCarouselinit.js';
 



const app = document.getElementById('app');
app.className = "w-full min-h-screen bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary transition-colors duration-300";

app.innerHTML = `
  ${header()}
  ${mainContainer()}
  ${footer()}
`;

initHeader();
initProjects();
initSkills();
initExperience();
initAbout();
initTechCarousel();


initHeroCanvas(); 


console.log(localStorage.getItem('theme'))