(function ($) {
  "use strict";

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  $(document).ready(function () {
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
      });
    }

    $(".slider_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
        },
        992: {
          items: 1,
          nav: true,
        },
        1200: {
          items: 1,
        },
        1600: {
          items: 1,
          nav: true,
        },
      },
    });

    var brand_active = $(".brand_active");
    if (brand_active.length) {
      brand_active.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>',
        ],
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        center: false,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          767: {
            items: 3,
          },
          992: {
            items: 4,
          },
          1200: {
            items: 4,
          },
          1500: {
            items: 5,
          },
        },
      });
    }

    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      },
    });

    $(".portfolio-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    $(".portfolio-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

    new WOW().init();

    $(".counter").counterUp({
      delay: 10,
      time: 10000,
    });

    $(".popup-image").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".img-pop-up").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".popup-video").magnificPopup({
      type: "iframe",
    });

    $.scrollIt({
      upKey: 38,
      downKey: 40,
      easing: "linear",
      scrollTime: 600,
      activeClass: "active",
      onPageChange: null,
      topOffset: 0,
    });

    $.scrollUp({
      scrollName: "scrollUp",
      topDistance: "4500",
      topSpeed: 300,
      animation: "slide",
      animationInSpeed: 200,
      animationOutSpeed: 200,
      easingType: "linear",
      scrollText: '<i class="ti-angle-up"></i>',
      activeOverlay: false,
      easingType: "linear",
      scrollSpeed: 900,
      animation: "slide",
    });

    $(".brand-active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 4,
        },
        992: {
          items: 7,
        },
      },
    });

    $(".project-active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      navText: [
        '<i class="Flaticon flaticon-left-arrow"></i>',
        '<i class="Flaticon flaticon-right-arrow"></i>',
      ],
      nav: true,
      dots: false,

      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 2,
          nav: false,
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        },
      },
    });

    if (document.getElementById("default-select")) {
      $("select").niceSelect();
    }

    $(".details_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,

      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,

      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
        },
      },
    });
  });

  $(document).ready(function () {
    $(".popup-with-form").magnificPopup({
      type: "inline",
      preloader: false,
      focus: "#name",

      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = "#name";
          }
        },
      },
    });
  });

  function mailChimp() {
    $("#mc_embed_signup").find("form").ajaxChimp();
  }
  mailChimp();

  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $("#search_input_box").slideUp(500);
  });

  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $(document).ready(function () {
    $("select").niceSelect();
  });

  const tilt = $(".js-tilt").tilt({
    maxTilt: 20,
  });

  var cursor = document.getElementById("cursor");
  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
})(jQuery);

$(document).ready(function() {
  $('.accordion a').click(function(){
    $(this).toggleClass('active');
    $(this).next('.content').slideToggle(400);
   });
});

