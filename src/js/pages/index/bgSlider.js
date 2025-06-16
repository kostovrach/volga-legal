(function () {
	const sliderEl = document.querySelector(".intro__slider");
	if (!sliderEl) return;

	const bgSliderParams = {
		pagination: {
			el: ".intro__slider-pagination",
			clickable: true,
		},
		loop: true,
		autoplay: true,
		speed: 1500,
		parallax: true,
		effect: "creative",
		creativeEffect: {
			next: {
				translate: ["-100%", 0, 0],
			},
		},
	};

	new Swiper(sliderEl, bgSliderParams);
})();
