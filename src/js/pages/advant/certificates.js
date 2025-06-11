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

(function () {
	const galleryItems = [
		{
			src: "assets/docs/certificates/certificate-example.jpg",
			type: "image",
			title: "Сертификат юридической квалификации 2021",
			docId: "certificates-example",
		},
		{
			src: "assets/docs/certificates/certificate-example1.jpg",
			type: "image",
			title: "Certificate of Merit in Legal Services",
			docId: "certificates-example1",
		},
		{
			src: "assets/docs/certificates/certificate-example2.jpg",
			type: "image",
			title: "Certificate of Compliance in Legal Standards 2020",
			docId: "certificates-example2",
		},
	];
	document.querySelectorAll(".certificates__item[data-doc]").forEach((card) => {
		card.addEventListener("click", () => {
			document.activeElement?.blur();

			const type = card.getAttribute("data-doc");
			const index = galleryItems.findIndex((item) => item.docId === type);

			if (index !== -1) {
				Fancybox.show(
					galleryItems.map((item, i) => ({
						src: item.src,
						type: item.type,
						thumb: item.thumb || "",
						caption: `${item.title} <span class="counter">${i + 1} / ${galleryItems.length}</span>`,
					})),
					{
						startIndex: index,
						Carousel: {
							axis: "x",
						},
						wheel: "slide",
						Thumbs: false,
						Toolbar: false,
					}
				);
			}
		});
	});
})();