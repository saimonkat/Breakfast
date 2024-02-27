import horizontalTicker from '../utils/horizontal-ticker';
import sliderWork from '../utils/slider-work';
import serviceAnims from '../animations/serviceAnims';

export default {
	init() {
		horizontalTicker();
		sliderWork();
		serviceAnims();
		// console.log("services.js");
	},
	finalize() {
		// console.log("Services loaded");
	},
};
