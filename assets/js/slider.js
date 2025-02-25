// Fullwidth slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    slideSpeed: 350,
    items: 1,
    autoHeight: true,
    nav: true,
    lazyLoad: true,
    loop: true,
    addClassActive: true,
    navText: ["<span class='sr-only'>Previous Slide</span><i class='fa fa-angle-left' aria-hidden='true'></i>", "<span class='sr-only'>Next Slide</span><i class='fa fa-angle-right' aria-hidden='true'></i>"],
  });
});
