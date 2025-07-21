(function () {
	const slider = document.querySelector(".certificates__slider");

	if (!slider) return;

	const certificatesSliderParams = {
		slidesPerView: 1,
		speed: 600,
		navigation: {
			prevEl: ".certificates__button--prev",
			nextEl: ".certificates__button--next",
		},
		pagination: {
			el: ".certificates__pagination",
			type: "custom",
			renderCustom: function (slider, current, total) {
				return Array.from({ length: total }, (_, i) => {
					const num = i + 1;
					return num === current ? `<span class="certificates__pagination-item active">${num}</span>` : `<span class="certificates__pagination-item">${num}</span>`;
				}).join("");
			},
		},
	};
	new Swiper(slider, certificatesSliderParams);
})();