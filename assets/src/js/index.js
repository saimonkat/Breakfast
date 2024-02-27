// FIXES
import './fixes';

import Router from './utils/Router';
import common from './routes/common';
import contact from './routes/contact';
import home from './routes/home';
import services from './routes/services';
import latestWork from './routes/latest-work';
import about from './routes/about';
import barba from '@barba/core/dist/barba.js';
import { gsap } from 'gsap/all';

const routes = new Router({
	common,
	contact,
	about,
	home,
	services,
	latestWork,
});

const initApp = () => {
	routes.loadEvents();
};

document.addEventListener('DOMContentLoaded', () => initApp());

barba.init({
	name: 'opacity-transition',
	timeout: 6000, // increased timeout (standart 2000) for high pages weight
	debug: true,
	transitions: [
		{
			leave(data) {
				let done = this.async();
				const overBlock = document.querySelector('.transition-over__inner');
				const nextPageUrl = data.next.url.path;
				let newGradient;
				switch (nextPageUrl) {
					case '/latest-work/':
						newGradient = 'linear-gradient(160deg,#6b9cc8,#fbfcfd)';
						break;
					case '/about/':
						newGradient = 'linear-gradient(160deg,#b0cbe0 20%,#c2b7c7,#e7b053,#f18457 70%)';
						break;
					case '/services/':
						newGradient = 'linear-gradient(160deg,#e89d9f 20%,#d7bcd9,#c5b8d9)';
						break;
					case '/contact/':
						newGradient = 'linear-gradient(160deg,#6a9bc8,#8aa4d2)';
						break;
					default:
						newGradient = 'linear-gradient(160deg,#f28658,#e89d9f 50%,#d7bcd9 80%,#a3b2db)';
						break;
				}
				overBlock.style.backgroundImage = newGradient;
				gsap.fromTo(
					'.transition-over',
					{ scale: 0, opacity: 1 },
					{
						scale: 1.45,
						duration: 2,
						ease: 'power2.out',
						onComplete: done,
					}
				);
				document.body.classList.add('page-changing');
			},
			afterLeave(data, current, next) {
				const nextHtml = data.next.html;
				let response = nextHtml.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', nextHtml);
				const parser = new DOMParser();
				const doc = parser.parseFromString(response, 'text/html');
				document.body.className = doc.querySelector('notbody').className + ' page-changing';
				window.scroll({ top: 0 });
			},
			after(data, current, next) {
				let done = this.async();
				gsap.fromTo(
					'.transition-over',
					{ opacity: 1 },
					{
						opacity: 0,
						duration: 1,
						ease: 'power2.in',
						onComplete: done,
					}
				);

				initApp();

				setTimeout(() => {
					document.body.classList.remove('page-changing');
					if (window.sbi_init) {
						sbi_init();
					}
				}, 1000);
			},
		},
	],
});
