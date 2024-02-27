import waveAnims from "../animations/waveAnims";
import homeAnims from "../animations/homeAnims";
import horizontalTicker from "../utils/horizontal-ticker";
import sliderWork from "../utils/slider-work";

export default {
	init() {
		homeAnims();
		waveAnims();
		horizontalTicker();
		sliderWork();
		// console.log("home.js");
	},
	finalize() {
		// console.log("Homepage loaded");
	},
};
