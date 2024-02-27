import Player from '@vimeo/player';
import { gsap, Observer } from 'gsap/all';

export default function () {
	gsap.registerPlugin(Observer);
	const projectsLatest = document.querySelector('.work__latest__wrapper');
	const projectsFull = document.querySelector('.work__full-list__wrapper');
	const playerColor = 'e89d9f';
	const initialVolume = 0.3;

	if (projectsLatest) {
		const projects = projectsLatest.children;

		[...projects].forEach((project) => {
			const videoPlayer = project.firstElementChild;
			const img = project.querySelector('img');
			const videoName = project.getAttribute('data-video-id');
			const video = document.getElementById(videoName);
			let hideIdleMouse, currentPlayerVolume;
			let mm = gsap.matchMedia();

			mm.add('(hover: hover)', desktopObserver);
			mm.add('(hover: none)', mobileObserver);

			const options = {
				id: video.getAttribute('data-vimeo-src'),
				width: project.offsetWidth,
				responsive: true,
				autoplay: false,
				controls: true,
				dnt: true,
			};
			let player = new Player(videoName, options);

			function mobileObserver() {
				Observer.create({
					target: videoPlayer,
					type: 'touch',
					onClick: () => {
						hidePoster();
						playVimeo();
						setPlayerVolume(initialVolume);
						setColor();
					},
					onRelease: () => {
						pauseVimeo();
						showPoster();
					},
				});
			}

			function desktopObserver() {
				Observer.create({
					target: videoPlayer,
					type: 'pointer',
					onHover: () => {
						hidePoster();
						playVimeo();
						setPlayerVolume(initialVolume);
						setColor();
						startIdleMouseTimeout(1500);
					},
					onHoverEnd: () => {
						pauseVimeo();
						showPoster();
						clearTimeout(hideIdleMouse);
						showCursor();
					},
					onMove: (self) => {
						img.addEventListener('click', function () {
							player.getPaused().then(function (paused) {
								switch (paused) {
									case true:
										playVimeo();
										break;
									case false:
										pauseVimeo();
										break;
								}
							});
						});
						getCurrentVolume();
						setTimeout(() => {
							setPlayerVolume(currentPlayerVolume);
						}, 100);
						showCursor();
						startIdleMouseTimeout(1500);
					},
				});
			}

			function getCurrentVolume() {
				player.getVolume().then(function (volume) {
					currentPlayerVolume = volume;
				});
			}

			function setPlayerVolume(vol) {
				player
					.setVolume(vol)
					.then(function (volume) {
						// The volume is set
					})
					.catch(function (error) {
						switch (error.name) {
							case 'RangeError':
								// The volume is less than 0 or greater than 1
								console.log('The volume was set out of range');
								break;
							default:
								// Some other error occurred
								break;
						}
					});
			}

			function setColor() {
				player
					.setColor(playerColor)
					.then(function (color) {})
					.catch(function (error) {
						switch (error.name) {
							default:
								// Some other error occurred
								console.log('The player color could not be changed');
								break;
						}
					});
			}

			function playVimeo() {
				player
					.play()
					.then(function () {
						// The video is playing
					})
					.catch(function (error) {
						switch (error.name) {
							case 'PasswordError':
								console.log('The video is password-protected');
								break;
							case 'PrivacyError':
								console.log('The video is private');
								break;
							default:
								// Some other error occurred
								console.log('Play interrupted');
								break;
						}
					});
			}

			function pauseVimeo() {
				player.pause();
			}

			function hidePoster() {
				video.style.backgroundColor = '#000000';
				img.classList.add('banana');
				img.classList.remove('visible');
			}

			function showPoster() {
				img.classList.remove('banana');
				img.classList.add('visible');
			}

			function startIdleMouseTimeout(mouseTimer) {
				clearTimeout(hideIdleMouse);
				hideIdleMouse = setTimeout(hideCursor, mouseTimer);
			}

			function hideCursor() {
				document.body.style.cursor = 'none';
				img.classList.remove('display-controls');
			}

			function showCursor() {
				document.body.style.cursor = 'default';
				img.classList.add('display-controls');
			}
		});
	}

	if (projectsFull) {
		const projects = projectsFull.children;

		[...projects].forEach((project) => {
			const videoPlayer = project.firstElementChild;
			const img = project.querySelector('img');
			const videoName = project.getAttribute('data-video-id');
			const video = document.getElementById(videoName);
			let hideIdleMouse, currentPlayerVolume;
			let mm = gsap.matchMedia();

			mm.add('(hover: hover)', desktopObserver);
			mm.add('(hover: none)', mobileObserver);

			const options = {
				id: video.getAttribute('data-vimeo-src'),
				width: img.offsetWidth,
				responsive: true,
				autoplay: false,
				controls: true,
				dnt: true,
			};

			let player = new Player(videoName, options);

			function mobileObserver() {
				Observer.create({
					target: videoPlayer,
					type: 'touch',
					onClick: () => {
						hidePoster();
						playVimeo();
						setPlayerVolume(initialVolume);
						setColor();
					},
					onRelease: () => {
						pauseVimeo();
						showPoster();
					},
				});
			}

			function desktopObserver() {
				Observer.create({
					target: videoPlayer,
					type: 'pointer',
					onHover: () => {
						hidePoster();
						playVimeo();
						setPlayerVolume(initialVolume);
						setColor();
						startIdleMouseTimeout(1500);
					},
					onHoverEnd: () => {
						pauseVimeo();
						showPoster();
						clearTimeout(hideIdleMouse);
						showCursor();
					},
					onMove: (self) => {
						img.addEventListener('click', function () {
							player.getPaused().then(function (paused) {
								switch (paused) {
									case true:
										playVimeo();
										break;
									case false:
										pauseVimeo();
										break;
								}
							});
						});
						getCurrentVolume();
						setTimeout(() => {
							setPlayerVolume(currentPlayerVolume);
						}, 100);
						showCursor();
						startIdleMouseTimeout(1500);
					},
				});
			}

			function getCurrentVolume() {
				player.getVolume().then(function (volume) {
					currentPlayerVolume = volume;
				});
			}

			function setPlayerVolume(vol) {
				player
					.setVolume(vol)
					.then(function (volume) {
						// The volume is set
					})
					.catch(function (error) {
						switch (error.name) {
							case 'RangeError':
								// The volume is less than 0 or greater than 1
								console.log('The volume was set out of range');
								break;
							default:
								// Some other error occurred
								break;
						}
					});
			}

			function setColor() {
				player
					.setColor(playerColor)
					.then(function (color) {})
					.catch(function (error) {
						switch (error.name) {
							default:
								// Some other error occurred
								console.log('The player color could not be changed');
								break;
						}
					});
			}

			function playVimeo() {
				player
					.play()
					.then(function () {
						// The video is playing
					})
					.catch(function (error) {
						switch (error.name) {
							case 'PasswordError':
								console.log('The video is password-protected');
								break;
							case 'PrivacyError':
								console.log('The video is private');
								break;
							default:
								// Some other error occurred
								console.log('Play interrupted');
								break;
						}
					});
			}

			function pauseVimeo() {
				player.pause();
			}

			function hidePoster() {
				video.style.backgroundColor = '#000000';
				img.classList.add('banana');
				img.classList.remove('visible');
			}

			function showPoster() {
				img.classList.remove('banana');
				img.classList.add('visible');
			}

			function startIdleMouseTimeout(mouseTimer) {
				clearTimeout(hideIdleMouse);
				hideIdleMouse = setTimeout(hideCursor, mouseTimer);
			}

			function hideCursor() {
				document.body.style.cursor = 'none';
				img.classList.remove('display-controls');
			}

			function showCursor() {
				document.body.style.cursor = 'default';
				img.classList.add('display-controls');
			}
		});
	}
}
