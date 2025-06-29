(function () {
	const wrapper = document.querySelector(".clients__slider-wrapper");
	const sliderEl = document.querySelector(".clients__slider");

	if (!wrapper || !sliderEl) return;

	const slides = wrapper.querySelectorAll(".clients__slide");
	const duplicatesCount = 2;

	for (let i = 0; i < duplicatesCount; i++) {
		slides.forEach((slide) => {
			const clone = slide.cloneNode(true);
			clone.classList.add("clients__slide--duplicate");
			wrapper.appendChild(clone);
		});
	}

	const clientsSliderParams = {
		spaceBetween: 16,
		loop: true,
		slidesPerView: "auto",
		allowTouchMove: false,
		waitForTransition: false,
		speed: 8000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			pauseOnMouseEnter: false,
		},
	};

	new Swiper(sliderEl, clientsSliderParams);
})();
