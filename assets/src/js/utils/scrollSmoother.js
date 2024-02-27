import { gsap, ScrollToPlugin, ScrollTrigger, ScrollSmoother } from 'gsap/all';

export default function () {
	const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
	if (isDesktop) {
		gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ScrollSmoother);

		const smoother = ScrollSmoother.create({
			wrapper: '#page',
			content: '#content',
			smooth: 1.4,
			normalizeScroll: true,
			effects: true,
		});

		gsap.utils
			.toArray('.collage__egg-rise__media__image')
			.forEach((img) =>
				img.addEventListener('load', () => smoother.scrollTrigger.refresh())
			);

		// PAUSE SCROLLING FOR MENU
		const headerMenuButton = document.getElementById('headerNavButton');
		const navMenuButton = document.getElementById('menuNavButton');

		headerMenuButton.addEventListener('click', () => {
			// toggle!
			smoother.paused(!smoother.paused());
		});
		navMenuButton.addEventListener('click', () => {
			// toggle!
			smoother.paused(!smoother.paused());
		});

		gsap.config({
			nullTargetWarn: false,
		});
	}

	// ANCHOR LINKS
	const anchors = document.querySelectorAll('a[href*="#"]');
	anchors &&
		anchors.forEach((anchor) => {
			anchor.addEventListener('click', (e) => {
				const target = document.querySelector(anchor.hash);
				e.preventDefault();
				targetScroll(target, 0);
			});
		});

	// Check for has on page loading
	if (window.location.hash) {
		const hash = window.location.hash;
		const uri = window.location.toString();
		const clean_uri = uri.substring(0, uri.indexOf('#'));
		window.history.replaceState({}, document.title, clean_uri);
		const target = document.querySelector(hash);
		targetScroll(target, 500);
	}

	// Manual hasnchange event listener
	window.addEventListener(
		'hashchange',
		function (e) {
			e.preventDefault();
			const hash = window.location.hash;
			const uri = window.location.toString();
			const clean_uri = uri.substring(0, uri.indexOf('#'));
			const target = document.querySelector(hash);
			window.history.replaceState({}, document.title, clean_uri);
			targetScroll(target, 500);
		},
		false
	);

	function targetScroll(target, timeout) {
		if (target) {
			setTimeout(() => {
				const targetTop =
					window.innerWidth >= 992
						? target.getBoundingClientRect().top - 50
						: target.getBoundingClientRect().top - 20;

				console.log(targetTop);
				window.scroll({
					top: targetTop,
					behavior: 'smooth',
				});
			}, timeout)
		}
	}
}
