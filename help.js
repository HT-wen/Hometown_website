// Sample product data with images, prices, and descriptions
const products = [
    //list of products
];

// --- helpers ---
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

// Price label live update
function updatePriceLabel(value) {
  $('#price-label').textContent = `$${Number(value).toFixed(0)}`;
}

// Render products using <template>
function displayProducts(productsToDisplay) {
  const list = $('#product-list');
  list.innerHTML = '';

  if (!productsToDisplay.length) {
    const msg = list.dataset.emptyText || 'No products match your filters.';
    list.innerHTML = `<p class="empty">${msg}</p>`;
    return;
  }

  const tpl = $('#product-card');

  productsToDisplay.forEach(p => {
    const node = tpl.content.firstElementChild.cloneNode(true);

    const img = $('img', node);
    img.src = p.image;
    img.alt = p.name;
    img.loading = 'lazy';
    // store a full-size path if you have it; otherwise same as thumb
    img.dataset.full = p.image;

    $('h4', node).textContent = p.name;
    $('.price', node).textContent = `$${p.price.toFixed(2)}`;
    $('.description', node).textContent = p.description;

    list.appendChild(node);
  });
}

// Filters
function filterProducts() {
  const priceLimit = parseFloat($('#price-range').value);
  const category = $('#category-filter').value;

  const filtered = products.filter(p => {
    const priceMatch = p.price <= priceLimit;
    const categoryMatch = category === 'all' || p.category === category;
    return priceMatch && categoryMatch;
  });

  displayProducts(filtered);
}

// Init
updatePriceLabel($('#price-range').value);
displayProducts(products);

// Events
$('#price-range').addEventListener('input', e => {
  updatePriceLabel(e.target.value);
  filterProducts();
});
$('#category-filter').addEventListener('change', filterProducts);
