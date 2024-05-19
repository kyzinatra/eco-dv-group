(() => {
	let subscribers = document.querySelectorAll("[data-topscroll]");
	let isScrolled = false;

	function handler() {
		if (subscribers.length === 0) return;

		const topOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		const isNewScrolled = !!~~(topOffset >> 3);

		if (isScrolled === isNewScrolled) return;

		isScrolled = isNewScrolled;

		subscribers.forEach((el) => {
			(el as HTMLElement).style.setProperty("--is-scroll-top", String(isScrolled));
		});
	}

	window.addEventListener("scroll", handler);
	document.addEventListener("astro:page-load", () => {
		subscribers = document.querySelectorAll("[data-topscroll]");
		isScrolled = false;
	});
	handler();
})();
