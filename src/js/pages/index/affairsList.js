const items = document.querySelectorAll('.affairs__item');

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})