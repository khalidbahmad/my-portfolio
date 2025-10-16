// -----------------------------
// ABOUT SECTION → TECH GRID
// -----------------------------
export function aboutSection(){

  return`
    <section id="about" class="py-20">
                    <div class="container mx-auto px-4">
                        <!-- Title -->
                        <div class="text-center mb-16">
                            <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                        </div>

                        <!-- Grid -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <!-- Left -->
                            <div class="order-2 lg:order-1">
                                <h3 class="text-2xl font-bold mb-4">Who I Am</h3>
                                <p class="text-gray-600 dark:text-gray-400 mb-6">
                                    I'm a passionate Full-Stack Developer in training at CMC Rabat, 
                                    where I’m developing strong skills in both front-end and back-end web development.
                                </p>
                                <p class="text-gray-600 dark:text-gray-400 mb-8">
                                    Through my studies at CMC Rabat, I’ve gained hands-on experience with modern web technologies, 
                                    learning to build responsive, user-friendly interfaces and robust backend systems. 
                                    I’m passionate about creating clean, efficient code and bringing ideas to life through innovative web solutions.
                                </p>
                                <p class="text-gray-600 dark:text-gray-400 mb-8">
                                    I’m constantly learning and exploring new tools to grow as a developer 
                                    and stay up to date with the latest trends in web development.
                                </p>

                                <!-- Skills -->
                                <div class="grid grid-cols-2 gap-6 mb-8">
                                    <div class="flex items-start">
                                        <!-- CodeIcon -->
                                        <svg class="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                                        </svg>
                                        <div>
                                            <h4 class="font-bold mb-1">Frontend</h4>
                                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-snug">
                                                Modern, responsive UI with React.js ,Bootstrap and Tailwind CSS
                                            </p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <svg class="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v6H4zM4 14h16v6H4z"/>
                                        </svg>
                                        <div>
                                            <h4 class="font-bold mb-1">Backend</h4>
                                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-snug" >
                                                Laravel(php), JavaScript ,Python 
                                            </p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <svg class="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"/>
                                        </svg>
                                        <div>
                                            <h4 class="font-bold mb-1">Database</h4>
                                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-snug">
                                                SQL, MongoDB
                                            </p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <svg class="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                                        </svg>
                                        <div>
                                            <h4 class="font-bold mb-1">UI/UX</h4>
                                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-snug">
                                                Intuitive interfaces with Figma
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Social Links -->
                                <div class="flex space-x-4">
                                    <a href="https://github.com/khalidbahmad" target="_blank" class="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
                                        <!-- GitHub Icon -->
                                        <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.04c-3.19.69-3.87-1.54-3.87-1.54-.52-1.31-1.27-1.65-1.27-1.65-1.03-.71.08-.7.08-.7 1.13.08 1.73 1.17 1.73 1.17 1.02 1.76 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.17-3.11-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.19a10.84 10.84 0 012.87-.39c.98.01 1.97.13 2.87.39 2.19-1.5 3.15-1.19 3.15-1.19.62 1.57.23 2.73.11 3.02.73.81 1.17 1.85 1.17 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.03.77 2.08v3.08c0 .3.21.65.79.54A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
                                        </svg>
                                        GitHub
                                    </a>

                                    <a href="https://linkedin.com/in/khalid-bahmad" target="_blank" class="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
                                        <!-- LinkedIn Icon -->
                                        <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98A1.98 1.98 0 006.96 5.48C6.96 4.38 6.08 3.5 4.98 3.5zM3.5 8h3v12h-3V8zm7 0h2.88v1.71h.04c.4-.76 1.38-1.55 2.85-1.55 3.05 0 3.61 2.01 3.61 4.63V20h-3v-5.36c0-1.28-.02-2.94-1.79-2.94-1.8 0-2.07 1.41-2.07 2.84V20h-3V8z"/>
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>

                            <!-- Right -->
                            <div class="order-1 lg:order-2">
                                <div class="relative">
                                    <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30"></div>
                                        <div class="relative dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                                            <img src="https://images.unsplash.com/photo-1596003906949-67221c37965c?auto=format&fit=crop&w=800&q=80" 
                                                    alt=""
                                                    class="w-full h-auto object-cover"/>
                                            <div class="p-6 custom">
                                                <h3 class="text-xl font-bold mb-4">My Tech Stack</h3>
                                                <div id="tech-grid" class="grid grid-cols-4 gap-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

  `
} 