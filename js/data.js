// ============================================================
// Data Loader — fetches all JSON data files
// ============================================================

const BASE = './data/';

async function loadJSON(filename) {
  const res = await fetch(`${BASE}${filename}`);
  if (!res.ok) throw new Error(`Failed to load ${filename}`);
  return res.json();
}

export async function loadAllData() {
  const [profile, projects, skills, experience] = await Promise.all([
    loadJSON('profile.json'),
    loadJSON('projects.json'),
    loadJSON('skills.json'),
    loadJSON('experience.json')
  ]);
  return { profile, projects, skills, experience };
}
