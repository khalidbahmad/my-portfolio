// ============================================================
// About Page — About section only
// ============================================================

import { loadAllData } from '../data/loadAllData';
import About from '../components/About';

export default function AboutPage() {
  const { profile } = loadAllData();

  return <About profile={profile} />;
}
