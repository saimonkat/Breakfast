import { gsap, ScrollTrigger } from 'gsap/all';

export default function () {
	gsap.registerPlugin(ScrollTrigger);

	// COLLAGE
	const collage = document.querySelector('.collage__egg-loops');
	const greenLoop = document.querySelector('.collage__egg-loops__media--green-loop');
	const yellowLoop = document.querySelector('.collage__egg-loops__media--yellow-loop');
	const pinkLoop = document.querySelector('.collage__egg-loops__media--pink-loop');
	const purpleLoop = document.querySelector('.collage__egg-loops__media--purple-loop');
	const blueLoop = document.querySelector('.collage__egg-loops__media--blue-loop');
	let startPoint, endPoint;

	let mm = gsap.matchMedia();

	mm.add('(min-width: 1200px)', desktopAnimations);
	mm.add('(min-width: 768px) and (max-width: 1199px)', tabletAnimations);
	mm.add('(max-width: 767px)', mobileAnimations);

	function desktopAnimations() {
		startPoint = 'top 80%';
		endPoint = 'center top';
		loopAnim(greenLoop, 250, -250, 180, 1.1, startPoint, endPoint);
		loopAnim(yellowLoop, 350, -350, -130, 1.1, startPoint, endPoint);
		loopAnim(pinkLoop, 225, -275, 175, 1.1, startPoint, endPoint);
		loopAnim(purpleLoop, 200, -300, -260, 1.2, startPoint, endPoint);
		loopAnim(blueLoop, 250, -250, 150, 1.2, startPoint, endPoint);
	}

	function tabletAnimations() {
		startPoint = 'top bottom';
		endPoint = 'bottom top';
		loopAnim(greenLoop, 250, -250, 180, 1.1, startPoint, endPoint);
		loopAnim(yellowLoop, 350, -350, 130, 1.1, startPoint, endPoint);
		loopAnim(pinkLoop, 225, -275, 175, 1.2, startPoint, endPoint);
		loopAnim(purpleLoop, 200, -300, 260, 1.3, startPoint, endPoint);
		loopAnim(blueLoop, 250, -250, 320, 1.2, startPoint, endPoint);
	}

	function mobileAnimations() {
		startPoint = 'top bottom';
		endPoint = 'bottom top';
		loopAnim(greenLoop, 250, -250, 180, 2, startPoint, endPoint);
		loopAnim(yellowLoop, 350, -350, 130, 2, startPoint, endPoint);
		loopAnim(pinkLoop, 225, -275, 175, 1.5, startPoint, endPoint);
		loopAnim(purpleLoop, 200, -300, 260, 1.25, startPoint, endPoint);
		loopAnim(blueLoop, 250, -250, 320, 1.3, startPoint, endPoint);
	}

	function loopAnim(element, yPercentStart, yPercentEnd, rotateEnd, scaleEnd, startPoint, endPoint) {
		gsap.fromTo(
			element,
			{ yPercent: yPercentStart, y: 0, rotate: 0, scale: 1 },
			{
				yPercent: yPercentEnd,
				y: 0,
				rotate: rotateEnd,
				scale: scaleEnd,
				scrollTrigger: {
					trigger: collage,
					start: startPoint,
					end: endPoint,
					scrub: true,
				},
			}
		);
	}

	// COLLAGE
	// const serviceImages = document.querySelectorAll('.service-list__service__image');
	// const plate = document.querySelector('.service-list__service__image');
	// const pancakes = document.querySelector('.service-list__service__image');
	// const iceCream = document.querySelector('.service-list__service__image');
	// const sundae = document.querySelector('.service-list__service__image');
	// const croissant = document.querySelector('.service-list__service__image');

	// mm.add('(min-width: 768px)', serviceHoverAnims);

	// function serviceHoverAnims() {
	// 	let tl = gsap.timeline({ defaults: { duration: 1, repeat: -1, repeatDelay: 10 } });
	// 	tl.to('.service-list__service__image--1', { autoAlpha: 1 });
	// 	tl.to('.service-list__service__image--1', { autoAlpha: 0 });
	// 	tl.to('.service-list__service__image--2', { autoAlpha: 1 });
	// 	tl.to('.service-list__service__image--2', { autoAlpha: 0 });
	// 	tl.to('.service-list__service__image--3', { autoAlpha: 1 });
	// 	tl.to('.service-list__service__image--3', { autoAlpha: 0 });
	// 	tl.to('.service-list__service__image--4', { autoAlpha: 1 });
	// 	tl.to('.service-list__service__image--4', { autoAlpha: 0 });
	// 	tl.to('.service-list__service__image--5', { autoAlpha: 1 });
	// 	tl.to('.service-list__service__image--5', { autoAlpha: 0 });
	// }
}
