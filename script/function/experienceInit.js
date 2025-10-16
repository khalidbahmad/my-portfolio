export function initExperience() {
  const workTimeline = document.getElementById('work-timeline');
  const educationTimeline = document.getElementById('education-timeline');

  const education = [
    {
      degree: 'Full-Stack Development Program',
      school: 'Cité des Métiers et des Compétences de Rabat-Salé-Kénitra ',
      date: '2024 - Present',
      info: 'Currently studying full-stack web development with a focus on HTML, CSS, JavaScript, React, PHP (Laravel), Python, and databases.'
    }
  ];

  const workExperience = [
    {
    role: 'Full-Stack Development Program',
    company: 'Personal Project',
    date: '1 months',
    info: 'A platform where developers can create and manage personal portfolios with dynamic sections like About, Projects, and Skills. Features light/dark mode and public portfolio links.'
  }
  ];

  // Helper: Create timeline card with accent circle
  function createCardWork({ date, title, subtitle, info, index }) {
    const div = document.createElement('div');
    div.className =
      'custom relative bg-[#1a1f2c] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 mb-8 ml-5';

    div.innerHTML = `
      <div class="absolute -left-10 top-2 flex items-center justify-center w-11 h-11 rounded-full border-2 border-blue-500 text-blue-400 font-semibold bg-[#0f141f]">
        ${index + 1}
      </div>
      <div class="pl-6">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z"/>
          </svg>
          <span class="text-sm text-gray-400">${date}</span>
        </div>
        <h4 class="text-lg font-semibold mb-1">${title}</h4>
        <p class="text-blue-400 mb-2 font-medium">${subtitle}</p>
        <p class="text-gray-600 text-sm leading-relaxed">${info}</p>
      </div>
    `;
    return div;
  }


  function createCardEducation({ date, title, subtitle, info, index }) {
    const div = document.createElement('div');
    div.className =
      'custom relative bg-[#1a1f2c] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 mb-8 ml-5';

    div.innerHTML = `
      <div class="absolute -left-10 top-2 flex items-center justify-center w-11 h-11 rounded-full border-2 border-purple-500 text-purple-400 font-semibold bg-[#0f141f]">
        ${index + 1}
      </div>
      <div class="pl-6">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z"/>
          </svg>
          <span class="text-sm text-gray-400">${date}</span>
        </div>
        <h4 class="text-lg font-semibold  mb-1">${title}</h4>
        <p class="text-purple-400 mb-2 font-medium">${subtitle}</p>
        <p class="text-gray-600 text-sm leading-relaxed">${info}</p>
      </div>
    `;
    return div;
  }

  // Populate Work Experience
  workExperience.forEach((item, i) => {
    const card = createCardWork({
      date: item.date,
      title: item.role,
      subtitle: item.company,
      info: item.info,
      index: i
    });
    workTimeline.appendChild(card);
  });

  // Populate Education
  education.forEach((item, i) => {
    const card = createCardEducation({
      date: item.date,
      title: item.degree,
      subtitle: item.school,
      info: item.info,
      index: i
    });
    educationTimeline.appendChild(card);
  });
}
