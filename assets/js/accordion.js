// Accordion.
$(".accordion").each(function(){
  var allPanels = $(this).children("dd").hide();
  var allTabs = $(this).children("dt").children("a");
  allTabs.attr("role", "button");
  $(this).children("dd").first().slideDown("easeOutExpo");
  $(this).children("dt").children("a").first().addClass("active");
  $(this).children("dt").children("a").attr("aria-expanded", "false");
  $(this).children("dt").children("a").first().attr("aria-expanded", "true");

  $(this).children("dt").children("a").click(function(){
    var current = $(this).parent().next("dd");
    allTabs.removeClass("active");
    $(this).addClass("active");
    allTabs.attr("aria-expanded", "false");
    $(this).attr("aria-expanded", "true");
    allPanels.not(current).slideUp("easeInExpo");
    $(this).parent().next().slideDown("easeOutExpo");
    return false;
  });

 });

// Toggle.
var allToggles = $(".toggle > dd").hide();
var allTabs = $(".toggle > dt > a");
allTabs.attr({
  "role": "button",
  "aria-expanded": "false"
  });

$(".toggle > dt > a").click(function(){

  if ($(this).hasClass("active")) {
    $(this).parent().next().slideUp("easeOutExpo");
    $(this).removeClass("active");
    $(this).attr("aria-expanded", "false");
  }
  else {
    var current = $(this).parent().next("dd");
    $(this).addClass("active");
    $(this).attr("aria-expanded", "true");
    $(this).parent().next().slideDown("easeOutExpo");
  }

  return false;
});
