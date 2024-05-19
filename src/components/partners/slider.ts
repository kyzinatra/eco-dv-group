import Glide from "@glidejs/glide";

let glide: Glide = new Glide(".glide", {
	autoplay: 2000,
	perView: 4,

	type: "carousel",
});

function init() {
	glide = new Glide(".glide", {
		autoplay: 3000,
		perView: 4,
		type: "carousel",
	});
	glide.mount();
}

document.addEventListener("astro:page-load", () => {
	console.log(document.querySelector(".glide"));
	if (document.querySelector(".glide") === null) return;
	glide?.destroy();
	init();
});
