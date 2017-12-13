/*==============================================================================
Main Script
==============================================================================*/
$(() => {
  "use strict";

  /*============================================================================
  Landing page opening titles and effects
  ============================================================================*/
  // Titles and slider effects
  $("#txt-col").show({effect: "slide", direction: "down", duration: 1000});
  $("#slider-wrapper").show({ effect: "fade", duration: 1000 });

  /*============================================================================
  Adds .small class to nav bar on scroll
  ============================================================================*/
  $(document).on("scroll", () => {
  	($(document).scrollTop() > 1) ?
    $("#nav-lg").removeClass("large").addClass("small") :
    $("#nav-lg").removeClass("small").addClass("large");
  });

  /*============================================================================
  Title effects
  ============================================================================*/
  $(window).on("scroll", () => {
    if ($(this).scrollTop() > 400) {
      $("#services .section-header").show("fade");
    }
    if ($(this).scrollTop() > 700) {
      $.each($(".skill-wrapper"), (i, el) => {
        setTimeout(() => {
          $(el).show({effect: "drop", direction: "down", duration: 1000});
        }, (i * 250));
      });
    }
    if ($(this).scrollTop() > 1400) {
      $("#about .section-header").show("fade");
    }
    if ($(this).scrollTop() > 1700) {
      $("#about p").show("fade");
    }
    if ($(this).scrollTop() > 2200) {
      $("#portfolio .section-header").show("fade");
      $("#portfolio-filter").show("fade");
    }
    if ($(this).scrollTop() > 2400) {
      $(".grid").show({effect: "drop", direction: "down", duration: 1000});
    }
  });

  /*============================================================================
  Hamburger menu animation
  ============================================================================*/
  $(".hamburger").on("click", () => {
    $(".hamburger").toggleClass("is-active");
    $("#site-nav").toggle({effect: "slide", direction: "up", duration: 500});
    $(this).toggleClass("nav");
  });
  $(".nav a").on("click", () => {
    $("#site-nav").hide();
  });

  /*============================================================================
  Nav bar links
  ============================================================================*/
  const el = ("html, body");
  $("#first, #first-lg").on("click", () => {
    $(el).animate({scrollTop: ($("#services").first().offset().top)}, 1000);
    $(".hamburger").toggleClass("is-active");
  });
  $("#second, #second-lg").on("click", () => {
    $(el).animate({scrollTop: ($("#about").first().offset().top)}, 1000);
    $(".hamburger").toggleClass("is-active");
  });
  $("#third, #third-lg").on("click", () => {
    $(el).animate({scrollTop: ($("#portfolio").first().offset().top)}, 1000);
    $(".hamburger").toggleClass("is-active");
  });
  $("#fourth, #fourth-lg").on("click", () => {
    $(el).animate({scrollTop: ($("#contact").first().offset().top)}, 1000);
    $(".hamburger").toggleClass("is-active");
  });

  /*============================================================================
  Photo slider
  ============================================================================*/
  $("#macbook-slider").slick({
    accessibility: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    waitForAnimate: false,
    dots: false,
    arrows: false,

    autoplay: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 2000
  });

  /*============================================================================
  Sequential Filtering Component
  ============================================================================*/
  const $filters = $(".filter [data-filter]"),
        $boxes = $(".boxes [data-category]");

  $filters.on("click", function(e) {
    e.preventDefault();
    const $this = $(this);

    $filters.removeClass("active");
    $this.addClass("active");

    const $filterType = $this.attr("data-filter");

    if ($filterType == "all") {
      $boxes.fadeOut().promise().done(() => {
        $boxes.fadeIn();
      });
    } else {
      $boxes.fadeOut().promise().done(() => {
        $boxes.filter('[data-category = "' + $filterType + '"]').fadeIn();
      });
    }
  });

  /*============================================================================
  Keep Filter Links Highlighted
  ============================================================================*/
  $("a").click(() => {
    $(this).toggleClass("active");
  });

  /*============================================================================
  Dynamic copyright year
  ============================================================================*/
  $("#year").html(new Date().getFullYear());

});
