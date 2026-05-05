// ============================================================
// Contact Component
// ============================================================

export function renderContact(data) {
  const c = data.contact;

  const socialIcons = c.socialLinks.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon ${s.name.toLowerCase()}" aria-label="${s.name}">
      <i data-feather="${s.icon}"></i>
    </a>`).join('');

  return `
  <section id="contact" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title">${c.title}</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">${c.subtitle}</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="card" style="padding:2rem;">
          <h3 class="text-2xl font-bold" style="margin-bottom:1.5rem;color:var(--text-primary);">Contact Information</h3>
          <div style="display:flex;flex-direction:column;gap:1.5rem;">
            <div class="flex items-start">
              <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(59,130,246,0.15);display:flex;align-items:center;justify-content:center;margin-right:1rem;flex-shrink:0;">
                <svg style="color:var(--accent-blue);width:1.25rem;height:1.25rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h4 class="font-bold" style="margin-bottom:0.25rem;color:var(--text-primary);">Email</h4>
                <a href="mailto:${c.email}" style="color:var(--text-secondary);transition:color 0.25s;" onmouseover="this.style.color='var(--accent-blue)'" onmouseout="this.style.color='var(--text-secondary)'">${c.email}</a>
              </div>
            </div>
            <div class="flex items-start">
              <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(139,92,246,0.15);display:flex;align-items:center;justify-content:center;margin-right:1rem;flex-shrink:0;">
                <svg style="color:var(--accent-purple);width:1.25rem;height:1.25rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4 class="font-bold" style="margin-bottom:0.25rem;color:var(--text-primary);">Phone</h4>
                <a href="tel:${c.phone.replace(/\s/g,'')}" style="color:var(--text-secondary);">${c.phone}</a>
              </div>
            </div>
            <div class="flex items-start">
              <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(34,197,94,0.15);display:flex;align-items:center;justify-content:center;margin-right:1rem;flex-shrink:0;">
                <svg style="color:var(--accent-green);width:1.25rem;height:1.25rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 class="font-bold" style="margin-bottom:0.25rem;color:var(--text-primary);">Location</h4>
                <p style="color:var(--text-secondary);">${c.location}</p>
              </div>
            </div>
          </div>
          <div style="margin-top:2rem;">
            <h3 class="text-xl font-bold" style="margin-bottom:1rem;color:var(--text-primary);">Follow Me</h3>
            <div class="flex" style="gap:0.75rem;">${socialIcons}</div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card" style="padding:2rem;">
          <h3 class="text-2xl font-bold" style="margin-bottom:1.5rem;color:var(--text-primary);">Send Me a Message</h3>
          <form id="contactForm">
            <div style="margin-bottom:1.25rem;">
              <label for="name" style="display:block;font-size:0.875rem;font-weight:500;margin-bottom:0.5rem;color:var(--text-primary);">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required class="form-input" />
            </div>
            <div style="margin-bottom:1.25rem;">
              <label for="email" style="display:block;font-size:0.875rem;font-weight:500;margin-bottom:0.5rem;color:var(--text-primary);">Your Email</label>
              <input type="email" id="email" name="email" placeholder="youremail@example.com" required class="form-input" />
            </div>
            <div style="margin-bottom:1.25rem;">
              <label for="subject" style="display:block;font-size:0.875rem;font-weight:500;margin-bottom:0.5rem;color:var(--text-primary);">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required class="form-input" />
            </div>
            <div style="margin-bottom:1.25rem;">
              <label for="message" style="display:block;font-size:0.875rem;font-weight:500;margin-bottom:0.5rem;color:var(--text-primary);">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Hello, I'd like to discuss a project..." required class="form-input" style="resize:vertical;"></textarea>
            </div>
            <button type="submit" id="submitBtn" class="btn btn-primary" style="width:100%;">Send Message</button>
            <div id="formStatus" style="margin-top:1rem;"></div>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}
