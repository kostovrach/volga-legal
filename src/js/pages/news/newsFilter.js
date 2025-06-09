(function () {
	const filters = document.querySelectorAll(".news__filter");
	const items = document.querySelectorAll(".news__item");

	if (!filters.length || !items.length) return;

	filters.forEach((filter) => {
		filter.addEventListener("click", () => {
			const selectedType = filter.dataset.type;

			filters.forEach((f) => f.classList.remove("active"));
			filter.classList.add("active");

			items.forEach((item) => {
				const itemType = item.dataset.type;
				item.style.display = selectedType === "all" || itemType === selectedType ? "" : "none";
			});
		});
	});
})();
