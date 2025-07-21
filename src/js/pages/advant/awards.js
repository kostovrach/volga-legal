(function () {
	const list = document.querySelector(".awards__list");
	const items = document.querySelectorAll(".awards__item");
	const showButton = document.querySelector(".awards__button-show");

    if (!list || !items.length || !showButton) return;

	const batchSize = 5;
	let visibleCount = 0;

	function updateVisible() {
		items.forEach((item, i) => {
			item.style.display = i < visibleCount ? "" : "none";
		});

		if (visibleCount >= items.length) {
			showButton.classList.add("disable");
			showButton.disabled = true;
		}
	}

	function initAwardsList() {
		visibleCount = batchSize;
		updateVisible();

		showButton.addEventListener("click", () => {
			visibleCount += batchSize;
			updateVisible();
		});
	}

	initAwardsList();
})();
