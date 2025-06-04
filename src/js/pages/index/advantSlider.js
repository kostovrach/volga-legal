const advantSliderParams = {
    slidesPerView: 'auto',
    spaceBetween: 32,
	navigation: {
		nextEl: ".intro__advant-navigation-button--next",
		prevEl: ".intro__advant-navigation-button--prev",
	},
};

new Swiper('.intro__advant-slider', advantSliderParams)