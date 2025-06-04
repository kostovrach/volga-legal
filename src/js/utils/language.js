let isHovering = false;

const langSwitcher = document.querySelector('.header__lang');
const currentLang = langSwitcher.querySelector('.header__lang-current--text');
const langItems = langSwitcher.querySelectorAll('.header__lang-list-item');

function setLang(langCode) {
  localStorage.setItem('lang', langCode);
  currentLang.textContent = langCode.toUpperCase();
}

// Наведение — открывает
langSwitcher.addEventListener('mouseenter', () => {
  isHovering = true;
  langSwitcher.classList.add('open');
});
langSwitcher.addEventListener('mouseleave', () => {
  isHovering = false;
  langSwitcher.classList.remove('open');
});

// Клик по текущему языку
currentLang.addEventListener('click', () => {
  // Если уже открыт по ховеру — не трогаем
  if (isHovering) return;
  langSwitcher.classList.toggle('open');
});

// Выбор языка
langItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedLang = item.getAttribute('data-lang');
    setLang(selectedLang);
    langSwitcher.classList.remove('open');
  });
});

// Клик вне — закрывает
document.addEventListener('click', (e) => {
  if (!langSwitcher.contains(e.target)) {
    langSwitcher.classList.remove('open');
  }
});

// Инициализация
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'ru';
  setLang(savedLang);
});
