$(".tab-item > a").click(function() {
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
