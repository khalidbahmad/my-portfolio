// ============================================================
// Projects Page — Projects section only
// ============================================================

import { loadAllData } from '../data/loadAllData';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  const { projects } = loadAllData();

  return <Projects projectsData={projects} />;
}
