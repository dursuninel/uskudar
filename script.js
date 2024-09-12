$(".header-logo img").on("dragstart", function (event) {
  event.preventDefault();
});

$(".menuToggle, .overlay-header").on("click", function () {
  $("header .header-nav").toggleClass("active");
  $(".header-flex").toggleClass("active");

  setTimeout(() => {
    if ($(".header-flex").hasClass("active")) {
      $(".header-flex input").prop("checked", true);
      $(".out-check").css("z-index", "99");
      // $(".out-check").hide(250);
      $("body").css("overflow-y", "hidden");
    } else {
      $(".header-flex input").prop("checked", false);
      $(".out-check").css("z-index", "0");
      $("body").css("overflow-y", "auto");
    }
  }, 1);
});

$(".header-nav > ul.navigation-list > li:last-child > a").on(
  "click",
  function () {
    $(this).closest("li").toggleClass("active");
  }
);
