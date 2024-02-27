import waveAnims from '../animations/waveAnims';
import verticalTicker from '../utils/vertical-ticker';
import video from '../utils/video';
import workAnims from '../animations/workAnims';

export default {
	init() {
		waveAnims();
		verticalTicker();
		video();
		workAnims();
		// console.log("work.js");
	},
	finalize() {
		// console.log("Work loaded");
	},
};
