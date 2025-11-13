// Preserve your switchLanguage behavior and buttons
import { qsa } from '../lib/dom.js';

export function initLanguage() {
  const enBtn = document.querySelector('button[onclick*="switchLanguage(\'en\')"]');
  const zhBtn = document.querySelector('button[onclick*="switchLanguage(\'zh\')"]');
  if (enBtn) enBtn.onclick = () => switchLanguage('en');
  if (zhBtn) zhBtn.onclick = () => switchLanguage('zh');
}

window.switchLanguage = function(lang) {
  const enNodes = qsa('.lang.en');
  const zhNodes = qsa('.lang.zh');
  if (lang === 'en') {
    enNodes.forEach(n => n.style.display = '');
    zhNodes.forEach(n => n.style.display = 'none');
  } else {
    enNodes.forEach(n => n.style.display = 'none');
    zhNodes.forEach(n => n.style.display = '');
  }
};
