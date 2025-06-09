const careerSect = document.querySelector(".advant");
const careerProgressBar = document.querySelector(".advant__body-progressbar-inner");

function updateCareerProgressBar() {
	if (!careerSect) { return }
	
	const rect = careerSect.getBoundingClientRect();
	const windowHeight = window.innerHeight;

	const start = windowHeight * 0.2;
	const end = rect.height - windowHeight * 0.3;

	const visibleTop = Math.max(0, -rect.top + start);
	const maxScrollable = end;

	const progress = Math.min(1, Math.max(0, visibleTop / maxScrollable));

	careerProgressBar.style.height = `${progress * 100}%`;
}

window.addEventListener("scroll", updateCareerProgressBar);
window.addEventListener("resize", updateCareerProgressBar);
window.addEventListener("load", updateCareerProgressBar);