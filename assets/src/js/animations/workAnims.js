import { gsap, Draggable, ScrollTrigger } from 'gsap/all';

export default function () {
	gsap.registerPlugin(Draggable, ScrollTrigger);
	const collage = document.querySelector('.collage__egg-rise');
	const egg = document.querySelector('.collage__egg-rise__media--egg');
	const mountains = document.querySelector('.collage__egg-rise__media--mountains');
	const vinyl = document.querySelector('.work__banner__media--vinyl');
	const AudioContext = window.AudioContext || window.webkitAudioContext;
	const audioCtx = new AudioContext();
	const audioElement = document.querySelector('.work__banner__audio');
	const track = audioCtx.createMediaElementSource(audioElement);

	let mm = gsap.matchMedia();

	mm.add('(min-width: 1200px)', desktopAnimations);
	mm.add('(min-width: 992px) and (max-width: 1199px)', tabLandAnimations);
	mm.add('(min-width: 768px) and (max-width: 991px)', tabPortAnimations);
	mm.add('(max-width: 767px)', mobileAnimations);

	track.connect(audioCtx.destination);

	window.addEventListener('touchstart', silentPlay, { once: true });

	/* Dial rotation */
	const rotateSize = 360;
	const draggableVinyl = Draggable.create(vinyl, {
		type: 'rotation',
		allowEventDefault: false,
		inertia: false,
		bounds: {
			minRotation: -rotateSize,
			maxRotation: rotateSize,
		},
		onDrag: function () {
			console.log(audioCtx.state);
			playTrack();
		},
	});

	function silentPlay() {
		audioElement.volume = 0;
		audioElement.muted = true;
		audioElement.play();
		console.log('every time we touch');
	}

	function playTrack() {
		switch (true) {
			case audioCtx.state === 'suspended':
				console.log('suspended state');
				audioCtx.resume();
				audioElement.volume = 0.2;
				audioElement.muted = false;
				audioElement.play();
				break;
			case audioCtx.state === 'running':
				audioElement.muted = false;
				audioElement.volume = 0.2;
				audioElement.play();
				break;
			default:
				console.log('default switch');
				audioElement.muted = false;
				audioElement.volume = 0.2;
				audioElement.play();
		}
	}

	function desktopAnimations() {
		eggRiseAnim(egg, collage, 100, -35, 'top center', 'top top');
		eggRiseAnim(mountains, mountains, -10, 1, 'top 90%', 'bottom bottom');
	}

	function tabLandAnimations() {
		eggRiseAnim(egg, collage, 100, -25, 'top center', 'top top');
		eggRiseAnim(mountains, mountains, 0, 1, 'top 90%', 'bottom bottom');
	}

	function tabPortAnimations() {
		eggRiseAnim(egg, collage, 75, -25, 'top center', 'top 25%');
		eggRiseAnim(mountains, mountains, 0, 1, 'top 90%', 'bottom bottom');
	}

	function mobileAnimations() {
		eggRiseAnim(egg, collage, 75, -28, 'top 70%', 'top 35%');
		eggRiseAnim(mountains, mountains, 0, 1, 'top 90%', 'bottom bottom');
	}

	function eggRiseAnim(element, triggerEl, yPercentStart, yPercentEnd, startPoint, endPoint) {
		gsap.fromTo(
			element,
			{ yPercent: yPercentStart, y: 0 },
			{
				yPercent: yPercentEnd,
				y: 0,
				scrollTrigger: {
					trigger: triggerEl,
					start: startPoint,
					end: endPoint,
					scrub: true,
				},
			}
		);
	}
}
