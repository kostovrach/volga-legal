(function () {
	const header = document.querySelector(".header");
	const menu = document.querySelector("#menu");

	if (!header || !menu) return;

	const burger = header.querySelector(".burger");
	if (!burger) return;

	window.addEventListener("scroll", () => {
		if (header.classList.contains("fill")) return;

		const isStickyMode = window.scrollY > 10 && header.classList.contains("js-sticky");

		header.classList.toggle("sticky", isStickyMode);
		burger.classList.toggle("sticky", isStickyMode);
		menu.classList.toggle("sticky", isStickyMode);
	});
})();
