// ============================================================
// Contact Page — Contact section only
// ============================================================

import { loadAllData } from '../data/loadAllData';
import Contact from '../components/Contact';

export default function ContactPage() {
  const { profile } = loadAllData();

  return <Contact profile={profile} />;
}
