import aboutAnims from '../animations/aboutAnims';

export default {
	init() {
		aboutAnims();
	},
	finalize() {
		console.log('about.js loaded');
	},
};
