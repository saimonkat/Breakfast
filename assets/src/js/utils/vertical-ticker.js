import { gsap } from "gsap/all";

export default function () {
	const tickerSlider = document.querySelectorAll(".ticker-slider--vertical");

	if (tickerSlider) {
		gsap.registerEffect({
			name: "tickerVertical",
			effect(targets, config) {
				buildTickers({
					targets: targets,
					clone:
						config.clone ||
						((el) => {
							let clone = el.children[0].cloneNode(true);
							el.insertBefore(clone, el.children[0]);
							return clone;
						}),
				});

				function buildTickers(config, originals) {
					let tickersVertical;
					if (originals && originals.clones) {
						// on window resizes, we should delete the old clones and reset the heights
						originals.clones.forEach(
							(el) => el && el.parentNode && el.parentNode.removeChild(el)
						);
						originals.forEach((el, i) =>
							originals.inlineHeights[i]
								? (el.style.height = originals.inlineHeights[i])
								: el.style.removeProperty("height")
						);
						tickersVertical = originals;
					} else {
						tickersVertical = config.targets;
					}
					const clones = (tickersVertical.clones = []);
					const inlineHeights = (tickersVertical.inlineHeights = []);
					tickersVertical.forEach((el, index) => {
						inlineHeights[index] = el.style.height;
						el.style.height = "1000px"; // to let the children grow as much as necessary (otherwise it'll often be cropped to the viewport height)
						el.children[0].style.display = "block";
						let height = el.children[0].offsetHeight,
							cloneCount = Math.ceil(window.innerHeight / height),
							down = el.dataset.direction === "down",
							i;
						el.style.height = height * (cloneCount + 1) + "px";
						for (i = 0; i < cloneCount; i++) {
							clones.push(config.clone(el));
						}
						gsap.fromTo(
							el,
							{
								y: down ? -height : 0,
							},
							{
								y: down ? 0 : -height,
								duration: height / 100 / parseFloat(el.dataset.speed || 1),
								repeat: -1,
								overwrite: "auto",
								ease: "none",
							}
						);
					});
					// rerun on window resizes, otherwise there could be gaps if the user makes the window bigger.
					// originals ||
					// 	window.addEventListener("resize", () =>
					// 		buildTickers(config, tickersVertical)
					// 	);
				}
			},
		});

		tickerSlider.forEach((slider) => gsap.effects.tickerVertical(slider));
	}
}
