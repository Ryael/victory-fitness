/* Constants/Configs */

const myNav = document.querySelector("#nav-bar");
const mobileNav = document.querySelector("#mobile-nav");
const navMenu = document.querySelector("#nav-menu");
const menuToggle = document.querySelector("#nav-toggle");
const menuLinks = navMenu.querySelectorAll(".nav-link");
let isMenuOpen = false;

/* Navigation Bar */


window.onscroll = () => {
    if (this.scrollY <= 50) myNav.className = "";
    else myNav.className = "scroll";
};

/* Mobile Menu */

// Toggle Menu Active State.
menuToggle.addEventListener("click", e => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;

    // Toggle ally attributes and active class
    menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
    navMenu.hidden = !isMenuOpen;
    mobileNav.classList.toggle("nav--open");
});

// Trap tab inside when open.
mobileNav.addEventListener("keydown", e => {
    // Abort if menu isn't open or modifier keys are pressed.
    if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
        return;
    }

    // Listen for tab press and move focus,
    // if we're on either end of the navigation.
    if (e.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === menuLinks[0]) {
                menuToggle.focus();
                e.preventDefault();
            }
        } else if (document.activeElement === menuToggle) {
            menuLinks[0].focus();
            e.preventDefault();
        }
    }
});