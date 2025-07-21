(function () {
	function initGallery(galleryName) {
		Fancybox.bind(`[data-fancybox="${galleryName}"]`, {
			Toolbar: false,
			Carousel: {
				infinite: false,
			},
			Video: {
				autoplay: false,
			},
		});
	}

	initGallery("ratings");
	initGallery("awards");
	initGallery("certificates");
})();
