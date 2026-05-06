// ============================================================
// Home Page — All sections
// ============================================================

import { useEffect } from 'react';
import { loadAllData } from '../data/loadAllData';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  const data = loadAllData();

  // Fade-up animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('fade-up');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero profile={data.profile} />
      <About profile={data.profile} />
      <Projects projectsData={data.projects} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Contact profile={data.profile} />
    </>
  );
}
