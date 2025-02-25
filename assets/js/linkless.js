/* Constants & Configs */

const myNav = document.querySelector("#nav-bar");
const navMenu = document.querySelector("#nav-menu");
const menuLinks = navMenu.querySelectorAll(".nav-link");
const whiteLogo = myNav.querySelector("#white-nav-logo");
const redLogo = myNav.querySelector("#red-nav-logo");

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
  } else {
    setTransparentNavbar();
  }
}

function setSolidNavbar() {
  myNav.classList.remove("scroll");
  whiteLogo.classList.remove("transparent");
  redLogo.classList.add("transparent");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.remove("black"));
};

function setTransparentNavbar() {
  myNav.classList.add("scroll");
  whiteLogo.classList.add("transparent");
  redLogo.classList.remove("transparent");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.add("black"));
}
