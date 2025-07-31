// Close modal and reset image
function closeModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'none';
    modalImage.src = '';
}

// Execute after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeBtn');

    // Modal functionality
    document.querySelectorAll('.thumbnail').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = img.src;
            modalImage.alt = img.alt || 'Preview Image';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Scroll left
    function scrollLeft(rowNumber) {
        const row = document.getElementById(`row-${rowNumber}`);
        if (row) {
            row.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }

    // Scroll right
    function scrollRight(rowNumber) {
        const row = document.getElementById(`row-${rowNumber}`);
        if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }

    // Expose functions globally
    window.scrollLeft = scrollLeft;
    window.scrollRight = scrollRight;
});
