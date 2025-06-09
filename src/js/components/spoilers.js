const spoilerContainer = document.querySelector(".js-spoiler-container");
const spoilerItems = spoilerContainer.querySelectorAll(".js-spoiler-item");

spoilerItems.forEach((item) => {
	item.addEventListener("click", function () {
		this.classList.toggle("active");
	});
});
