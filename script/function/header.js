export function header() {
  return `
  <header id="header" class="fixed top-0 w-full z-50 transition-all duration-300  py-5">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <a href="#home" class="text-2xl font-bold font-heading bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
        Dev<span class="text-blue-600 dark:text-indigo-400">Portfolio</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <a href="#home" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300">Home</a>
        <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300">About</a>
        <a href="#projects" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300">Projects</a>
        <a href="#skills" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300">Skills</a>
        <a href="#experience" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300">Experience</a>
        <a href="#contact" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors duration-300">Contact</a>
        <button id="themeToggleDesktop" class="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
          <span id="themeIconDesktop">🌙</span>
        </button> 
      </nav>

      <!-- Mobile Menu Button -->
      <div class="flex items-center md:hidden">
        <button id="themeToggleMobile" class="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
          <span id="themeIconMobile">🌙</span>
        </button>
        <button id="menuToggle" class="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
          <span id="menuIcon">☰</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav id="mobileMenu" class="hidden md:hidden  dark:bg-gray-800 py-4 px-4 shadow-lg">
      <div class="flex flex-col space-y-4">
        <a href="#home" class="nav-mobile">Home</a>
        <a href="#about" class="nav-mobile">About</a>
        <a href="#projects" class="nav-mobile">Projects</a>
        <a href="#skills" class="nav-mobile">Skills</a>
        <a href="#experience" class="nav-mobile">Experience</a>
        <a href="#contact" class="nav-mobile">Contact</a>
      </div>
    </nav>
  </header>
  `;
}
