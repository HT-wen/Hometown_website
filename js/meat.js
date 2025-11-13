// Sample product data with images, prices, and descriptions
const products = [
    { id: 1, name: 'Beef Banana Shank', category: 'Beef', price: 6.99, description: 'Per lb', image: 'meatimages/Beef Banana Shank.jpg' },
    { id: 2, name: 'Beef Eye of Round', category: 'Beef', price: 6.99, description: 'Per lb', image: 'meatimages/Beef Eye of Round.jpg' },
    { id: 3, name: 'Beef Omasum Tripe', category: 'Beef', price: 7.49, description: 'Per lb', image: 'meatimages/Beef Omasum Tripe.jpg' },
    { id: 4, name: 'Beef Neck Bone', category: 'Beef', price: 2.99, description: 'Per lb', image: 'meatimages/Beef Neck Bone.jpg' },
    { id: 5, name: 'Beef Flank Steak / Belly', category: 'Beef', price: 6.99, description: 'Per lb', image: 'meatimages/Beef Flank Steak Belly.jpg' },
    { id: 6, name: 'Beef Honeycomb Tripe', category: 'Beef', price: 7.99, description: 'Per lb', image: 'meatimages/Beef Honeycomb Tripe.jpg' },
    { id: 7, name: 'Beef Rib Eye Steak', category: 'Beef', price: 12.99, description: 'Per lb', image: 'meatimages/Beef Rib Eye Steak.jpg' },
    { id: 8, name: 'Pork Neck Bone', category: 'Pork', price: 2.69, description: 'Per lb', image: 'meatimages/Pork Neck Bone.jpg' },
    { id: 9, name: 'Beef Tendon Double', category: 'Beef', price: 7.99, description: 'Per lb', image: 'meatimages/Beef Tendon Double.jpg' },
    { id: 10, name: 'Beef Short Ribs', category: 'Beef', price: 9.99, description: 'Per lb', image: 'meatimages/Beef Short Ribs.jpg' },
    { id: 11, name: 'Pork Leg Bone', category: 'Pork', price: 1.99, description: 'Per lb', image: 'meatimages/Pork Leg Bone.jpg' },
    { id: 12, name: 'Beef Flank Steak', category: 'Beef', price: 8.99, description: 'Per lb', image: 'meatimages/Beef Flank Steak.jpg' },
    { id: 13, name: 'Pork Feet Hind', category: 'Pork', price: 2.49, description: 'Per lb', image: 'meatimages/Pork Feet Hind.jpg' },
    { id: 14, name: 'Pork Ear', category: 'Pork', price: 4.99, description: 'Per lb', image: 'meatimages/Pork Ear.jpg' },
    { id: 15, name: 'Pork Tongue', category: 'Pork', price: 3.99, description: 'Per lb', image: 'meatimages/Pork Tongue.jpg' },
    { id: 16, name: 'Ground Pork Butt', category: 'Pork', price: 3.99, description: 'Per lb', image: 'meatimages/Ground Pork Butt.jpg' },
    { id: 17, name: 'Pork Back Bone', category: 'Pork', price: 1.99, description: 'Per lb', image: 'meatimages/Pork Back Bone.jpg' },
    { id: 18, name: 'Pork Stomach', category: 'Pork', price: 4.49, description: 'Per lb', image: 'meatimages/Pork Stomach.jpg' },
    { id: 19, name: 'Pork Feet Long', category: 'Pork', price: 2.99, description: 'Per lb', image: 'meatimages/Pork Feet Long.jpg' },
    { id: 20, name: 'Pork Belly', category: 'Pork', price: 4.99, description: 'Per lb', image: 'meatimages/Pork Belly.jpg' },
    { id: 21, name: 'Cooked Pork Blood', category: 'Pork', price: 4.99, description: 'Per lb', image: 'meatimages/Cooked Pork Blood.jpg' },
    { id: 22, name: 'Ground Pork', category: 'Pork', price: 2.49, description: 'Per lb', image: 'meatimages/Ground Pork.jpg' },
    { id: 23, name: 'Pork Loin', category: 'Pork', price: 3.99, description: 'Per lb', image: 'meatimages/Pork Loin.jpg' },
    { id: 24, name: 'Pork Melt', category: 'Pork', price: 2.99, description: 'Per lb', image: 'meatimages/Pork Melt.jpg' },
    { id: 25, name: 'Pork Heart', category: 'Pork', price: 4.99, description: 'Per lb', image: 'meatimages/Pork Heart.jpg' },
    { id: 26, name: 'Pork Kidney', category: 'Pork', price: 3.49, description: 'Per lb', image: 'meatimages/Pork Kidney.jpg' },
    { id: 27, name: 'Pork Spare Ribs', category: 'Pork', price: 2.99, description: 'Per lb', image: 'meatimages/Pork Spare Ribs.jpg' },
    { id: 28, name: 'Pork Liver', category: 'Pork', price: 3.49, description: 'Per lb', image: 'meatimages/Pork Liver.jpg' },
    { id: 29, name: 'Pork Hock', category: 'Pork', price: 2.99, description: 'Per lb', image: 'meatimages/Pork Hock.jpg' },
    { id: 30, name: 'Pork Snout', category: 'Pork', price: 4.99, description: 'Per lb', image: 'meatimages/Pork Snout.jpg' },
    { id: 31, name: 'Pork Tail', category: 'Pork', price: 2.99, description: 'Per lb', image: 'meatimages/Pork Tail.jpg' },
{ id: 32, name: 'Duck Wing', category: 'Duck', price: 4.99, description: 'Per lb', image: 'meatimages/Duck Wing.jpg' },
{ id: 33, name: 'Duck Feet with Bone', category: 'Duck', price: 4.99, description: 'Per lb', image: 'meatimages/Duck Feet with Bone.jpg' },
{ id: 34, name: 'Pork Intestines', category: 'Pork', price: 6.49, description: 'Per lb', image: 'meatimages/Pork Intestines.jpg' },
{ id: 35, name: 'Pork Uteri', category: 'Pork', price: 3.99, description: 'Per lb', image: 'meatimages/Pork Uteri.jpg' },
{ id: 36, name: 'Turkey Gizzards', category: 'Turkey', price: 2.49, description: 'Per lb', image: 'meatimages/Turkey Gizzards.jpg' },
{ id: 37, name: 'Duck Gizzards', category: 'Duck', price: 5.99, description: 'Per lb', image: 'meatimages/Duck Gizzards.jpg' },
{ id: 38, name: 'Chicken Feet', category: 'Chicken', price: 2.99, description: 'Per lb', image: 'meatimages/Chicken Feet.jpg' },
{ id: 39, name: 'Duck Neck', category: 'Duck', price: 3.99, description: 'Per lb', image: 'meatimages/Duck Neck.jpg' },
{ id: 40, name: 'Turkey Wing', category: 'Turkey', price: 2.99, description: 'Per lb', image: 'meatimages/Turkey Wing.jpg' },
{ id: 41, name: 'Turkey Drumstick', category: 'Turkey', price: 2.99, description: 'Per lb', image: 'meatimages/Turkey Drumstick.jpg' },
{ id: 42, name: 'Chicken Gizzards', category: 'Chicken', price: 1.69, description: 'Per lb', image: 'meatimages/Chicken Gizzards.jpg' },
{ id: 43, name: 'Duck Tongue', category: 'Duck', price: 22.99, description: 'Per lb', image: 'meatimages/Duck Tongue.jpg' },
{ id: 44, name: 'Boneless Chicken Breast', category: 'Chicken', price: 3.99, description: 'Per lb', image: 'meatimages/Boneless Chicken Breast.jpg' },
{ id: 45, name: 'Chicken Liver', category: 'Chicken', price: 1.69, description: 'Per lb', image: 'meatimages/Chicken Liver.jpg' },
{ id: 46, name: 'Chicken Heart', category: 'Chicken', price: 1.99, description: 'Per lb', image: 'meatimages/Chicken Heart.jpg' },
{ id: 47, name: 'Duck Head', category: 'Duck', price: 2.99, description: 'Per lb', image: 'meatimages/Duck Head.jpg' },
{ id: 48, name: 'Lamb Shanks', category: 'Lamb', price: 12.99, description: 'Per lb', image: 'meatimages/Lamb Shanks.jpg' },
{ id: 49, name: 'Chicken Wings', category: 'Chicken', price: 3.99, description: 'Per lb', image: 'meatimages/Chicken Wings.jpg' },
{ id: 50, name: 'Chicken ¼ Leg', category: 'Chicken', price: 0.99, description: 'Per lb', image: 'meatimages/Chicken ¼ Leg.jpg' },
{ id: 51, name: 'Chicken Drumstick', category: 'Chicken', price: 1.49, description: 'Per lb', image: 'meatimages/Chicken Drumstick.jpg' },
{ id: 52, name: 'Quails', category: 'Chicken', price: 14.99, description: 'Per unit', image: 'meatimages/Quails.jpg' },
{ id: 53, name: 'Squab', category: 'Chicken', price: 16.99, description: 'Per unit', image: 'meatimages/Squab.jpg' },
{ id: 54, name: 'Silky Chicken', category: 'Chicken', price: 12.99, description: 'Per unit', image: 'meatimages/Silky Chicken.jpg' },
{ id: 55, name: 'Wingtat Chicken', category: 'Chicken', price: 16.99, description: 'Per unit', image: 'meatimages/Wingtat Chicken.jpg' },
{ id: 56, name: 'Stewing Hen', category: 'Chicken', price: 5.99, description: 'Per unit', image: 'meatimages/Stewing Hen.jpg' },
{ id: 57, name: 'Rabbit Meat', category: 'Rabbit', price: 3.99, description: 'Per unit', image: 'meatimages/Rabbit Meat.jpg' },
{ id: 58, name: 'Pork Chop', category: 'Pork', price: 3.99, description: 'Per lb', image: 'meatimages/Pork Chop.jpg' },
{ id: 59, name: 'Water Duck', category: 'Duck', price: 18.00, description: 'Per unit', image: 'meatimages/Water Duck.jpg' },
{ id: 60, name: 'Muscovy Duck', category: 'Duck', price: 7.99, description: 'Per unit', image: 'meatimages/Muscovy Duck.jpg' },
{ id: 61, name: 'Partridge', category: 'Chicken', price: 11.99, description: 'Per unit', image: 'meatimages/Partridge.jpg' },
{ id: 62, name: 'Goose', category: 'Chicken', price: 12.99, description: 'Per unit', image: 'meatimages/Goose.jpg' },
{ id: 63, name: 'Rock Yellow Chicken', category: 'Chicken', price: 4.49, description: 'Per unit', image: 'meatimages/Rock Yellow Chicken.jpg' },
{ id: 64, name: 'Yellow Rooster', category: 'Chicken', price: 21.99, description: 'Per unit', image: 'meatimages/Yellow Rooster.jpg' },
{ id: 65, name: 'Duck Feet Boneless', category: 'Duck', price: 10.99, description: 'Per unit', image: 'meatimages/Duck Feet Boneless.jpg' },
{ id: 66, name: 'Duck Chitterlings', category: 'Duck', price: 0.00, description: 'Per unit', image: 'meatimages/Duck Chitterlings.jpg' },
{ id: 67, name: 'Whole Young Turkey', category: 'Turkey', price: 1.99, description: 'Per lb', image: 'meatimages/Whole Young Turkey.jpg' },
{ id: 68, name: 'Duck', category: 'Duck', price: 4.99, description: 'Per lb', image: 'meatimages/Duck.jpg' },
{ id: 69, name: 'Turkey Neck', category: 'Turkey', price: 1.49, description: 'Per lb', image: 'meatimages/Turkey Neck.jpg' },
{ id: 70, name: 'Turkey Leg', category: 'Turkey', price: 2.49, description: 'Per lb', image: 'meatimages/Turkey Leg.jpg' },
{ id: 71, name: 'Turkey Tail', category: 'Turkey', price: 2.99, description: 'Per lb', image: 'meatimages/Turkey Tail.jpg' },
{ id: 72, name: 'Chicken Mid Wing', category: 'Chicken', price: 4.99, description: 'Per lb', image: 'meatimages/Chicken Mid Wing.jpg' },
{ id: 73, name: 'Chicken Skin', category: 'Chicken', price: 1.49, description: 'Per lb', image: 'meatimages/Chicken Skin.jpg' },
{ id: 74, name: 'Chicken Bone', category: 'Chicken', price: 1.19, description: 'Per lb', image: 'meatimages/Chicken Bone.jpg' },
{ id: 75, name: 'Beef Bull Fries', category: 'Beef', price: 5.99, description: 'Per lb', image: 'meatimages/Beef Bull Fries.jpg' },
{ id: 76, name: 'Beef Weasand', category: 'Beef', price: 3.99, description: 'Per lb', image: 'meatimages/Beef Weasand.jpg' },
{ id: 77, name: 'Beef Liver', category: 'Beef', price: 3.99, description: 'Per lb', image: 'meatimages/Beef Liver.jpg' },
{ id: 78, name: 'Beef Kidney', category: 'Beef', price: 2.45, description: 'Per lb', image: 'meatimages/Beef Kidney.jpg' },
{ id: 79, name: 'Beef Bone', category: 'Beef', price: 1.99, description: 'Per lb', image: 'meatimages/Beef Bone.jpg' },
{ id: 80, name: 'Beef Skin', category: 'Beef', price: 0.00, description: 'Per lb', image: 'meatimages/Beef Skin.jpg' },
{ id: 81, name: 'Beef Kidney Suet', category: 'Beef', price: 1.49, description: 'Per lb', image: 'meatimages/Beef Kidney Suet.jpg' },
{ id: 82, name: 'Beef Feet', category: 'Beef', price: 2.99, description: 'Per lb', image: 'meatimages/Beef Feet.jpg' },
{ id: 83, name: 'Beef Oxtail', category: 'Beef', price: 10.99, description: 'Per lb', image: 'meatimages/Beef Oxtail.jpg' },
{ id: 84, name: 'Lamb Back Australia Halal', category: 'Lamb', price: 14.99, description: 'Per unit', image: 'meatimages/Lamb Back Australia Halal.jpg' },
{ id: 85, name: 'Goat Meat w/Skin', category: 'Goat', price: 3.99, description: 'Per lb', image: 'meatimages/Goat Meat with Skin.jpg' },
{ id: 86, name: 'Goat Meat Halal', category: 'Goat', price: 6.99, description: 'Per lb', image: 'meatimages/Goat Meat Halal.jpg' },
{ id: 87, name: 'Lamb Kidney', category: 'Lamb', price: 0.00, description: 'Per lb', image: 'meatimages/Lamb Kidney.jpg' },
{ id: 88, name: 'Lamb Shoulder Halal', category: 'Lamb', price: 6.99, description: 'Per lb', image: 'meatimages/Lamb Shoulder Halal.jpg' },
{ id: 89, name: 'Beef Patty Balls w/ Pork Fillings', category: 'Beef', price: 5.99, description: 'Per unit', image: 'meatimages/Beef Patty Balls with Pork Fillings.jpg' },
{ id: 90, name: 'Fish Balls w/ Pork Fillings', category: 'Pork', price: 5.99, description: 'Per unit', image: 'meatimages/Fish Balls with Pork Fillings.jpg' },
{ id: 91, name: 'Pork Balls w/ Pork Filling', category: 'Pork', price: 5.99, description: 'Per unit', image: 'meatimages/Pork Balls with Pork Filling.jpg' },
{ id: 92, name: 'Sliced Beef Aorta', category: 'Beef', price: 5.00, description: 'Per unit', image: 'meatimages/Sliced Beef Aorta.jpg' },
{ id: 93, name: 'Scalded Beef Omasum Tripe', category: 'Beef', price: 5.00, description: 'Per unit', image: 'meatimages/Scalded Beef Omasum Tripe.jpg' },
{ id: 94, name: 'Pork Belly Slice', category: 'Pork', price: 9.99, description: 'Per lb', image: 'meatimages/Pork Belly Slice.jpg' },
{ id: 95, name: 'Sliced Lamb Roll', category: 'Lamb', price: 12.99, description: 'Per lb', image: 'meatimages/Sliced Lamb Roll.jpg' },
{ id: 96, name: 'Sliced Beef Sirloin', category: 'Beef', price: 9.99, description: 'Per lb', image: 'meatimages/Sliced Beef Sirloin.jpg' },
{ id: 97, name: 'Sliced Beef Brisket', category: 'Beef', price: 11.99, description: 'Per lb', image: 'meatimages/Sliced Beef Brisket.jpg' },
{ id: 98, name: 'Frozen Frog Legs', category: 'Frog', price: 14.00, description: 'Per unit', image: 'meatimages/Frozen Frog Legs.jpg' },
{ id: 99, name: 'Frozen Frog Selections with Flavor Sauce', category: 'Frog', price: 9.99, description: 'Per unit', image: 'meatimages/Frozen Frog Selections with Flavor Sauce.jpg' },

    
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



