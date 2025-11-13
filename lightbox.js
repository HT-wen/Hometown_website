// =======================
// lightbox.js (root version)
// =======================
(function () {
  // Utility to get elements dynamically (handles script order)
  function getOverlayEls() {
    return {
      overlay:  document.getElementById('imgViewerOverlay'),
      imgEl:    document.getElementById('imgViewerImg'),
      closeBtn: document.getElementById('imgViewerClose'),
      controls: document.getElementById('imgViewerControls')
    };
  }

  // Open overlay
  function openOverlay(src) {
    const { overlay, imgEl } = getOverlayEls();
    if (!overlay || !imgEl) return;
    imgEl.src = src;
    imgEl.dataset.scale = '1';
    imgEl.style.transform = 'scale(1)';
    overlay.setAttribute('aria-hidden', 'false');
  }

  // Close overlay
  function closeOverlay() {
    const { overlay } = getOverlayEls();
    if (!overlay) return;
    overlay.setAttribute('aria-hidden', 'true');
  }

  // Zoom handler
  function zoomImage(op) {
    const { imgEl } = getOverlayEls();
    if (!imgEl) return;
    let scale = parseFloat(imgEl.dataset.scale || '1');
    if (op === 'in') scale = Math.min(4, scale + 0.2);
    if (op === 'out') scale = Math.max(0.4, scale - 0.2);
    if (op === 'reset') scale = 1;
    imgEl.dataset.scale = scale.toString();
    imgEl.style.transform = `scale(${scale})`;
  }

  // --- Event listeners ---
  document.addEventListener('click', (e) => {
    // If product image clicked
    const trigger = e.target.closest('#product-list img, .product-grid img, [data-view]');
    if (trigger) {
      e.preventDefault();
      const src = trigger.getAttribute('data-view') || trigger.src;
      openOverlay(src);
      return;
    }

    // If clicked close button
    if (e.target.id === 'imgViewerClose' || e.target.closest('#imgViewerClose')) {
      closeOverlay();
      return;
    }

    // If clicked overlay background
    const { overlay } = getOverlayEls();
    if (overlay && e.target === overlay) {
      closeOverlay();
      return;
    }

    // Zoom buttons
    const zoomBtn = e.target.closest('#imgViewerControls button[data-zoom]');
    if (zoomBtn) {
      zoomImage(zoomBtn.dataset.zoom);
      return;
    }
  });
})();
