export function initSkills() {
  const skillsfrontend = document.getElementById('skills-frontend');
  const skillsbackend = document.getElementById('skills-backend');
  const skillsDevOps  = document.getElementById('skills-devOps');
  const techsGrid = document.getElementById('techs');

  // 🌐 Frontend Skills
  const skills_frontend = [
    { name: 'HTML / CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Tailwind CSS / bootstrap', level: 80 },
    { name: 'UI / UX Design', level: 70 }
  ];

  // ⚙️ Backend Skills
  const skills_backend = [
    { name: 'PHP', level: 80 },
    { name: 'Laravel', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'MongoDB', level: 70 },
    { name: 'MySQL', level: 65 }
  ];

  // DevOps Skills
  const skills_DevOps = [
    { name: 'Git & GitHub', level: 85 },
    { name: 'CI/CD (GitHub Actions)', level: 65 }
  ];

  
  // front-end skills
  skills_frontend.forEach((skill) => {
    const div = document.createElement('div');
    div.className = 'mb-6';
    div.innerHTML = `
      <div class="flex justify-between items-center mb-1">
        <h4 class="font-bold dark:text-gray-400">${skill.name}</h4>
        <span class="text-sm dark:text-gray-400">${skill.level}%</span>
      </div>
      <div class="w-full bg-gray-400 dark:bg-gray-700 h-2 rounded-full">
        <div class="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: ${skill.level}%"></div>
      </div>
    `;
    skillsfrontend.appendChild(div);
  });

  // back-end skills
   skills_backend.forEach((skill) => {
    const div = document.createElement('div');
    div.className = 'mb-6';
    div.innerHTML = `
      <div class="flex justify-between items-center mb-1">
        <h4 class="font-bold dark:text-gray-400">${skill.name}</h4>
        <span class="text-sm dark:text-gray-400">${skill.level}%</span>
      </div>
      <div class="w-full bg-gray-400 dark:bg-gray-700 h-2 rounded-full">
        <div class="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: ${skill.level}%"></div>
      </div>
    `;
    skillsbackend.appendChild(div);
  });

  // back-end skills
   skills_DevOps.forEach((skill) => {
    const div = document.createElement('div');
    div.className = 'mb-6';
    div.innerHTML = `
      <div class="flex justify-between items-center mb-1">
        <h4 class="font-bold dark:text-gray-400">${skill.name}</h4>
        <span class="text-sm dark:text-gray-400">${skill.level}%</span>
      </div>
      <div class="w-full bg-gray-400 dark:bg-gray-700 h-2 rounded-full">
        <div class="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style="width: ${skill.level}%"></div>
      </div>
    `;
    skillsDevOps.appendChild(div);
  });

}
