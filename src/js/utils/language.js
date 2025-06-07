const langSwitcher = document.querySelector('.header__lang');
const buttonLang = langSwitcher.querySelector('.header__lang-current');
const currentLang = langSwitcher.querySelector('.header__lang-current--text');
const langItems = langSwitcher.querySelectorAll('.header__lang-list-item');

function setLang(langCode) {
  localStorage.setItem('lang', langCode);
  currentLang.textContent = langCode.toUpperCase();
}

buttonLang.addEventListener('click', (e) => {
  e.stopPropagation();
  langSwitcher.classList.toggle('open');
});

langItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedLang = item.getAttribute('data-lang');
    setLang(selectedLang);
    langSwitcher.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!langSwitcher.contains(e.target)) {
    langSwitcher.classList.remove('open');
  }
});

window.addEventListener("scroll", () => {
    langSwitcher.classList.remove('open');

})

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'ru';
  setLang(savedLang);
});
