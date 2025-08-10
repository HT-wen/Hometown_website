// Sample product data with images and descriptions
const products = [
    { id: 1, name: 'Spicy Ramen', category: 'ramen', price: 3.99, description: 'Pack of 5', image: 'ramenimages/chickenramen.png' },
    { id: 2, name: 'Spicy Chicken Ramen', category: 'ramen', price: 2.99, description: 'Pack of 6', image: 'ramenimages/spicy buldak chicken.png' },
    { id: 3, name: 'Beef Ramen', category: 'ramen', price: 3.49, description: 'Pack of 5', image: 'ramenimages/Rice stick.png' },
    { id: 4, name: 'Udon Noodles', category: 'noodles', price: 4.99, description: '2 lb', image: 'ramenimages/rice vermicelli.png' },
    { id: 5, name: 'Soba Noodles', category: 'noodles', price: 3.79, description: '3 lb', image: 'ramenimages/sinbo canton noodle.png' }
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
