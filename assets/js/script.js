/* Constants & Configs */

const myNav = document.querySelector("#nav-bar");
const mobileNav = document.querySelector("#mobile-nav");
const navMenu = document.querySelector("#nav-menu");
const menuToggle = document.querySelector("#nav-toggle");
const menuLinks = navMenu.querySelectorAll(".nav-link");
const whiteLogo = myNav.querySelector("#white-nav-logo");
const redLogo = myNav.querySelector("#red-nav-logo");
const logoContainer = myNav.querySelector("#logo");
const activeNavLink = myNav.querySelector(".active")
let isMenuOpen = false;

// Uses Lightbox scripts
var SimpleLightbox = window.SimpleLightbox;

/* Navigation Bar */

// Sticky navigation bar.
// These changes are toggled whenever the 10px threshold is scrolled past.
window.onload = () => {
  setNavbarTransparency();
};

window.onscroll = () => {
  setNavbarTransparency();
}

function setNavbarTransparency() {
  if (this.scrollY <= 10) {
    setSolidNavbar();
  }
  else {
    setTransparentNavbar();
  }
}

function setSolidNavbar() {
  myNav.classList.remove("scroll");
  whiteLogo.classList.remove("transparent");
  redLogo.classList.add("transparent");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.remove("black"));
  activeNavLink.classList.remove("underlined");
}

function setTransparentNavbar() {
  myNav.classList.add("scroll");
  whiteLogo.classList.add("transparent");
  redLogo.classList.remove("transparent");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.add("black"));
  activeNavLink.classList.add("underlined");
}

/* Mobile Menu */

// Toggle Menu Active State.
menuToggle.addEventListener("click", e => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;

    // Toggle ally attributes and active class
    menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
    navMenu.hidden = !isMenuOpen;
    mobileNav.classList.toggle("nav--open");
    logoContainer.classList.toggle("mobile-nav");
    redLogo.classList.toggle("mobile-nav");
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

$(document).ready(function() {
  $('#popup-gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open.
    type: 'image',
    gallery:{
    enabled:true
    },
    preload: [0,2]
  });
});

/* Coaching Navigation */

/* Scoll to coaching comparisons depending on whether the navigation bar is present or not. */
$(".coaching-scroll").click(function() {
    if ($("#nav-bar.scroll").css("background") == "rgb(255, 255, 255)") {
      $('html, body').animate({
        scrollTop: $("#coaching-comparison-tabs").offset().top - 65},
        'slow');
    } else {
      $('html, body').animate({
        scrollTop: $("#coaching-comparison-tabs").offset().top},
        'slow');
    }
  }
);

/* Remove active classes from the tab and tab-pane. */
function removeActiveClass() {
  $(".active-tab").removeClass("active-tab");
  $(".active-item").removeClass("active-item");
}

/* Display Premium tab. */
$("#premium-tab").click(function() {
  removeActiveClass();
  $( 'a[href*="#premium"]' ).addClass("active-item");
  $("#premium").addClass("active-tab");
});

/* Display Semi-Private tab. */
$("#semi-private-tab").click(function() {
  removeActiveClass();
  $( 'a[href*="#semi-private"]' ).addClass("active-item");
  $("#semi-private").addClass("active-tab");
});

/* Display Online tab. */
$("#online-tab").click(function() {
  removeActiveClass();
  $( 'a[href*="#online"]' ).addClass("active-item");
  $("#online").addClass("active-tab");
});
