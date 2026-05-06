// ============================================================
// Data Loader — imports all JSON data files directly (Vite handles JSON)
// ============================================================

import profile from './profile.json';
import projects from './projects.json';
import skills from './skills.json';
import experience from './experience.json';

export function loadAllData() {
  return { profile, projects, skills, experience };
}

export { profile, projects, skills, experience };
