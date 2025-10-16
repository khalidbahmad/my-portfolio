export function projectsSection(){

return`
  <section id="projects" class="py-20">
                    <div class="container mx-auto px-4">
                        <div class="text-center mb-16">
                            <h2 class="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                            <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                                Explore my recent work and personal projects. Each project showcases different skills and technologies.
                            </p>
                        </div>

                        <!-- Filters -->
                        <div id="filter-buttons" class="flex flex-wrap justify-center gap-4 mb-12"></div>

                        <!-- Projects Grid -->
                        <div id="projects-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"></div>

                        <!-- GitHub Link -->
                        <div class="text-center mt-12">
                            <a href="https://github.com/khalidbahmad" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
                                <i data-feather="github" class="h-5 w-5 mr-2"></i> View More on GitHub
                            </a>
                        </div>
                    </div>
                </section>
`
}
