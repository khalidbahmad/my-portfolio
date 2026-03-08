export function initTechCarousel() {
  const techsGrid = document.getElementById('techs-grid');
  if (!techsGrid) return;

  const technologies = [
    { name: 'HTML5',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MongoDB',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Tailwind CSS',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VSCode',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Java',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Docker',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  // Duplicate exactly ONCE — translateX(-50%) snaps back seamlessly
  const fullList = [...technologies, ...technologies];

  fullList.forEach(tool => {
    const div = document.createElement('div');
    div.className = `
      flex flex-col items-center justify-center space-y-2
      min-w-[120px] rounded-xl p-4
      hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500
      transition-all duration-300 shadow-md hover:shadow-xl
    `;
    div.innerHTML = `
      <img src="${tool.icon}" alt="${tool.name}" class="w-16 h-16 object-contain" />
      <span class="text-gray-200 text-sm font-semibold">${tool.name}</span>
    `;
    techsGrid.appendChild(div);
  });

  const style = document.createElement('style');
  style.innerHTML = `
    /* Wrapper: clips overflow and prevents page scroll */
    #techs-grid-wrapper {
      overflow: hidden;
      width: 100%;
    }

    /* The track: flex row, no wrap, width = 2× natural content */
    #techs-grid {
      display: flex;
      flex-wrap: nowrap;
      gap: 1rem;
      width: max-content;          /* shrink-wraps all items */
      padding: 1rem 0;
      animation: ticker 30s linear infinite;
      will-change: transform;
    }

    /* Pause on hover — works because hover target is the track itself */
    #techs-grid:hover {
      animation-play-state: paused;
    }

    /*
      Move exactly half the total width (= one full copy of the list).
      Because the second half is identical, the jump is invisible.
    */
    @keyframes ticker {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;
  document.head.appendChild(style);

  // Wrap the grid in an overflow:hidden container if not already done in HTML
  // (safe to call multiple times — skips if wrapper already exists)
  if (!document.getElementById('techs-grid-wrapper')) {
    const wrapper = document.createElement('div');
    wrapper.id = 'techs-grid-wrapper';
    techsGrid.parentNode.insertBefore(wrapper, techsGrid);
    wrapper.appendChild(techsGrid);
  }
}