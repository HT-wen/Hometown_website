function showSearchResults() {
    document.getElementById('search-results').classList.add('show');
}

function hideSearchResults() {
    document.getElementById('search-results').classList.remove('show');
}

function scrollLeft() {
    document.getElementById('categoryIcons').scrollBy({
        left: -200, 
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('categoryIcons').scrollBy({
        left: 200, 
        behavior: 'smooth'
    });
}

function switchLanguage(lang) {
    document.querySelectorAll('.lang').forEach(element => {
        element.style.display = 'none'; 
    });
    document.querySelectorAll('.' + lang).forEach(element => {
        element.style.display = 'block'; 
    });
}

// Sticky top navigation
window.onscroll = function() {
    var navbar = document.querySelector(".top-bar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
};
document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll left for a specific row
    function scrollLeft(rowNumber) {
        console.log(`Scrolling left for row ${rowNumber}`); // Debug log
        const row = document.getElementById(`row-${rowNumber}`);
        if (row) {
            row.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            console.error(`Row ${rowNumber} not found`);
        }
    }

    // Function to scroll right for a specific row
    function scrollRight(rowNumber) {
        console.log(`Scrolling right for row ${rowNumber}`); // Debug log
        const row = document.getElementById(`row-${rowNumber}`);
        if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
        } else {
            console.error(`Row ${rowNumber} not found`);
        }
    }

    // Attach event listeners to the scroll buttons
    document.querySelectorAll('.scroll-container-wrapper').forEach((container, index) => {
        const rowNumber = index + 1;

        // Find the left and right buttons within each container
        const leftButton = container.querySelector('.scroll-button.left');
        const rightButton = container.querySelector('.scroll-button.right');

        // Attach the correct event listeners
        if (leftButton) {
            leftButton.addEventListener('click', function() {
                console.log(`Left button clicked for row ${rowNumber}`); // Debug log
                scrollLeft(rowNumber);
            });
        }

        if (rightButton) {
            rightButton.addEventListener('click', function() {
                console.log(`Right button clicked for row ${rowNumber}`); // Debug log
                scrollRight(rowNumber);
            });
        }
    });

    // Sticky top navigation
    window.onscroll = function() {
        var navbar = document.querySelector(".top-bar");
        if (navbar && window.pageYOffset > 0) {
            navbar.classList.add("fixed-nav");
        } else if (navbar) {
            navbar.classList.remove("fixed-nav");
        }
    };
});


// Scroll Right for Country Icons
function scrollRightCountry() {
    const countrySlider = document.getElementById('country-slider');
    countrySlider.scrollBy({ left: 300, behavior: 'smooth' });
}

// Scroll Left for Country Icons
function scrollLeftCountry() {
    const countrySlider = document.getElementById('country-slider');
    countrySlider.scrollBy({ left: -300, behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll left for the category section
    function scrollCategoryLeft() {
        const container = document.getElementById('categoryIcons');
        if (container) {
            container.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        } else {
            console.error('Category container not found');
        }
    }

    // Function to scroll right for the category section
    function scrollCategoryRight() {
        const container = document.getElementById('categoryIcons');
        if (container) {
            container.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        } else {
            console.error('Category container not found');
        }
    }

    // Sticky top navigation
    window.onscroll = function() {
        var navbar = document.querySelector(".top-bar");
        if (navbar && window.pageYOffset > 0) {
            navbar.classList.add("fixed-nav");
        } else if (navbar) {
            navbar.classList.remove("fixed-nav");
        }
    };

    // Attach the functions to window so they can be accessed globally
    window.scrollCategoryLeft = scrollCategoryLeft;
    window.scrollCategoryRight = scrollCategoryRight;
});

function scrollBestSellersLeft() {
    const container = document.getElementById('bestSellersSlider');
    if (container) {
        container.scrollBy({
            left: -300, // Adjust this value as needed for the scroll distance
            behavior: 'smooth'
        });
    } else {
        console.error('Best sellers slider container not found');
    }
}

function scrollBestSellersRight() {
    const container = document.getElementById('bestSellersSlider');
    if (container) {
        container.scrollBy({
            left: 300, // Adjust this value as needed for the scroll distance
            behavior: 'smooth'
        });
    } else {
        console.error('Best sellers slider container not found');
    }
}
document.querySelector('.menu-button').addEventListener('click', function() {
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('open');
});


