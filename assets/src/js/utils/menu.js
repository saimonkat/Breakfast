export default function () {
	const headerMenuButton = document.getElementById("headerNavButton");
	const navMenuButton = document.getElementById("menuNavButton");
	const menu = document.querySelector(".menu");
	const body = document.querySelector("body");
    const links = document.querySelectorAll('a[href]');

    // Prevent current page link click
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if(e.currentTarget.href === window.location.href) {
                e.preventDefault();
                e.stopPropagation();
            }
        })
    });

	if (menu) {
		window.addEventListener("load", () => {
			menu.classList.add("menu");
		});

		document.addEventListener(
			"click",
			(e) => {
				if (headerMenuButton.contains(e.target)) {
					// headerMenuButton.style.transition = "all 0.3s ease-in 0.3s";
					// nav.style.transition = "all 0.3s ease-in 0.6s";
					headerMenuButton.classList.toggle("active");
					navMenuButton.classList.toggle("active");
					menu.classList.toggle("open");
					body.classList.toggle("overflow");
				}
				if (navMenuButton.contains(e.target)) {
					// headerMenuButton.style.transition = "all 0.3s ease-in 0.6s";
					// nav.style.transition = "all 0.3s ease-in 0.3s";
					headerMenuButton.classList.toggle("active");
					navMenuButton.classList.toggle("active");
					menu.classList.toggle("open");
					body.classList.toggle("overflow");
				}
			},
			false
		);
	}

	// console.log("menu js connected");
}
