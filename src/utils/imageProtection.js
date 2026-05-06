// ============================================================
// Image Protection — Layer 3: Disable right-click & drag
// ============================================================

export function initImageProtection() {
  document.addEventListener('contextmenu', (e) => {
    if (
      e.target.tagName === 'IMG' ||
      e.target.tagName === 'CANVAS' ||
      e.target.closest('canvas')
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', (e) => {
    if (
      e.target.tagName === 'IMG' ||
      e.target.tagName === 'CANVAS'
    ) {
      e.preventDefault();
    }
  });
}
