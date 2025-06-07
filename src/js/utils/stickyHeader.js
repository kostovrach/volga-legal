window.addEventListener("scroll", () => {
	const header = document.querySelector(".header");
    const burger = header.querySelector('.burger');
	const menu = document.querySelector("#menu");

	if (header.classList.contains("fill")) {
		return;
	} else {
		if (window.scrollY > 10 && header.classList.contains("js-sticky")) {
			header.classList.add("sticky");
			burger.classList.add("sticky");
			menu.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
			burger.classList.remove("sticky");
			menu.classList.remove("sticky");
		}
	}
});
