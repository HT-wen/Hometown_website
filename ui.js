// ui.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const menuBarBtn = document.querySelector('.mobile_show');
    const xmarkBtn = document.getElementById('xmark');
    const menuSidebar = document.querySelector('.nav-bar');
  
    if (menuBarBtn && menuSidebar) {
      menuBarBtn.addEventListener('click', () => {
        menuSidebar.classList.add('active');
      });
    }
    if (xmarkBtn && menuSidebar) {
      xmarkBtn.addEventListener('click', () => {
        menuSidebar.classList.remove('active');
      });
    }
  
    // Search boxes (desktop + mobile)
    const desktopSearch = document.querySelector('.search-bar');
    const desktopResults = document.querySelector('.search_results_box.mobile_hide');
    const mobileSearch = document.querySelector('.mobile_search_bar');
    const mobileResults = document.querySelector('.mobile_search_results');
  
    // Helper: toggle + click outside close
    function setupToggle(inputEl, resultsEl) {
      if (!inputEl || !resultsEl) return;
  
      function open() {
        resultsEl.classList.add('active');
      }
      function close() {
        resultsEl.classList.remove('active');
      }
  
      inputEl.addEventListener('focus', open);
      inputEl.addEventListener('click', open);
  
      document.addEventListener('click', (e) => {
        const isInside = resultsEl.contains(e.target) || inputEl.contains(e.target);
        if (!isInside) {
          close();
        }
      });
    }
  
    setupToggle(desktopSearch, desktopResults);
    setupToggle(mobileSearch, mobileResults);
  
    // Language switch (uses your existing .lang en/zh elements)
    const langButtons = document.querySelectorAll('.right-section [data-lang]');
    function switchLanguage(lang = 'en') {
      document.querySelectorAll('.lang').forEach((el) => {
        if (el.classList.contains(lang)) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    }
    // default to English on load
    switchLanguage('en');
  
    langButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang') || 'en';
        switchLanguage(lang);
      });
    });
  });
  