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
    document.querySelectorAll('.thumbnail, .gallery-item img').forEach(img => {
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

    // ===============================
    // Events scroll buttons (keep as-is)
    // ===============================
    function scrollLeft(rowNumber) {
        const row = document.getElementById(`row-${rowNumber}`);
        if (row) {
            row.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }

    function scrollRight(rowNumber) {
        const row = document.getElementById(`row-${rowNumber}`);
        if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }

    window.scrollLeft = scrollLeft;
    window.scrollRight = scrollRight;

    // ===============================
    // Gallery pagination logic
    // ===============================
    let allGalleryImages = [];
    let currentGalleryPage = 0;
    const itemsPerPage = 12;

    // Load all existing images from HTML once
    document.querySelectorAll('#gallery-scroll .gallery-item img').forEach(img => {
        allGalleryImages.push(img.src);
    });

    function renderGalleryPage() {
        const gallery = document.getElementById("gallery-scroll");
        gallery.innerHTML = ""; // Clear previous items

        const start = currentGalleryPage * itemsPerPage;
        const end = start + itemsPerPage;
        const pageImages = allGalleryImages.slice(start, end);

        pageImages.forEach(src => {
            const div = document.createElement("div");
            div.classList.add("gallery-item");

            const img = document.createElement("img");
            img.src = src;
            img.alt = "Gallery Image";

            // Re-attach modal event listener
            img.addEventListener('click', () => {
                modal.style.display = 'flex';
                modalImage.src = img.src;
                modalImage.alt = img.alt || 'Preview Image';
            });

            div.appendChild(img);
            gallery.appendChild(div);
        });
    }

    function scrollLeftGallery() {
        if (currentGalleryPage > 0) {
            currentGalleryPage--;
            renderGalleryPage();
        }
    }

    function scrollRightGallery() {
        const totalPages = Math.ceil(allGalleryImages.length / itemsPerPage);
        if (currentGalleryPage < totalPages - 1) {
            currentGalleryPage++;
            renderGalleryPage();
        }
    }

    // Expose gallery functions globally
    window.scrollLeftGallery = scrollLeftGallery;
    window.scrollRightGallery = scrollRightGallery;

    // Initial render
    renderGalleryPage();
});
<<<<<<< HEAD

window.onload = function () {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const thumbnail = document.getElementById('thumbnail');
  const closeBtn = document.getElementById('closeBtn');

  thumbnail.onclick = function () {
    modal.style.display = 'flex';
    modalImage.src = this.src;
  };

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
};

=======
>>>>>>> 53d78e836151602cb4267ad806c748a729543f45
