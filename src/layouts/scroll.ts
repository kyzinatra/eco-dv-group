document.addEventListener("astro:page-load", () => {
	document.querySelectorAll("[data-scrollto]").forEach((el) => {
		el.addEventListener("click", (ev) => {
			ev.preventDefault();
			const to = el.getAttribute("data-scrollto")!;
			document.querySelector(to)?.scrollIntoView({ behavior: "smooth", block: "center" });
		});
	});
});
