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

(function () {
	const galleryItems = [
		{
			src: "assets/docs/awards/award-example.jpg",
			type: "image",
			title: "Награда от губернатора Самарской области В. А. Федорищева",
			docId: "award-example",
		},
		{
			src: "assets/docs/awards/award-example1.jpg",
			type: "image",
			title: "Награда 'Лидер в области правовых услуг' от Национального совета адвокатов",
			docId: "award-example1",
		},
		{
			src: "assets/docs/awards/award-example2.jpg",
			type: "image",
			title: "Золотая медаль за достижения в области права от Международной юридической ассоциации",
			docId: "award-example2",
		},
	];
	document.querySelectorAll(".awards__item[data-doc]").forEach((card) => {
		card.addEventListener("click", () => {
			document.activeElement?.blur();

			const type = card.getAttribute("data-doc");
			const index = galleryItems.findIndex((item) => item.docId === type);

			if (index !== -1) {
				Fancybox.show(
					galleryItems.map((item, i) => ({
						src: item.src,
						type: item.type,
						thumb: item.thumb || "",
						caption: `${item.title} <span class="counter">${i + 1} / ${galleryItems.length}</span>`,
					})),
					{
						startIndex: index,
						Carousel: {
							axis: "x",
						},
						wheel: "slide",
						Thumbs: false,
						Toolbar: false,
					}
				);
			}
		});
	});
})();
