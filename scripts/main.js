// Entry point for every page (safe, no design changes)
import './firebase/init.js';
import { initUI } from './modules/ui.js';
import { initLanguage } from './modules/language.js';
import { initLightbox } from './modules/lightbox.js';


document.addEventListener('DOMContentLoaded', () => {
  initUI();
  initLanguage();
  initLightbox();
});
