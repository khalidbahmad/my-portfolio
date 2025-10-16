export function initTechCarousel() {
  const techsGrid = document.getElementById('techs-grid');
  if (!techsGrid) return;

  const technologies = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
  ];

  const fullList = [...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies];

  fullList.forEach(tool => {
    const div = document.createElement('div');
    div.className = `
      flex flex-col items-center justify-center space-y-2
      min-w-[120px]  rounded-xl p-4
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
    #techs-grid {
      display: flex;
      gap: 1rem;
      overflow: hidden;
      white-space: nowrap;
      padding: 1rem 0;
      animation: scroll 30s linear infinite;
    }
    #techs-grid:hover {
      animation-play-state: paused; /* pause on hover */
    }
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;
  document.head.appendChild(style);
}
