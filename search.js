document.addEventListener('DOMContentLoaded', () => {  
  // -----------------------------
  // State
  // -----------------------------
  let products = [];
  let productsLoaded = false;

  // -----------------------------
  // DOM refs (declare ONCE)
  // -----------------------------
  const container      = document.querySelector('.search-bar-container');
  const searchInput    = container?.querySelector('.search-bar');
  const resultsList    = document.getElementById('results');              // or: container?.querySelector('#results')
  const categoryBox    = document.querySelector('.search_results_box');    // the white category grid
  const categoryBlocks = document.querySelectorAll('.search_results_box .Item');

  if (!searchInput || !resultsList) {
    console.error('Missing .search-bar or #results in DOM.');
    return;
  }

  // -----------------------------
  // Data
  // -----------------------------
  async function loadProductsOnce() {
    if (productsLoaded) return;
    try {
      const res = await fetch('./products.json', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      products = await res.json();
      productsLoaded = true;
      console.log('Products loaded:', products.length);
    } catch (err) {
      console.error('Error loading JSON:', err);
    }
  }

  // -----------------------------
  // Helpers
  // -----------------------------
  function toggleCategories(show) {
    if (categoryBox) categoryBox.style.display = show ? 'block' : 'none';
    categoryBlocks.forEach(el => (el.style.display = show ? 'block' : 'none'));
  }

  function searchProducts(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter(p => {
      const name = (p?.name ?? '').toString().toLowerCase();
      return name.includes(q);
    });
  }

  function render(items, hasQuery) {
    // Hide category box while typing; show when empty
    toggleCategories(!hasQuery);

    if (!hasQuery) {
      resultsList.innerHTML = '';
      resultsList.style.display = 'none';
      return;
    }

    resultsList.innerHTML = items.length
      ? items.map(p => `<li class="result-item">${p.name}</li>`).join('')
      : '<li class="empty">No matches</li>';

    resultsList.style.display = 'block';
  }

  // -----------------------------
  // Live search
  // -----------------------------
  searchInput.addEventListener('input', async (e) => {
    const query = e.target.value;

    if (!query.trim()) {
      render([], false); // empty results, show categories
      return;
    }

    if (!productsLoaded) await loadProductsOnce();
    const matches = searchProducts(query);
    render(matches, true);
  });

  // (Optional) pick a result -> fill input & close
  resultsList.addEventListener('click', (e) => {
    const li = e.target.closest('.result-item');
    if (!li) return;
    searchInput.value = li.textContent.trim();
    resultsList.style.display = 'none';
  });

  // Prevent outside-click handler from firing when clicking inside results
  resultsList.addEventListener('pointerdown', (e) => e.stopPropagation());

  // -----------------------------
  // Outside click / Esc / focus/blur
  // -----------------------------
  function hideAll() {
    resultsList.style.display = 'none';
    if (categoryBox) categoryBox.style.display = 'none';
  }

  document.addEventListener('pointerdown', (e) => {
    if (!container) return;
    if (!container.contains(e.target)) hideAll();
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.blur();
      hideAll();
    }
  });

  searchInput.addEventListener('focus', () => {
    if (!searchInput.value.trim()) toggleCategories(true);
  });

  // tiny delay so clicks on results still work
  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      if (!container.contains(document.activeElement)) {
        resultsList.style.display = 'none';
      }
    }, 120);
  });
});
