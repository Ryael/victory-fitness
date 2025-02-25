/* Remove active classes from the tab and tab-pane. */
function removeActiveClass() {
  $(".active-tab").removeClass("active-tab");
  $(".active-item").removeClass("active-item");
}

/* Display Premium tab. */
$("#premium-tab").click(function () {
  removeActiveClass();
  $('a[href*="#premium"]').addClass("active-item");
  $("#premium").addClass("active-tab");
});

/* Display Semi-Private tab. */
$("#semi-private-tab").click(function () {
  removeActiveClass();
  $('a[href*="#semi-private"]').addClass("active-item");
  $("#semi-private").addClass("active-tab");
});

/* Display Online tab. */
$("#online-tab").click(function () {
  removeActiveClass();
  $('a[href*="#online"]').addClass("active-item");
  $("#online").addClass("active-tab");
});

$(".tab-item > a").click(function () {
  if (!($(this).hasClass("active-item"))) {
    $(".active-item").attr("aria-selected", "false");
    $(".active-item").removeClass("active-item");
    $(".active-tab").removeClass("active-tab");
    $(this).addClass("active-item");
    $(this).attr("aria-selected", "true");
    $($(this).attr("href")).addClass("active-tab");
  }

  return false;
});
