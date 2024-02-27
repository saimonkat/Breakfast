import { gsap, ScrollTrigger } from 'gsap/all';

export default function () {
	gsap.registerPlugin(ScrollTrigger);

	const collage = document.querySelector('.collage__fruit');
	const cherriesOne = document.querySelector('.collage__fruit__media--cherries-1');
	const cherriesTwo = document.querySelector('.collage__fruit__media--cherries-2');
	const banana = document.querySelector('.collage__fruit__media--banana img');
	const counter = document.querySelector('.collage__fruit__media--counter');
	const segmentOne = document.querySelector('.collage__fruit__media--segment-1');
	const segmentTwo = document.querySelector('.collage__fruit__media--segment-2');
	const segmentThree = document.querySelector('.collage__fruit__media--segment-3');
	const segmentFour = document.querySelector('.collage__fruit__media--segment-4');
	const segmentFive = document.querySelector('.collage__fruit__media--segment-5');
	const segmentSix = document.querySelector('.collage__fruit__media--segment-6');

	let mm = gsap.matchMedia();

	mm.add('(min-width: 1200px)', desktopAnimations);
	mm.add('(min-width: 992px) and (max-width: 1199px)', tabLandAnimations);
	mm.add('(min-width: 768px) and (max-width: 991px)', mobileAnimations);
	mm.add('(max-width: 767px)', mobileAnimations);

	function desktopAnimations() {
		fruitAnimDesktop(banana, collage, -20, 0, 'top bottom', 'bottom bottom', false);
		fruitAnimDesktop(cherriesOne, collage, -210, 0, 'top center', 'bottom bottom', false);
		fruitAnimDesktop(cherriesTwo, collage, 55, 0, 'top center', 'bottom +=500px', false);
		fruitAnimDesktop(segmentOne, collage, -80, 0, 'top bottom', 'center top', false);
		fruitAnimDesktop(segmentTwo, collage, -170, 0, 'top center', 'bottom bottom', false);
		fruitAnimDesktop(segmentThree, collage, 210, 0, 'top center', 'bottom bottom', false);
		fruitAnimDesktop(segmentFour, collage, -50, 0, 'top center', 'bottom bottom', false);
		fruitAnimDesktop(segmentFive, collage, 50, 0, 'top center', 'bottom +=500px', false);
		fruitAnimDesktop(segmentSix, segmentSix, 240, 0, 'top bottom', 'bottom top', false);
	}

	function tabLandAnimations() {
		let startPoint = 'top 90%';
		let endPoint = 'bottom 20%';
		fruitAnim(banana, banana, -25, 5, 0, 0, startPoint, 'bottom bottom', false);
		fruitAnim(counter, counter, -25, 0, 0, 0, startPoint, 'bottom bottom', false);
		fruitAnim(cherriesOne, collage, 25, 0, -210, 0, startPoint, endPoint, false);
		fruitAnim(cherriesTwo, collage, -50, 0, 35, 0, startPoint, endPoint, false);
		fruitAnim(segmentOne, collage, 50, 0, -80, 0, startPoint, endPoint, false);
		fruitAnim(segmentTwo, collage, 50, 10, -170, 0, startPoint, endPoint, false);
		fruitAnim(segmentThree, collage, -20, 10, 210, 0, startPoint, endPoint, false);
		fruitAnim(segmentFour, collage, 50, 0, -50, 0, startPoint, 'bottom 50%', false);
		fruitAnim(segmentFive, collage, 75, 0, 50, 0, startPoint, endPoint, false);
		fruitAnim(segmentSix, collage, 30, -30, 360, 0, startPoint, endPoint, false);
	}

	function mobileAnimations() {
		let startPoint = 'top 90%';
		let endPoint = 'bottom 20%';
		fruitAnim(banana, collage, 50, 5, 0, 0, startPoint, 'bottom top', false);
		fruitAnim(counter, collage, 50, 0, 0, 0, startPoint, 'bottom top', false);
		fruitAnim(cherriesOne, collage, 25, 0, -210, 0, startPoint, endPoint, false);
		fruitAnim(cherriesTwo, collage, -50, 0, 35, 0, startPoint, endPoint, false);
		fruitAnim(segmentOne, collage, -25, 0, -80, 0, startPoint, endPoint, false);
		fruitAnim(segmentTwo, collage, -50, 10, -170, 0, startPoint, endPoint, false);
		fruitAnim(segmentThree, collage, -20, 10, 210, 0, startPoint, endPoint, false);
		fruitAnim(segmentFour, collage, -50, 0, -50, 0, startPoint, endPoint, false);
		fruitAnim(segmentFive, collage, -75, 0, 50, 0, startPoint, endPoint, false);
		fruitAnim(segmentSix, collage, 30, -30, 360, 0, startPoint, endPoint, false);
	}

	function fruitAnim(
		element,
		triggerEl,
		yPercentStart,
		yPercentEnd,
		rotateStart,
		rotateEnd,
		startPoint,
		endPoint,
		markers
	) {
		gsap.fromTo(
			element,
			{ yPercent: yPercentStart, y: 0, rotate: rotateStart },
			{
				yPercent: yPercentEnd,
				y: 0,
				rotate: rotateEnd,
				ease: 'none',
				scrollTrigger: {
					trigger: triggerEl,
					start: startPoint,
					end: endPoint,
					scrub: true,
					markers: markers,
				},
			}
		);
	}

	function fruitAnimDesktop(element, triggerEl, rotateStart, rotateEnd, startPoint, endPoint, markers) {
		gsap.fromTo(
			element,
			{ rotate: rotateStart },
			{
				rotate: rotateEnd,
				ease: 'none',
				scrollTrigger: {
					trigger: triggerEl,
					start: startPoint,
					end: endPoint,
					scrub: true,
					markers: markers,
				},
			}
		);
	}
}
