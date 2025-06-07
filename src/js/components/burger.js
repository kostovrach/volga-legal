document.addEventListener("DOMContentLoaded", () => {
	const openBtn = document.querySelector("[data-menu-open]");
	const menu = document.querySelector("#menu");
	const closeBtn = menu.querySelector("[data-menu-close]");

	openBtn.addEventListener("click", () => {
		menu.showModal();
		requestAnimationFrame(() => {
			menu.classList.add("anim");
		});
	});

	closeBtn.addEventListener("click", () => {
		menu.classList.remove("anim");

		setTimeout(() => {
			menu.close();
		}, 400);
	});

	menu.addEventListener("click", (e) => {
		if (e.target === menu) {
			menu.classList.remove("anim");
			setTimeout(() => menu.close(), 400);
		}
	});
});
