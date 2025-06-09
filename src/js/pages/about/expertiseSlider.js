(function () {
	const sliderEl = document.querySelector(".expertise__slider");
	if (!sliderEl) return;

	const expertiseSliderParams = {
		slidesPerView: "auto",
		spaceBetween: 16,
		freeMode: true,
		loop: true,
		waitForTransition: false,
		autoplay: {
			delay: 0,
			paused: false,
		},
		speed: 8000,
	};

	new Swiper(sliderEl, expertiseSliderParams);
})();
