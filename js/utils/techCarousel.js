// ============================================================
// Tech Carousel — infinite horizontal scroll
// ============================================================

export function initTechCarousel(technologies) {
  const techsGrid = document.getElementById('techs-grid');
  if (!techsGrid) return;

  // Duplicate list for seamless loop
  const fullList = [...technologies, ...technologies];

  fullList.forEach(tool => {
    const div = document.createElement('div');
    div.className = 'tech-carousel-item';
    div.innerHTML = `
      <img src="${tool.icon}" alt="${tool.name}" style="width:3.5rem;height:3.5rem;object-fit:contain;" />
      <span>${tool.name}</span>
    `;
    techsGrid.appendChild(div);
  });

  // Inject carousel styles
  if (!document.getElementById('carousel-styles')) {
    const style = document.createElement('style');
    style.id = 'carousel-styles';
    style.innerHTML = `
      #techs-grid-wrapper {
        overflow: hidden;
        width: 100%;
      }
      #techs-grid {
        display: flex;
        flex-wrap: nowrap;
        gap: 1rem;
        width: max-content;
        padding: 1rem 0;
        animation: ticker 30s linear infinite;
        will-change: transform;
      }
      #techs-grid:hover {
        animation-play-state: paused;
      }
      .tech-carousel-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        min-width: 120px;
        border-radius: var(--radius-md);
        padding: 1rem;
        color: var(--text-secondary);
        font-size: 0.875rem;
        font-weight: 600;
        transition: all 0.3s ease;
      }
      .tech-carousel-item:hover {
        transform: scale(1.1);
        background: var(--gradient-accent);
        color: #fff;
        box-shadow: var(--shadow-lg);
      }
      @keyframes ticker {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
  }

  // Wrap in overflow:hidden container
  if (!document.getElementById('techs-grid-wrapper')) {
    const wrapper = document.createElement('div');
    wrapper.id = 'techs-grid-wrapper';
    techsGrid.parentNode.insertBefore(wrapper, techsGrid);
    wrapper.appendChild(techsGrid);
  }
}
