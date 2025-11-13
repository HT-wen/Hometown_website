// Menu & search toggles (keeps your existing classes/ids)
import { qs, on } from '../lib/dom.js';

export function initUI() {
  // Mobile menu open/close
  const menuBtn  = qs('.mobile_show i');
  const closeBtn = qs('#xmark');
  const sidebar  = qs('.nav-bar');
  on(menuBtn,  'click', () => sidebar?.classList.add('active'));
  on(closeBtn, 'click', () => sidebar?.classList.remove('active'));

  // Search box toggles
  const searchBar           = qs('.search-bar');
  const searchBox           = qs('.search_results_box');
  const searchMobileBar     = qs('.mobile_search_bar');
  const mobileSearchResults = qs('.mobile_search_results');
  on(searchBar,       'click', () => searchBox?.classList.toggle('active'));
  on(searchMobileBar, 'click', () => mobileSearchResults?.classList.toggle('active'));

  // Backward-compat for existing onfocus/onblur attributes in HTML
  window.showSearchResults = () => searchBox?.classList.add('active');
  window.hideSearchResults = () => searchBox?.classList.remove('active');
}
