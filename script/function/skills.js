
export function skillsSection(){
  return `
    <section id="skills" class="py-20">
                    <div class="container mx-auto px-4">
                        <!-- Title -->
                        <div class="text-center mb-16">
                            <h2 class="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
                            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                            <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                                My technical skills and proficiency levels across different areas of web development.
                            </p>
                        </div>

                        <!-- Skills Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        
                            <!-- Frontend -->
                            <div id="skills-frontend">
                                <h3 class="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                    Frontend
                                </h3>
                            </div>

                            <!-- Backend -->
                            <div id="skills-backend">
                                 <h3 class="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                    Backend
                                </h3>
                            </div>

                            <!-- DevOps -->
                            <div id="skills-devOps">
                                <h3 class="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                                    DevOps
                                </h3>
                            </div>
                        </div>

                        <!-- Technologies -->
                        <div class="mt-20">
                            <h3 class="text-xl font-bold mb-8 text-center">Technologies I Work With</h3>
                            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>

                            <!-- Carousel container -->
                            <div class="relative overflow-hidden">
                                <div id="techs-grid" class="flex gap-10 animate-scroll"></div>
                            </div>
                        </div>
                    </div>
                </section>
  `
}
