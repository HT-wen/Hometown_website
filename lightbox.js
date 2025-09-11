// --- Lightbox for ramen images ---
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');
  const productList = document.getElementById('product-list');

  if (!modal || !modalImage || !productList) return;

  // Open on any product image click
  productList.addEventListener('click', (e) => {
    const img = e.target.closest('.product-item img');
    if (!img) return;
    modalImage.src = img.src;
    modalImage.alt = img.alt || 'Preview Image';
    modal.style.display = 'flex';
  });

  // Close handlers
  function closeModal() {
    modal.style.display = 'none';
    modalImage.src = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
});
