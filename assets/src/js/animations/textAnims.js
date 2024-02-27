import {gsap} from "gsap";

export default function () {
    const animatedText = document.querySelectorAll('.animated-text');
    const speed = 0.8; // seconds

    animatedText && animatedText.forEach(text => {
        const anim = text.getAttribute('data-anim');
        const rows = text.children;
        const rowsCount = rows.length;

        if (anim === 'static') {
            // Static animation
            let next = 0;
            let prev = rowsCount - 1;
            setInterval(() => {
                rows[prev].classList.remove('active');
                rows[next].classList.add('active');
                prev = next;
                next = (next === rowsCount - 1) ? 0 : next +1;
            }, speed * 1000);
        }
        else {
            // Regular & Transparent animations
            for (let i = 1; i < rowsCount; i++) {
                let tl = gsap.timeline();
                tl.from(rows[i], {
                    yPercent: -(i * 100),
                    duration: (i * speed),
                    ease: 'linear',
                    stagger: {
                        repeat: -1,
                        each: 1,
                        repeatDelay: (rowsCount - i - 0.85)  * speed
                    }
                });
            }
        }
    });
}
