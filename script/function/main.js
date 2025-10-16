import { aboutSection } from './about.js';
import { projectsSection } from './projects.js';
import { skillsSection } from './skills.js';
import { experienceSection } from './experience.js';
import { contactSection } from './contact.js';
import { heroSection } from './hero.js';


export function mainContainer(){
    return `
        <main class="pt-20">
            <!-- HERO -->
            ${heroSection()}
            <!-- About Section -->
            ${aboutSection()}
            <!-- My Projects -->
            ${projectsSection()}
            <!-- Skills & Expertise -->
            ${skillsSection()}
            <!-- Experience & Education -->
            ${experienceSection()}
            <!-- Get In Touch -->
            ${contactSection()}
        </main>
    `
}