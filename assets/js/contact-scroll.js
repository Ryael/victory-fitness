/* Scoll to Contact Form depending on whether the navigation bar is present or not. */
$(".coaching-scroll").click(function () {
  if ($("#nav-bar.scroll").css("background") == "rgb(255, 255, 255)") {
    $('html, body').animate({
        scrollTop: $("#form-contact").offset().top - 65
      },
      'slow');
  } else {
    $('html, body').animate({
        scrollTop: $("#form-contact").offset().top
      },
      'slow');
  }
});
