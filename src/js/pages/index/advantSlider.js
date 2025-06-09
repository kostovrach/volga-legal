(function () {
	const sliderEl = document.querySelector('.intro__advant-slider');
	if (!sliderEl) return;

	const advantSliderParams = {
		slidesPerView: 'auto',
		spaceBetween: 32,
		navigation: {
			nextEl: ".intro__advant-navigation-button--next",
			prevEl: ".intro__advant-navigation-button--prev",
		},
	};

	new Swiper(sliderEl, advantSliderParams);
})();
