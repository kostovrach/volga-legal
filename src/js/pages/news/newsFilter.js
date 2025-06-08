document.addEventListener('DOMContentLoaded', function () {
  const filters = document.querySelectorAll('.news__filter');
  const items = document.querySelectorAll('.news__item');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const selectedType = filter.dataset.type;

      // Активный класс на фильтре
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      // Фильтрация карточек
      items.forEach(item => {
        const itemType = item.dataset.type;
        if (selectedType === 'all' || itemType === selectedType) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
