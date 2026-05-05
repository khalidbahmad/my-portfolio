// ============================================================
// Footer Component
// ============================================================

export function renderFooter() {
  return `
  <footer class="footer" style="padding:3rem 0;">
    <div class="container mx-auto px-4 text-center">
      <p style="color:var(--text-secondary);">
        &copy; <span>${new Date().getFullYear()}</span> Khalid. All rights reserved.
      </p>
    </div>
  </footer>`;
}
