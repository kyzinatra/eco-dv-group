const subscribers = document.querySelectorAll("[data-topscroll]");
let isScrolled = false;

function handler() {
	if (subscribers.length === 0) return;

	const topOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	const isNewScrolled = !!~~(topOffset >> 3);

	if (isNewScrolled === isScrolled) return;
	isScrolled = isNewScrolled;

	subscribers.forEach((el) => {
		(el as HTMLElement).style.setProperty("--is-scroll-top", String(isScrolled));
	});
}

window.addEventListener("scroll", handler);
handler();
