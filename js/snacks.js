// Sample product data for Snacks
const products = [
<<<<<<< HEAD
    { id: 1, name: 'Potato Chips', category: 'chips', price: 2.50, description: 'Large bag', image: 'snackimages/potatochips.png' },
    { id: 2, name: 'Gummy Bears', category: 'candy', price: 1.99, description: '100g pack', image: 'snacksimages/gummy_bears.jpg' },
    { id: 3, name: 'Almonds', category: 'nuts', price: 4.99, description: '200g pack', image: 'snacksimages/almonds.jpg' },
    { id: 4, name: 'Popcorn', category: 'chips', price: 1.50, description: 'Microwave pack', image: 'snacksimages/popcorn.jpg' },
    { id: 5, name: 'Chocolate Bar', category: 'candy', price: 2.99, description: 'Single bar', image: 'snacksimages/chocolate_bar.jpg' }
=======
  
>>>>>>> bc1b52f (Meat update)
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
