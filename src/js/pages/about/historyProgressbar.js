const historySection = document.querySelector(".history");
const progressBar = document.querySelector(".history__item-progressbar");

function updateProgressBar() {
	const rect = historySection.getBoundingClientRect();
	const windowHeight = window.innerHeight;

	const start = windowHeight * 0.2;
	const end = rect.height - windowHeight * 0.3;

	const visibleTop = Math.max(0, -rect.top + start);
	const maxScrollable = end;

	const progress = Math.min(1, Math.max(0, visibleTop / maxScrollable));

	progressBar.style.height = `${progress * 1100}%`;
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);
window.addEventListener("load", updateProgressBar);
