function scrollDealsLeft() {
    document.getElementById('dealsSlider').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollDealsRight() {
    document.getElementById('dealsSlider').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}
