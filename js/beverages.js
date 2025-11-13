// Sample product data for Beverages
const products = [
    { id: 1, name: 'Coca-Cola', category: 'soft-drinks', price: 1.50, description: '12 oz can', image: 'beverageimages/cocacola.png' },
    { id: 2, name: 'Aloe', category: 'juices', price: 3.99, description: '1L bottle', image: 'beverageimages/aloe.png' },
    { id: 3, name: 'Basil seed', category: 'water', price: 0.99, description: '500ml bottle', image: 'beverageimages/basil.png' },
    { id: 4, name: 'Pineapple', category: 'soft-drinks', price: 1.50, description: '12 oz can', image: 'beverageimages/pineapple.png' },
    { id: 5, name: 'Yoga vera', category: 'juices', price: 4.50, description: '1L bottle', image: 'beverageimages/yoga vera.png' },
    { id: 6, name: 'Yogurt', category: 'juices', price: 4.50, description: '1L bottle', image: 'beverageimages/yogurt.png' }
];

// Function to display products with description and price
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            
        `;
        productList.appendChild(productDiv);
    });
}

// Initial display of all products
displayProducts(products);

// Price Label Update
function updatePriceLabel(value) {
    document.getElementById('price-label').textContent = `$${value}`;
}

// Filter Functionality
document.getElementById('price-range').addEventListener('input', function() {
    filterProducts();
});

document.getElementById('category-filter').addEventListener('change', function() {
    filterProducts();
});

// Filtering products by price and category
function filterProducts() {
    const priceLimit = parseFloat(document.getElementById('price-range').value);
    const selectedCategory = document.getElementById('category-filter').value;

    const filteredProducts = products.filter(product => {
        const priceMatch = product.price <= priceLimit;
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        return priceMatch && categoryMatch;
    });

    displayProducts(filteredProducts); // Display filtered products
}
