import waveAnims from '../animations/waveAnims';
import verticalTicker from '../utils/vertical-ticker';
import horizontalTicker from '../utils/horizontal-ticker';
import contactAnims from '../animations/contactAnims';

export default {
	init() {
		waveAnims();
		verticalTicker();
		horizontalTicker();
		contactAnims();
	},
	finalize() {
		// console.log("Contact loaded");
	},
};
