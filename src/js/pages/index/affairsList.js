(function () {
	const items = document.querySelectorAll('.affairs__item');
	if (!items.length) return;

	items.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('active');
		});
	});
})();
