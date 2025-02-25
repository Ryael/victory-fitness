/* Scoll to Coaching Comparisons depending on whether the navigation bar is present or not. */
$(".coaching-scroll").click(function () {
  if ($("#nav-bar.scroll").css("background") == "rgb(255, 255, 255)") {
    $('html, body').animate({
        scrollTop: $("#coaching-comparison-tabs").offset().top - 65
      },
      'slow');
  } else {
    $('html, body').animate({
        scrollTop: $("#coaching-comparison-tabs").offset().top
      },
      'slow');
  }
});
