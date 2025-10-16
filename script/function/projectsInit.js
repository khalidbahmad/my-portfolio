export function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterContainer = document.getElementById('filter-buttons');
  if (!projectsGrid || !filterContainer) return;

  const fallbackImage = 'https://picsum.photos/1200/800?random=42';

  // Project data
  const projects = [
    {
      src: './images/DevPortfolio.png',
      title: 'Portfolio Website',
      desc: 'A modern personal portfolio built using HTML, CSS, JavaScript, and Tailwind CSS. Features smooth scrolling, responsive sections, and elegant UI animations.',
      tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
      link: '#'
    }

  ];

  // Define filters dynamically
 const filters = ['All Projects', 'JavaScript', 'React', 'Python', 'Laravel'];

  // Render filter buttons
  filters.forEach((filter, index) => {
    const btn = document.createElement('button');
    btn.className = `
      px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 
      ${index === 0
        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
        : ' bg-gray-500 text-gext-gray-300 hover:bg-[#374151] hover:text-white'}
    `;
    btn.textContent = filter;
    btn.dataset.filter = filter.toLowerCase().replace(' ', '-');
    filterContainer.appendChild(btn);
  });

  // Filter logic
  function renderProjects(filter = 'all-projects') {
    projectsGrid.innerHTML = '';

   let filtered;
    switch (filter) {
      case 'JavaScript':
        filtered = projects.filter(p => p.tech.includes('JavaScript'));
        break;
      case 'react':
        filtered = projects.filter(p => p.tech.includes('React'));
        break;
      case 'Python':
        filtered = projects.filter(p => p.tech.includes('Python'));
        break;
      case 'Laravel':
        filtered = projects.filter(p => p.tech.includes('Laravel'));
        break;
      default:
        filtered = projects;
    }


    filtered.forEach(p => {
      const div = document.createElement('div');
      div.className = `
        group bg-[#1a1f2c] border border-gray-800 rounded-2xl overflow-hidden 
        shadow-md hover:shadow-lg hover:border-blue-500/50 
        transition-all duration-300 ease-in-out
      `;
      div.innerHTML = `
        <div class="relative overflow-hidden">
          <img src="${p.src}" alt="${p.title}" 
               onerror="this.onerror=null;this.src='${fallbackImage}';"
               class="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2">${p.title}</h3>
          <p class="text-gray-400 text-sm mb-4 leading-relaxed">${p.desc}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${p.tech
              .map(
                t => `<span class="px-3 py-1 text-xs font-medium rounded-full bg-[#232b3b] text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors">&lt;/&gt; ${t}</span>`
              )
              .join('')}
          </div>
          <a href="${p.link}" class="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition">
            View Project
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      `;
      projectsGrid.appendChild(div);
    });
  }

  // Handle clicks dynamically
 filterContainer.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  const filter = e.target.dataset.filter;

  // Reset all buttons to inactive style
  document.querySelectorAll('#filter-buttons button').forEach(b => {
    b.classList.remove(
      'bg-gradient-to-r',
      'from-blue-500',
      'to-purple-500',
      'text-white',
      'shadow-lg'
    );
    b.classList.add('bg-gray-500', 'text-gray-300');
  });

  // Apply active gradient style
  e.target.classList.remove('bg-gray-500', 'text-gray-300');
  e.target.classList.add(
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-500',
    'text-white',
    'shadow-lg'
  );

  // Re-render projects
  renderProjects(filter);
});


  renderProjects();
}
