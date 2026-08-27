// ===============================
// Malou AI UGC Portfolio
// script.js
// ===============================

// Sticky Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .video-card, .service-card, .glass"
);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {
            el.classList.add("active");
        }

    });

}

revealElements.forEach((el) => {
    el.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Smooth Anchor Scroll
// ===============================

navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===============================
// Ensure Videos Autoplay
// ===============================

const videos = document.querySelectorAll("video");

videos.forEach((video) => {

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
        const promise = video.play();

        if (promise !== undefined) {
            promise.catch(() => {});
        }
    };

    playVideo();

    document.addEventListener(
        "visibilitychange",
        () => {
            if (!document.hidden) {
                playVideo();
            }
        },
        { passive: true }
    );

});

// ===============================
// Hover Pause (Optional)
// ===============================

videos.forEach((video) => {

    video.addEventListener("mouseenter", () => {
        video.pause();
    });

    video.addEventListener("mouseleave", () => {
        video.play().catch(() => {});
    });

});

// ===============================
// Hero Fade In
// ===============================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s ease";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 200);

});

// ===============================
// Console Message
// ===============================

console.log(
    "%cMalou AI UGC Portfolio Loaded 🚀",
    "color:#00d4ff;font-size:16px;font-weight:bold;"
);