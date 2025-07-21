(function () {
	const article = document.querySelector("article.article");
	if (!article) return;

	const nav = article.querySelector("nav");
	if (!nav) return;

	const chapters = article.querySelectorAll("h2");

	chapters.forEach((chapter) => {
		const title = chapter.textContent.trim();

		const id = title
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/\s+/g, "-")
			.replace(/[^a-z0-9\-а-яё]/g, "")
			.replace(/\-+/g, "-")
			.replace(/^-+|-+$/g, "");

		chapter.id = id;

		const link = document.createElement("a");
		link.setAttribute("href", `#${id}`);
		link.textContent = title;

		nav.appendChild(link);
	});
})();
