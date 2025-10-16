export function footer(){
    return`
        <footer class="bg-gray-800 dark:bg-gray-900 text-white py-12">
                <div class="container mx-auto px-4 text-center">
                    © <span id="year">${new Date().getFullYear()}</span> Khalid. All rights reserved.
                </div>
            </footer>
    `
}