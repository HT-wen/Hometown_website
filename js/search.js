document.addEventListener('DOMContentLoaded', () => {  

    let products = [];
    let productsLoaded = false;
  
    const searchInput   = document.querySelector('.search-bar');
    const resultsList = document.getElementById('results');
    const categoryBlocks = document.querySelectorAll('.search_results_box .Item');
  
    if (!searchInput || !resultsList) {
      console.error('Missing .search-bar or #results in DOM.');
      return;
    }
  
    async function loadProductsOnce() {
      if (productsLoaded) return;
      try {
        const res = await fetch('../data/products.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        products = await res.json();
        productsLoaded = true;
        console.log('Products loaded:', products.length);
      } catch (err) {
        console.error('Error loading JSON:', err);
      }
    }
  
    function toggleCategories(show) {
      categoryBlocks.forEach(el => el.style.display = show ? 'block' : 'none');
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
      // Show/hide categories
      toggleCategories(!hasQuery);
  
      if (!hasQuery) {
        resultsList.innerHTML = '';
        resultsList.style.display = 'none';
        return;
      }
  
      if (!items.length) {
        resultsList.innerHTML = '<li class="empty">No matches</li>';
      } else {
        console.log("Rendered")
        resultsList.innerHTML = items
          .map(p => `<li class="result-item">${p.name}</li>`)
          .join('');
      }
  
      resultsList.style.display = 'block';
  }
  
    // Live search
    searchInput.addEventListener('input', async (e) => {
      const query = e.target.value;
  
      if (!query.trim()) {
        render([], false); // empty results, show categories
        return;
      }
  
      if (!productsLoaded) await loadProductsOnce();
  
      const matches = searchProducts(query);
      render(matches, true);
    })
  });