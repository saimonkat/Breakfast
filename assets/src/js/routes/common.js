import menu from "../utils/menu";
import textAnims from "../animations/textAnims";
import scrollSmoother from "../utils/scrollSmoother";

export default {
	init() {
		menu();
		scrollSmoother();
		textAnims();
		// console.log("common.js");
	},
	finalize() {},
};
