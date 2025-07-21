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