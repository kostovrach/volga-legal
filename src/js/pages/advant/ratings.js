(function () {
	const slider = document.querySelector(".ratings__list");

	if (!slider) return;

	const ratingSliderParams = {
		slidesPerView: 1,
		speed: 600,
		navigation: {
			prevEl: ".ratings__button--prev",
			nextEl: ".ratings__button--next",
		},
		pagination: {
			el: ".ratings__pagination",
			type: "custom",
			renderCustom: function (slider, current, total) {
				return Array.from({ length: total }, (_, i) => {
					const num = i + 1;
					return num === current ? `<span class="ratings__pagination-item active">${num}</span>` : `<span class="ratings__pagination-item">${num}</span>`;
				}).join("");
			},
		},
	};
	new Swiper(slider, ratingSliderParams);
})();

(function () {
	const galleryItems = [
		{
			src: "assets/docs/ratings/rating-example.jpg",
			type: "image",
			title: "Chambers Europe 2020",
			docId: "rating-example",
		},
		{
			src: "assets/docs/ratings/rating-example1.jpg",
			type: "image",
			title: "Legal 500 Global",
			docId: "rating-example1",
		},
		{
			src: "assets/docs/ratings/rating-example2.jpg",
			type: "image",
			title: "Benchmark Litigation 2023",
			docId: "rating-example2",
		},
	];
	document.querySelectorAll(".ratings__list-item[data-doc]").forEach((card) => {
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
