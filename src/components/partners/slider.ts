import Glide from "@glidejs/glide";

let glide: Glide;

function addGlide() {
	glide = new Glide(".glide", {
		autoplay: 1800,
		perView: 4,
		focusAt: "center",
		hoverpause: false,
		gap: 20,
		type: "carousel",
		breakpoints: {
			1124: {
				perView: 3,
			},
			768: {
				perView: 2,
			},
			500: {
				perView: 1,
			},
		},
	});
}

function init() {
	glide.mount();
}
addGlide();
document.addEventListener("astro:page-load", () => {
	console.log(document.querySelector(".glide"));
	if (document.querySelector(".glide") === null) return;
	glide?.destroy();
	addGlide();
	init();
});
