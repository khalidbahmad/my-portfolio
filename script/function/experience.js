
export function experienceSection(){
  return `
  <section id="experience" class="py-20">
                    <div class="container mx-auto px-4">
                        <!-- Title -->
                        <div class="text-center mb-16">
                            <h2 class="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
                            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                            <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                                My professional journey and educational background in the tech industry.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <!-- Work Experience -->
                            <div>
                                <div class="flex items-center mb-8">
                                    <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                                        <i data-feather="briefcase" class="text-blue-500 h-6 w-6"></i>
                                    </div>
                                    <h3 class="text-2xl font-bold">Work Experience</h3>
                                </div>
                                <div id="work-timeline" class="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-12"></div>
                            </div>

                            <!-- Education -->
                            <div>
                                <div class="flex items-center mb-8">
                                    <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                                        <i data-feather="book" class="text-purple-500 h-6 w-6"></i>
                                    </div>
                                    <h3 class="text-2xl font-bold">Education</h3>
                                </div>
                                <div id="education-timeline" class="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-12"></div>
                            </div>
                        </div>
                    </div>
                </section>
  `
}
