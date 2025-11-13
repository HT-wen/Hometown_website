// ===============================
// /scripts/modules/lightbox.js
// ===============================

export function initLightbox() {
  const overlay = document.getElementById('imgViewerOverlay');
  const imgEl = document.getElementById('imgViewerImg');
  const closeBtn = document.getElementById('imgViewerClose');
  const controls = document.getElementById('imgViewerControls');

  if (!overlay || !imgEl) return;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('#product-list img, .product-grid img, [data-view]');
    if (trigger) {
      e.preventDefault();
      imgEl.src = trigger.getAttribute('data-view') || trigger.src;
      imgEl.dataset.scale = '1';
      imgEl.style.transform = 'scale(1)';
      overlay.setAttribute('aria-hidden', 'false');
    }
  });

  // Close overlay
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn || e.target.closest('#imgViewerClose')) {
      overlay.setAttribute('aria-hidden', 'true');
    }
  });

  // Zoom controls
  controls.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-zoom]');
    if (!btn) return;
    let scale = parseFloat(imgEl.dataset.scale || '1');
    if (btn.dataset.zoom === 'in') scale = Math.min(4, scale + 0.2);
    if (btn.dataset.zoom === 'out') scale = Math.max(0.4, scale - 0.2);
    if (btn.dataset.zoom === 'reset') scale = 1;
    imgEl.dataset.scale = scale.toString();
    imgEl.style.transform = `scale(${scale})`;
  });
}
