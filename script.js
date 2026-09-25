/* =================================
   PORTFOLIO JAVASCRIPT
================================= */


/* =================================
   MOBILE MENU
================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =================================
   SCROLL REVEAL
================================= */

const revealElements = document.querySelectorAll(
    ".section-number, .about-grid, .skill-card, .project-card, .education-item, .cert-card, .resume-section, .contact-section"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =================================
   PROJECT CARD STAGGER ANIMATION
================================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});


/* =================================
   SKILL CARD STAGGER
================================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});


/* =================================
   CERTIFICATION STAGGER
================================= */

const certCards = document.querySelectorAll(".cert-card");

certCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});


/* =================================
   CUSTOM CURSOR
================================= */

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);


document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.clientX + "px";

    cursor.style.top = event.clientY + "px";

});


/* Cursor hover effect */

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card, .cert-card, .photo-frame"
);

hoverElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-big");

    });


    element.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-big");

    });

});


/* =================================
   PARALLAX HERO
================================= */

const hero = document.querySelector(".hero");
const heroPhoto = document.querySelector(".hero-right");

if (hero && heroPhoto) {

    window.addEventListener("scroll", () => {

        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight) {

            heroPhoto.style.transform =
                `translateY(${scrollPosition * 0.08}px)`;

        }

    });

}


/* =================================
   IMAGE LOAD EFFECT
================================= */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.style.opacity = "0";

    image.style.transition = "opacity 0.7s ease";


    if (image.complete) {

        image.style.opacity = "1";

    } else {

        image.addEventListener("load", () => {

            image.style.opacity = "1";

        });

    }

});


/* =================================
   ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =================================
   SMOOTH ANCHOR SCROLL
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =================================
   CONSOLE MESSAGE
================================= */

console.log(
    "✨ Welcome to Sadem Sharmila's Portfolio!"
);

console.log(
    "Built with HTML, CSS & JavaScript."
);