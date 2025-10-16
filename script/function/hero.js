export function heroSection (){
    return `
        <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
                    <canvas id="heroCanvas" class="absolute inset-0 z-0"></canvas>
                    <div class="container mx-auto px-4 z-10 text-center">
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                            <span class="block">Hi, I'm</span>
                            <span class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Khalid</span>
                        </h1>
                        <h2 class="text-2xl md:text-4xl font-medium mb-8 text-gray-600 dark:text-gray-300">Full-Stack Developer</h2>
                        <div class="flex flex-wrap justify-center gap-4 mb-12">
                            <a href="#projects" class="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">View My Work</a>
                            <a href="#contact" class="px-8 py-3 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-gray-100 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">Contact Me</a>
                        </div>
                        <div class="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
                            <a href="#about" aria-label="Scroll down">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
    `
}
