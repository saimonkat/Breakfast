import { gsap, ScrollTrigger } from 'gsap/all';

export default function () {
	gsap.registerPlugin(ScrollTrigger);
	const spoon = document.querySelector('.about__content__spoon');
	const aboutContent = document.querySelector('.about__content');

	let mm = gsap.matchMedia();

	mm.add('(min-width: 992px) and (max-width: 1199px)', tabLandAnimations);
	mm.add('(min-width: 768px) and (max-width: 991px)', tabPortAnimations);
	mm.add('(max-width: 767px)', mobileAnimations);

	function tabLandAnimations() {
		gsap.fromTo(
			spoon,
			{ yPercent: -30, y: 0 },
			{
				yPercent: 5,
				y: 0,
				scrollTrigger: {
					trigger: spoon,
					start: 'top 80%',
					end: 'top top',
					scrub: true,
				},
			}
		);
	}

	function tabPortAnimations() {
		gsap.fromTo(
			spoon,
			{ yPercent: -30, y: 0 },
			{
				yPercent: 15,
				y: 0,
				scrollTrigger: {
					trigger: aboutContent,
					start: 'top top',
					end: 'bottom center',
					scrub: true,
				},
			}
		);
	}

	function mobileAnimations() {
		gsap.fromTo(
			spoon,
			{ yPercent: -50, y: 0 },
			{
				yPercent: 5,
				y: 0,
				scrollTrigger: {
					trigger: aboutContent,
					start: 'top top',
					end: 'bottom center',
					scrub: true,
				},
			}
		);
	}
}
