import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("[data-parallax]").forEach((s, i) => {
	const section = s as HTMLElement;
	const bg = section.querySelector("[data-parallaxbg]") as HTMLElement;

	// the first image (i === 0) should be handled differently because it should start at the very top.
	// use function-based values in order to keep things responsive
	gsap.fromTo(
		bg,
		{
			backgroundPosition: () => (i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"),
		},
		{
			backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
			ease: "none",
			scrollTrigger: {
				trigger: section,
				start: () => (i ? "top bottom" : "top top"),
				end: "bottom top",
				scrub: true,
				invalidateOnRefresh: true, // to make it responsive
			},
		}
	);
});
