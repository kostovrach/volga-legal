const bgSliderParams = {
	pagination: {
		el: ".intro__slider-pagination",
        clickable: true,
	},
	loop: true,
	autoplay: true,
    speed: 1500,
	effect: "creative",
	creativeEffect: {
		next: {
			translate: ["100%", 0, 0],
		},
	},
};

new Swiper(".intro__slider", bgSliderParams);
