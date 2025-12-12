export function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterContainer = document.getElementById('filter-buttons');
  
  if (!projectsGrid || !filterContainer) return;

  const fallbackImage = 'https://picsum.photos/1200/800?random=42';

  // 1. Expanded Project Data for testing
  const projects = [
    {
      src: './images/DevPortfolio.png',
      title: 'Portfolio Website',
      desc: 'A modern personal portfolio built using HTML, CSS, JavaScript, and Tailwind CSS.',
      tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
      link: '#'
    },
    // Added a dummy project to test filtering
    {
      src: '', 
      title: 'E-Commerce App',
      desc: 'Full stack application with payment processing.',
      tech: ['React', 'Node.js', 'TailwindCSS'],
      link: '#'
    }
  ];

  const filters = ['All Projects', 'JavaScript', 'React', 'Python', 'Laravel'];

  // 2. Render Filter Buttons
  filters.forEach((filter, index) => {
    const btn = document.createElement('button');
    // Common classes for all buttons
    const baseClasses = 'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent';
    
    // Active vs Inactive classes
    const activeClasses = 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105';
    const inactiveClasses = 'bg-[#1f2937] text-gray-300 hover:bg-[#374151] hover:text-white border-gray-700';

    btn.className = `${baseClasses} ${index === 0 ? activeClasses : inactiveClasses}`;
    btn.textContent = filter;
    
    // Store the raw filter name for easier matching later
    btn.dataset.filter = filter; 
    
    filterContainer.appendChild(btn);
  });

  // 3. Dynamic Filter Logic
  function renderProjects(filterName = 'All Projects') {
    projectsGrid.innerHTML = '';

    // Logic: If "All Projects", show everything. 
    // Otherwise, check if the project's tech array includes the filter name.
    const filtered = filterName === 'All Projects' 
      ? projects 
      : projects.filter(p => p.tech.includes(filterName));

    // Handle Empty State
    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="col-span-full text-center py-10 text-gray-400">
          <p>No projects found for ${filterName}.</p>
        </div>`;
      return;
    }

    filtered.forEach((p, idx) => {
      const div = document.createElement('div');
      // Added fade-in animation using style with delay
      div.className = `
        group bg-[#1a1f2c] border border-gray-800 rounded-2xl overflow-hidden 
        shadow-md hover:shadow-lg hover:border-blue-500/50 
        transition-all duration-300 ease-in-out
        opacity-0 animate-fade-in
      `;
      div.style.animation = `fadeIn 0.5s ease-out forwards ${idx * 0.1}s`;

      div.innerHTML = `
        <div class="relative overflow-hidden h-52">
          <img src="${p.src}" alt="${p.title}" 
               onerror="this.onerror=null;this.src='${fallbackImage}';"
               class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <a href="${p.link}" class="px-4 py-2 bg-blue-600 text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</a>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2 text-white">${p.title}</h3>
          <p class="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">${p.desc}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${p.tech.map(t => `
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-[#232b3b] text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors">
                &lt;/&gt; ${t}
              </span>`
            ).join('')}
          </div>
        </div>
      `;
      projectsGrid.appendChild(div);
    });
  }

  // 4. Handle Clicks
  filterContainer.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    
    const selectedFilter = e.target.dataset.filter;
    const buttons = filterContainer.querySelectorAll('button');

    // CSS Classes Definition
    const activeClasses = ['bg-gradient-to-r', 'from-blue-500', 'to-purple-500', 'text-white', 'shadow-lg', 'scale-105'];
    const inactiveClasses = ['bg-[#1f2937]', 'text-gray-300', 'hover:bg-[#374151]', 'hover:text-white', 'border-gray-700'];

    buttons.forEach(btn => {
      if (btn === e.target) {
        btn.classList.add(...activeClasses);
        btn.classList.remove(...inactiveClasses);
      } else {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
      }
    });

    renderProjects(selectedFilter);
  });

  renderProjects();
}

// Add this to your CSS file for the animation to work
// @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
