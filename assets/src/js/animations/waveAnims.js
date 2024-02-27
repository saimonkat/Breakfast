import {
	gsap,
	ScrollTrigger,
	ScrollSmoother,
	CustomEase,
	MorphSVGPlugin,
} from "gsap/all";

export default function () {
	gsap.registerPlugin(
		ScrollTrigger,
		ScrollSmoother,
		CustomEase,
		MorphSVGPlugin
	);

	const waveWork = document.getElementById("wave-work");
	const waveContact = document.getElementById("wave-contact");
	const waveHome = document.getElementById("wave-home");

	let speed = 150;
	let waves = gsap.timeline();

	let pathname = window.location.pathname;

	if (pathname === "/latest-work/") {
		waves.add([
			waveSVG(waveWork, {
				taperEnd: 1,
				// taperEnd: 80, appears to slightly lessen effect at end point
				invertFlow: false,
				taperStart: 1,
				// taperStart: 2, appears to slightly lessen effect at start point
				loose: true,
				length: 120,
				// length: 120, can add in wave like horizontal motion with this value
				angle: 180,
				// angle: -52, dictates direction of wave 180 is up and down
				magnitude: 10,
				// magnitude: 10, creates a much more violent sideways motion and creates kinks in the curve at 100 or lower
				phase: 110,
				// phase: 110, hard to describe but potentially creates wobble alomng the curve at extreme value i.e. 11000
				duration: 3,
				// duration: 2, adjusts overall speed
				start: 1,
				// start: 6,
				end: 208,
				// end: 14, raising made one end of anim overstretch its border. reducing slowed animation to stop.
				repeat: -1,
			}),
		]);
	} else if (pathname === "/") {
		waves.add([
			waveSVG(waveHome, {
				taperEnd: 1,
				// taperEnd: 80, appears to slightly lessen effect at end point
				invertFlow: false,
				taperStart: 1,
				// taperStart: 2, appears to slightly lessen effect at start point
				loose: true,
				length: 620,
				// length: 120, can add in wave like horizontal motion with this value
				angle: 180,
				// angle: -52, dictates direction of wave 180 is up and down
				magnitude: 20,
				// magnitude: 10, creates a much more violent sideways motion and creates kinks in the curve at 100 or lower
				phase: 50,
				// phase: 110, hard to describe but potentially creates wobble alomng the curve at extreme value i.e. 11000
				duration: 3,
				// duration: 2, adjusts overall speed
				start: 1,
				// start: 6,
				end: 358,
				// end: 14, raising made one end of anim overstretch its border. reducing slowed animation to stop.
				repeat: -1,
			}),
		]);
	} else if (pathname === "/contact/") {
		waves.add([
			waveSVG(waveContact, {
				taperEnd: 1,
				// taperEnd: 80, appears to slightly lessen effect at end point
				invertFlow: false,
				taperStart: 1,
				// taperStart: 2, appears to slightly lessen effect at start point
				loose: true,
				length: 120,
				// length: 120, can add in wave like horizontal motion with this value
				angle: 180,
				// angle: -52, dictates direction of wave 180 is up and down
				magnitude: 10,
				// magnitude: 10, creates a much more violent sideways motion and creates kinks in the curve at 100 or lower
				phase: 110,
				// phase: 110, hard to describe but potentially creates wobble alomng the curve at extreme value i.e. 11000
				duration: 2.5,
				// duration: 2, adjusts overall speed
				start: 1,
				// start: 6,
				end: 4008,
				// end: 14, raising made one end of anim overstretch its border. reducing slowed animation to stop.
				repeat: -1,
			}),
		]);
	}

	function waveSVG(e, vars) {
		var _placeDot = function (x, y, vars) {
				var _createSVG = function (type, attributes) {
						var element = document.createElementNS(
								"http://www.w3.org/2000/svg",
								type
							),
							reg = /([a-z])([A-Z])/g,
							p;
						for (p in attributes) {
							element.setAttributeNS(
								null,
								p.replace(reg, "$1-$2").toLowerCase(),
								attributes[p]
							);
						}
						return element;
					},
					dot = _createSVG("circle", {
						cx: x,
						cy: y,
						r: vars.size || 6,
						fill: vars.color || "red",
					}),
					container = vars.container || document.querySelector("svg");
				if (container) {
					container.appendChild(dot);
				}
				return dot;
			},
			_transformBezier = function (b, matrix) {
				var i, x, y;
				if (
					matrix &&
					(matrix.a !== 1 ||
						matrix.b ||
						matrix.c ||
						matrix.d !== 1 ||
						matrix.e ||
						matrix.f)
				) {
					for (var i = 0; i < b.length; i += 2) {
						x = b[i];
						y = b[i + 1];
						b[i] = x * matrix.a + y * matrix.c + matrix.e;
						b[i + 1] = x * matrix.b + y * matrix.d + matrix.f;
					}
				}
				return b;
			},
			_getLength = function (x, y, x2, y2) {
				x = x2 - x;
				y = y2 - y;
				return Math.sqrt(x * x + y * y);
			},
			_getTotalLength = function (bezier, start, end) {
				var x = bezier[start],
					y = bezier[start + 1],
					length = 0,
					i;
				for (i = start; i < end; i += 2) {
					length += _getLength(x, y, (x = bezier[i]), bezier[i + 1]);
				}
				return length;
			},
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_round = function (value) {
				return Math.round(value * 1000) / 1000;
			},
			bezier = _transformBezier(
				MorphSVGPlugin.stringToRawPath(e.getAttribute("d"))[0],
				debug && e.transform.baseVal.length
					? e.transform.baseVal.consolidate().matrix
					: null
			),
			start = (vars.start || 0) * 2,
			end = vars.end === 0 ? 0 : vars.end * 2 || bezier.length - 1,
			length = vars.length || 100,
			magnitude = vars.magnitude || 50,
			proxy = { a: 0 },
			debug = !!vars.debug,
			phase = (vars.phase || 0) * _DEG2RAD,
			taperStart = vars.taperStart || 0,
			taperEnd = vars.taperEnd || 0,
			startX = bezier[start],
			startY = bezier[start + 1],
			changes = [],
			bezierLength = 0,
			loose = !!vars.loose, //if true, we'll just make the points influence the current positions instead of forcing them strictly onto the wave.
			tl = gsap.timeline({ repeat: vars.repeat }),
			bezierTotalLength,
			angle,
			i,
			x,
			y,
			dx,
			dy,
			sin,
			cos,
			sin2,
			cos2,
			m,
			pathStart,
			t,
			negCos,
			negSin,
			rotatedStartX;
		i = bezier.length;
		while (i--) {
			bezier[i] = _round(bezier[i]);
		}
		if (end >= bezier.length - 1) {
			end = bezier.length - 2;
		}
		if (start >= bezier.length) {
			start = bezier.length - 1;
		}
		bezierTotalLength = _getTotalLength(bezier, start, end);

		dx = bezier[end] - startX;
		dy = bezier[end + 1] - startY;
		if (vars.angle || vars.angle === 0) {
			angle = vars.angle * _DEG2RAD;
		} else {
			angle = Math.atan2(dy, dx) - Math.PI / 2;
		}
		sin = Math.sin(angle);
		cos = Math.cos(angle);
		sin2 = Math.sin(angle + Math.PI / 2);
		cos2 = Math.cos(angle + Math.PI / 2);
		negCos = Math.cos(-angle);
		negSin = Math.sin(-angle);
		rotatedStartX = startX * negCos + startY * negSin;

		if (debug) {
			//note: if debug is true, we drop a red dot at the beginning, yellow at the end, blue dots as control points, and purple as anchors.
			_placeDot(bezier[start], bezier[start + 1], {
				container: e.parentNode,
				color: "red",
			});
			_placeDot(bezier[end], bezier[end + 1], {
				container: e.parentNode,
				color: "yellow",
			});
			console.log(
				"waveSVG() angle: ",
				angle * _RAD2DEG,
				"degrees. RED dot is start, YELLOW is end."
			);
		}

		x = startX;
		y = startY;
		for (i = start; i <= end; i += 2) {
			bezierLength += _getLength(x, y, (x = bezier[i]), (y = bezier[i + 1]));
			dx = x * negCos + y * negSin; //rotated in the opposite direction
			dy = x * negSin + y * negCos;
			t =
				taperStart && bezierLength < taperStart
					? bezierLength / taperStart
					: taperEnd &&
					  bezierLength > bezierTotalLength - taperEnd &&
					  bezierLength < bezierTotalLength
					? (bezierTotalLength - bezierLength) / taperEnd
					: 1; //taper
			m = Math.sin((dx / length) * Math.PI * 2 + phase) * magnitude;
			changes.push({
				i: i - (start ? 2 : 0),
				p: dx,
				a: (dx / length) * Math.PI * 2 + phase,
				t: t,
				x: loose ? x - m * sin * t : startX + (dx - rotatedStartX) * cos2 * t,
				y: loose ? y - m * cos * t : startY + (dx - rotatedStartX) * sin2 * t,
				smooth:
					i % 6 === 0 && i > start && i < end
						? Math.abs(
								Math.atan2(y - bezier[i - 1], x - bezier[i - 2]) -
									Math.atan2(bezier[i + 3] - y, bezier[i + 2] - x)
						  ) < 0.01
						: false,
			});
			if (debug) {
				changes[changes.length - 1].dot = _placeDot(x, y, {
					container: e.parenNode,
					size: 3,
					color: i % 6 ? "blue" : "purple",
				});
			}
		}
		//when we're not animating the first point, optimize things by taking out the first x/y and treat them independently so we can merely bezier.join(",") on each update.
		if (start) {
			pathStart = "M" + bezier.shift() + "," + bezier.shift() + " C";
		}

		tl.to(proxy, {
			duration: vars.duration || 3,
			a: Math.PI * (vars.invertFlow ? -2 : 2),
			ease: vars.ease || "none",
			onUpdate: function () {
				var l = changes.length,
					angle = proxy.a,
					node,
					i,
					m,
					x,
					y,
					x2,
					y2,
					x1,
					y1,
					cp,
					dx,
					dy,
					d,
					a,
					cpCos,
					cpSin;
				for (i = 0; i < l; i++) {
					node = changes[i];
					if (node.smooth || i === l - 1 || !changes[i + 1].smooth) {
						m = Math.sin(node.a + angle) * magnitude * node.t;
						bezier[node.i] = x = _round(node.x + m * sin);
						bezier[node.i + 1] = y = _round(node.y + m * cos);

						if (node.smooth) {
							//make sure smooth anchors stay smooth!
							cp = changes[i - 1];
							m = Math.sin(cp.a + angle) * magnitude * cp.t;
							x1 = cp.x + m * sin;
							y1 = cp.y + m * cos;

							cp = changes[i + 1];
							m = Math.sin(cp.a + angle) * magnitude * cp.t;
							x2 = cp.x + m * sin;
							y2 = cp.y + m * cos;

							a = Math.atan2(y2 - y1, x2 - x1);
							cpCos = Math.cos(a);
							cpSin = Math.sin(a);

							dx = x2 - x;
							dy = y2 - y;
							d = Math.sqrt(dx * dx + dy * dy);
							bezier[cp.i] = _round(x + cpCos * d);
							bezier[cp.i + 1] = _round(y + cpSin * d);

							cp = changes[i - 1];
							dx = x1 - x;
							dy = y1 - y;
							d = Math.sqrt(dx * dx + dy * dy);
							bezier[cp.i] = _round(x - cpCos * d);
							bezier[cp.i + 1] = _round(y - cpSin * d);
							i++;
						}
					}
				}
				if (debug) {
					for (i = 0; i < l; i++) {
						node = changes[i];
						node.dot.setAttribute("cx", bezier[node.i]);
						node.dot.setAttribute("cy", bezier[node.i + 1]);
					}
				} else if (start) {
					e.setAttribute("d", pathStart + bezier.join(","));
				} else {
					e.setAttribute(
						"d",
						"M" + bezier[0] + "," + bezier[1] + " C" + bezier.slice(2).join(",")
					);
				}
			},
		});
		return tl;
	}

	// console.log("wave-anims");
}
