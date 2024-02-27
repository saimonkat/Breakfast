import { gsap, Draggable, ScrollTrigger } from 'gsap/all';

export default function () {
	const homePage = document.querySelector('.page__home');
	if (homePage) {
		gsap.registerPlugin(Draggable, ScrollTrigger);

		const heroSwitch = document.querySelector('.collage-hero__media--switch');
		const heroSignLight = document.querySelector(
			'.collage-hero__media--sign-light'
		);
		const heroDial = document.querySelector('.collage-hero__media--dial img');
		const heroSkyImg = document.querySelector('.collage-hero__media--sky img');
		let mm = gsap.matchMedia(),
			breakpoint = 992;

		if (!sessionStorage.getItem('animationOver')) {
			document.body.classList.add('animation');
			document.body.classList.remove('animated');
			setTimeout(() => {
				document.body.classList.remove('animation');
				document.body.classList.add('animated');
				sessionStorage.setItem('animationOver', new Date().toString());
			}, 5000);
		} else {
			document.body.classList.add('animated');
		}

		heroSwitch &&
			heroSwitch.addEventListener('click', (e) => {
				heroSwitch.classList.toggle('switched');
				heroSignLight.classList.toggle('highlighted');
			});

		/* Dial rotation */
		const rotateSize = 72;
		let skyW, skyMove;
		let winW = window.innerWidth;

		function skyUpdate() {
			winW = window.innerWidth;
			skyW = heroSkyImg.offsetWidth;
			skyMove = (skyW - winW) / 2;
			gsap.to(heroDial, { transform: '' });
			gsap.to(heroSkyImg, { transform: '' });
		}

		skyUpdate();

		window.addEventListener('load', skyUpdate);
		window.addEventListener('resize', () => {
			if (winW !== window.innerWidth) skyUpdate();
			winW = window.innerWidth;
		});

		const draggableDial = Draggable.create(heroDial, {
			type: 'rotation',
			allowEventDefault: false,
			inertia: false,
			bounds: {
				minRotation: -rotateSize,
				maxRotation: rotateSize,
			},
			onDrag: function () {
				let rotatePercent = (this.rotation / rotateSize) * 0.99;
				gsap.to(heroSkyImg, {
					duration: 0.2,
					x: skyMove * rotatePercent,
				});
			},
		});

		/* Bacon & Hands & Diver */
		const bacon = document.querySelector('.collage-baconophone__media--bacon');
		const hands = document.querySelector('.collage-baconophone__media--hands');
		const hand = document.querySelector('.collage-rose-hand__media--hand');
		const diver = document.querySelector('.collage-diver__media--diver');

		const baconTrigger = '.home__middle__copy';
		const handTrigger = '.home__end-wrapper .home__text__scroll';

		function scrollTriggerAnimate(
			trigger,
			target,
			start,
			scrub,
			direction,
			vars = {
				x: 0,
				xPercent: -100,
				y: 0,
				yPercent: 100,
				duration: 2,
			}
		) {
			let btl = gsap.timeline({
				scrollTrigger: {
					trigger: trigger,
					start: 'top ' + start,
					scrub: scrub,
				},
			});

			direction === 'to' ? btl.to(target, vars) : btl.from(target, vars);
		}

		scrollTriggerAnimate(baconTrigger, bacon, 'center', true);
		scrollTriggerAnimate(baconTrigger, hands, 'center', true);
		scrollTriggerAnimate(handTrigger, hand, 'bottom', true, 'from', {
			xPercent: 100,
			yPercent: 0,
			duration: 1,
		});
		mm.add(
			{
				isDesktop: `(min-width: ${breakpoint}px)`,
				isMobile: `(max-width: ${breakpoint - 1}px)`,
				reduceMotion: '(prefers-reduced-motion: reduce)',
			},
			(context) => {
				let { isDesktop, isMobile, reduceMotion } = context.conditions;

				scrollTriggerAnimate(
					diver,
					diver,
					isDesktop ? 'top' : 'center',
					1.5,
					'to',
					{
						rotateZ: -21,
						scale: 0.8,
						translateX: '-14vw',
						translateY: '72vw',
						duration: 4,
					}
				);

				return () => {};
			}
		);
	}
}
