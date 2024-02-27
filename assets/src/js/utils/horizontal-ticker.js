import { gsap } from "gsap/all";

export default function () {
	const tickerSlider = document.querySelectorAll(".ticker-slider--horizontal");

	if (tickerSlider) {
		gsap.registerEffect({
			name: "tickerHorizontal",
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
					let tickersHorizontal;
					if (originals && originals.clones) {
						// on window resizes, we should delete the old clones and reset the widths
						originals.clones.forEach(
							(el) => el && el.parentNode && el.parentNode.removeChild(el)
						);
						originals.forEach((el, i) =>
							originals.inlineWidths[i]
								? (el.style.width = originals.inlineWidths[i])
								: el.style.removeProperty("width")
						);
						tickersHorizontal = originals;
					} else {
						tickersHorizontal = config.targets;
					}
					const clones = (tickersHorizontal.clones = []);
					const inlineWidths = (tickersHorizontal.inlineWidths = []);
					tickersHorizontal.forEach((el, index) => {
						inlineWidths[index] = el.style.width;
						el.style.width = "10000px"; // to let the children grow as much as necessary (otherwise it'll often be cropped to the viewport width)
						el.children[0].style.display = "flex";
						let width = el.children[0].offsetWidth,
							cloneCount = Math.ceil(window.innerWidth / width),
							right = el.dataset.direction === "right",
							i;
						el.style.width = width * (cloneCount + 2) + "px";
						for (i = 0; i < cloneCount; i++) {
							clones.push(config.clone(el));
						}
						gsap.fromTo(
							el,
							{
								x: right ? -width : 0,
							},
							{
								x: right ? 0 : -width,
								duration: width / 100 / parseFloat(el.dataset.speed || 1),
								repeat: -1,
								overwrite: "auto",
								ease: "none",
							}
						);
					});
					// rerun on window resizes, otherwise there could be gaps if the user makes the window bigger.
					// originals ||
					// 	window.addEventListener("resize", () =>
					// 		buildTickers(config, tickersHorizontal)
					// 	);
				}
			},
		});

		tickerSlider.forEach((slider) => gsap.effects.tickerHorizontal(slider));
	}
}
