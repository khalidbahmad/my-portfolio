export function contactSection(){
    return`
        <section id="contact" class="py-20">
                    <div class="container mx-auto px-4">
                        <!-- Title -->
                        <div class="text-center mb-16">
                            <h2 class="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                            <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                                Have a project in mind or want to collaborate? Feel free to reach out to me.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <!-- Contact Info -->
                            <div class="custom">
                                <div class="dark:bg-gray-300 rounded-xl p-8 shadow-lg">
                                    <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
                                    <div class="space-y-6">
                                        <div class="flex items-start">
                                            <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                                                <i data-feather="mail" class="text-blue-500 h-6 w-6"></i>
                                            </div>
                                            <div>
                                                <h4 class="font-bold mb-1">Email</h4>
                                                <a href="mailto:khalidbahmad.dev@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                                                    khalidbahmad.dev@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        <div class="flex items-start">
                                            <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                                                <i data-feather="phone" class="text-purple-500 h-6 w-6"></i>
                                            </div>
                                            <div>
                                                <h4 class="font-bold mb-1">Phone</h4>
                                                <a href="tel:+212708433105" class="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">
                                                +212 708-433105
                                                </a>
                                            </div>
                                        </div>
                                        <div class="flex items-start">
                                            <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                                                <i data-feather="map-pin" class="text-green-500 h-6 w-6"></i>
                                            </div>
                                            <div>
                                                <h4 class="font-bold mb-1">Location</h4>
                                                <p class="text-gray-600 dark:text-gray-400">Témara, Morocco</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-12">
                                        <h3 class="text-xl font-bold mb-4">Follow Me</h3>
                                        <div class="flex space-x-4">
                                            <a href="https://github.com/khalidbahmad" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300" aria-label="GitHub">
                                                <i data-feather="github"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/in/khalid-bahmad" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                                                <i data-feather="linkedin"></i>
                                            </a>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300" aria-label="Twitter">
                                                <i data-feather="twitter"></i>
                                            </a>
                                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors duration-300" aria-label="Instagram">
                                                <i data-feather="instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Contact Form -->
                            <div class="custom">
                                <div class="dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                                    <h3 class="text-2xl font-bold mb-6">Send Me a Message</h3>
                                    <form id="contactForm">
                                        <div class="mb-6">
                                            <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
                                            <input type="text" id="name" name="name" placeholder="exomple" required class="themeF w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div class="mb-6">
                                            <label for="email" class="block text-sm font-medium mb-2">Your Email</label>
                                            <input type="email" id="email" name="email" placeholder="youremail@example.com" required class="themeF w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div class="mb-6">
                                            <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                                            <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required class="themeF w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div class="mb-6">
                                            <label for="message" class="block text-sm font-medium mb-2">Message</label>
                                            <textarea id="message" name="message" rows="5" placeholder="Hello, I'd like to discuss a project..." required class="themeF w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                        </div>
                                        <button type="submit" id="submitBtn" class="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg flex items-center justify-center transition-all duration-300">
                                            Send Message
                                        </button>
                                        <div id="formStatus" class="mt-4"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    `
}
