// ramen.js

// Sample product data with images and descriptions
const products = [
    { id: 1, name: 'Spicy Ramen', category: 'ramen', price: 3.99, description: 'Pack of 5', image: 'ramenimages/chickenramen.png' },
    { id: 2, name: 'Spicy Chicken Ramen', category: 'ramen', price: 2.99, description: 'Pack of 6', image: 'ramenimages/spicy%20buldak%20chicken.png' }, // URL-encoded space
    { id: 3, name: 'Beef Ramen', category: 'ramen', price: 3.49, description: 'Pack of 5', image: 'ramenimages/Rice%20stick.png' },
    { id: 4, name: 'Udon Noodles', category: 'noodles', price: 4.99, description: '2 lb', image: 'ramenimages/rice%20vermicelli.png' },
    { id: 5, name: 'Soba Noodles', category: 'noodles', price: 3.79, description: '3 lb', image: 'ramenimages/sinbo%20canton%20noodle.png' },
    { id: 6, name: 'Nongshim Potato Noodles', category: 'ramen', price: 7.99, description: 'Pack of 4', image: 'ramenimages/nongshim_potato_noodles.png' },
    { id: 7, name: 'Indomie Mi Goreng Fried Noodles', category: 'ramen', price: 3.99, description: 'Pack of 5', image: 'ramenimages/indomie_mi_goreng.png' },
    { id: 8, name: 'Mama Shrimp Tom Yum Flavor', category: 'ramen', price: 0.89, description: 'Pack of 1', image: 'ramenimages/mama_tom_yum.png' },
    { id: 9, name: 'Omachi Instant Noodles Shrimp Sour & Hot', category: 'ramen', price: 4.99, description: 'Pack of 1', image: 'ramenimages/omachi_shrimp_hot.png' },
    { id: 10, name: 'Goku-Uma Ramen Noodles', category: 'ramen', price: 5.99, description: 'Pack of 5', image: 'ramenimages/goku_uma.png' },
    { id: 11, name: 'Tokyo Noodle Chicken Flavor', category: 'ramen', price: 2.79, description: 'Pack of 4', image: 'ramenimages/tokyo_noodle_chicken.png' },
    { id: 12, name: 'Sapporo Ichiban Shio Ramen', category: 'ramen', price: 5.99, description: 'Pack of 5', image: 'ramenimages/sapporo_shio.png' },
    { id: 13, name: 'Sanukiya Somen', category: 'cup noodles', price: 3.99, description: 'Cup (5.78 oz)', image: 'ramenimages/sanukiya_somen.png' },
    { id: 14, name: 'Sapporo Ichiban Miso Ramen', category: 'ramen', price: 5.99, description: 'Pack of 5', image: 'ramenimages/sapporo_miso.png' },
    { id: 15, name: 'Sanukiya Udon', category: 'cup noodles', price: 3.99, description: 'Cup (7.17 oz)', image: 'ramenimages/sanukiya_udon.png' },
    { id: 16, name: 'Sapporo Ichiban Tonkotsu Ramen', category: 'ramen', price: 5.99, description: 'Pack of 5', image: 'ramenimages/sapporo_tonkotsu.png' },
    { id: 17, name: 'Samyang Buldak Carbonara Spicy Ramen', category: 'ramen', price: 8.99, description: 'Pack of 5', image: 'ramenimages/buldak_carbonara.png' },
    { id: 18, name: 'Nongshim Shin Ramyun', category: 'ramen', price: 6.99, description: 'Pack of 4', image: 'ramenimages/nongshim_shin_ramyun.png' },
    { id: 19, name: 'Paldo Bibimmen Spicy Sweet Sour Noodles', category: 'ramen', price: 7.99, description: 'Pack of 5', image: 'ramenimages/paldo_bibimmen.png' },
    { id: 20, name: 'Nongshim Champong Ramyun', category: 'ramen', price: 7.99, description: 'Pack of 4', image: 'ramenimages/nongshim_champong.png' },
    { id: 21, name: 'Ottogi Jin Jjajang Smoked Black Bean', category: 'ramen', price: 10.99, description: 'Pack of 4', image: 'ramenimages/ottogi_jin_jjajang.png' },
    { id: 22, name: 'Nongshim Soon Veggie Noodle Soup', category: 'ramen', price: 7.99, description: 'Pack of 4', image: 'ramenimages/nongshim_soon_veggie.png' },
    { id: 23, name: 'Paldo Jjajangmen', category: 'ramen', price: 8.99, description: 'Pack of 4', image: 'ramenimages/paldo_jjajangmen.png' },
    { id: 24, name: 'Ottogi Beijing Jjajang Ramen', category: 'ramen', price: 8.99, description: 'Pack of 4', image: 'ramenimages/ottogi_beijing_jjajang.png' },
    { id: 25, name: 'Samyang Buldak Original Spicy Ramen', category: 'ramen', price: 8.99, description: 'Pack of 5', image: 'ramenimages/buldak_original.png' },
    { id: 26, name: 'Nongshim White Champong Seafood Flavor', category: 'ramen', price: 6.99, description: 'Pack of 4', image: 'ramenimages/nongshim_white_champong.png' },
    { id: 27, name: 'Nongshim Chapagetti Jjajang Noodles', category: 'ramen', price: 7.99, description: 'Pack of 4', image: 'ramenimages/nongshim_chapagetti.png' },
    { id: 28, name: 'Ottogi Jin Ramen Veggie', category: 'ramen', price: 8.99, description: 'Pack of 5', image: 'ramenimages/ottogi_jin_veggie.png' },
    { id: 29, name: 'Samyang Buldak Habanero Lime Spicy Ramen', category: 'ramen', price: 8.99, description: 'Pack of 5', image: 'ramenimages/buldak_habanero_lime.png' },
    { id: 30, name: 'Nongshim Ansung Noodles (Bean & Mushroom)', category: 'ramen', price: 6.99, description: 'Pack of 4', image: 'ramenimages/nongshim_ansung.png' }
  ];
  
  // Render products
  function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    if (!productList) return;
  
    productList.innerHTML = '';
    const frag = document.createDocumentFragment();
  
    productsToDisplay.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product-item';
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h4>${product.name}</h4>
        <p class="price">$${Number(product.price).toFixed(2)}</p>
        <p class="description">${product.description}</p>
      `;
      frag.appendChild(productDiv);
    });
  
    productList.appendChild(frag);
  }
  
  // Initial render
  document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    // Ensure price label matches initial slider value
    const range = document.getElementById('price-range');
    if (range) {
      updatePriceLabel(range.value);
    }
  });
  
  // Update price label
  function updatePriceLabel(value) {
    const label = document.getElementById('price-label');
    if (label) label.textContent = `$${value}`;
  }
  
  // Filter logic
  function filterProducts() {
    const range = document.getElementById('price-range');
    const categorySel = document.getElementById('category-filter');
  
    const priceLimit = range ? parseFloat(range.value) : Infinity;
    const selectedCategory = categorySel ? categorySel.value : 'all';
  
    const filtered = products.filter((p) => {
      const priceMatch = p.price <= priceLimit;
      const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory;
      return priceMatch && categoryMatch;
    });
  
    displayProducts(filtered);
  }
  
  // Events
  document.addEventListener('DOMContentLoaded', () => {
    const range = document.getElementById('price-range');
    const categorySel = document.getElementById('category-filter');
  
    if (range) {
      range.addEventListener('input', (e) => {
        updatePriceLabel(e.target.value);
        filterProducts();
      });
    }
  
    if (categorySel) {
      categorySel.addEventListener('change', filterProducts);
    }
  });
  