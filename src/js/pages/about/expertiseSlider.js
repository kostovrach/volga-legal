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

new Swiper(".expertise__slider", expertiseSliderParams);
