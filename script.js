$("header").html(`<div class="container">
        <div class="header-flex">
          <div class="header-logo">
            <a href="/">
              <img src="images/logo.png" alt="Üsküdar" />
            </a>
          </div>
          <div class="header-nav">
            <div class="header-burger inner-check">
              <div class="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul class="navigation-list">
              <li>
                <a href="/" title="Anasayfa">Anasayfa </a>
              </li>
              <li>
                <a href="/hakkimizda.html">Hakkımızda</a>
              </li>
              <li>
                <a href="/kuluplar.html" title="Kulüpler">Kulüpler </a>
              </li>
              <li>
                <a href="/duyurular.html" title="Duyurular">Duyurular </a>
              </li>
              <li>
                <a href="/haberler.html" title="Haberler">Haberler</a>
              </li>
              <li>
                <a href="/mac-sonuclari.html" title="Maç Sonuçları"
                  >Maç Sonuçları
                </a>
              </li>
              <li class="mob_box">
                <a href="/iletisim.html" title="İletişim">İletişim </a>
              </li>
            </ul>
          </div>
          <div class="">
            <a href="/iletisim.html" title="İletişim" class="btn_style">
              İletişim
            </a>
          </div>
          <div class="header-burger out-check">
            <div class="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="overlay-header"></div>
        </div>
      </div>`);

$("footer").html(`
        <div class="footer_contact">
        <div class="container">
          <div class="footer_contact_flex">
            <h2>Bizimle İletişime Geçin!</h2>
            <a href="tel:0123456789" class="btn_style"> Hemen Arayın </a>
          </div>
        </div>
      </div>
      <div class="footer-main">
        <div class="container">
          <div class="footer-flex">
            <div>
              <p class="title">Bağlantılar</p>
              <ul>
                <li>
                  <a href="/">Anasayfa</a>
                </li>
                <li>
                  <a href="/hakkimizda.html" title="Hakkımızda">Hakkımızda</a>
                </li>
                <li>
                  <a href="/kuluplar.html" title="Kulüpler">Kulüpler</a>
                </li>
                <li>
                  <a href="/duyurular.html" title="Duyurular">Duyurular</a>
                </li>
                <li>
                  <a href="/haberler.html" title="Haberler">Haberler</a>
                </li>
                <li>
                  <a href="/mac-sonuclari.html" title="Maç Sonuçları"
                    >Maç Sonuçları</a
                  >
                </li>
                <li>
                  <a href="/iletisim.html" title="İletişim">İletişim</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="title">Duyurular</p>
              <ul>
                <li>
                  <a href="javascript:;">Duyuru Başlığı</a>
                </li>
                <li>
                  <a href="javascript:;">Duyuru Başlığı</a>
                </li>
                <li>
                  <a href="javascript:;">Duyuru Başlığı</a>
                </li>
                <li>
                  <a href="javascript:;">Duyuru Başlığı</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="title">Haberler</p>
              <ul>
                <li>
                  <a href="javascript:;">Haber Başlığı</a>
                </li>
                <li>
                  <a href="javascript:;">Haber Başlığı</a>
                </li>
                <li>
                  <a href="javascript:;">Haber Başlığı</a>
                </li>
                <li>
                  <a href="javascript:;">Haber Başlığı</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="title">Sosyal Medya</p>
              <ul class="social_media">
                <li>
                  <a href="/"><i class="fa-brands fa-instagram"></i></a>
                </li>
                <li>
                  <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
                <li>
                  <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
                </li>
                <li>
                  <a href="/"><i class="fa-brands fa-facebook-f"></i></a>
                </li>
              </ul>
            </div>
            <div>
              <p class="title">İletişim</p>
              <ul>
                <li>
                  <a href="/" target="_blank">
                    Lorem ıpsum sok. No: 1345 Cad. Lorem Ipsum Mıgır
                  </a>
                </li>
                <li>
                  <a href="tel:0 123 456 789">0 123 456 789</a>
                </li>
                <li>
                  <a href="mailto:info@uskudarkulupler.com"
                    >info@uskudarkulupler.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-main">
        <div class="container">
          <div class="copyright-flex">
            <p>© 2024 Üsküdar Kulüpler Birliği, Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
      `);

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

var swiper = new Swiper(".announcements_slide", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
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
