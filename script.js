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

var swiper = new Swiper(".banner_main", {
  effect: "fade",
  loop: true,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".clubs_slide", {
  // effect: "fade",
  loop: true,
  autoHeight: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Filtreleme işlemi için tarih hesaplaması
function calculateDateRange(days) {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - days);
  return pastDate;
}

// Tarih filtresine göre karşılaştırma fonksiyonu
function filterByDate(matchDate, selectedDateFilter) {
  const matchDateObj = new Date(matchDate.split(".").reverse().join("-"));

  if (selectedDateFilter === "gecen_hafta") {
    return matchDateObj >= calculateDateRange(7);
  } else if (selectedDateFilter === "1_ay") {
    return matchDateObj >= calculateDateRange(30);
  } else if (selectedDateFilter === "2_ay") {
    return matchDateObj >= calculateDateRange(60);
  } else {
    return true; // Tüm tarihleri göster
  }
}

// Filtreleme fonksiyonu
function filterMatches() {
  const selectedLeague = $("#leagueFilter").val();
  const selectedDate = $("#dateFilter").val();

  $(".match_item").each(function () {
    const matchLeague = $(this).attr("lig");
    const matchDate = $(this).attr("date");

    // Lig ve tarih filtresine göre görünürlük ayarlama
    if (
      (!selectedLeague || matchLeague === selectedLeague) &&
      filterByDate(matchDate, selectedDate)
    ) {
      $(this).css({ display: "flex" });
    } else {
      $(this).hide();
    }
  });
}

// Lig ve tarih seçildiğinde filtreleme fonksiyonunu çalıştır
$("#leagueFilter").on("change", filterMatches);
$("#dateFilter").on("change", filterMatches);
