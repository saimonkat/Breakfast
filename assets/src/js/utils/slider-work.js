import Swiper, { Autoplay } from 'swiper';

export default function () {
	const workSlider = document.querySelectorAll('.work-slider');

	workSlider &&
		workSlider.forEach((slider) => {
			new Swiper(slider, {
				modules: [Autoplay],
				slidesPerView: 'auto',
				spaceBetween: 10,
				loop: true,
				loopedSlides: 6,
				speed: 5000,
				autoplay: {
					delay: 0,
					reverseDirection: true,
					disableOnInteraction: false,
				},
			});
		});
}
