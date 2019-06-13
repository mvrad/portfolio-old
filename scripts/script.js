/*==============================================================================
Main Script
==============================================================================*/
$(() => {

  "use strict";

  // Preload images
  $.fn.preload = function() {
    this.each(() => {
      $("<images/>")[0].src = this;
    });
  }

  $(
    ["code.svg","responsive.svg","seo.svg","macbook-pro.png","mac-agage.jpg",
    "mac-int.jpg","mac-reg.jpg","me.jpg","thumb-ag.jpg","thumb-author.jpg",
    "thumb-employee.jpg","thumb-int.jpg","thumb-pagination.jpg","thumb-performer.jpg",
    "thumb-pnw.jpg","thumb-quotes.jpg","thumb-reg.jpg","thumb-tictactoe.jpg",
    "thumb-uav.jpg","thumb-wino.jpg"]
  ).preload();

  //  Landing page opening titles and effects
  $("#txt-col").show({
    effect: "slide",
    direction: "down",
    duration: 1000
  });

  // Adds .small class to nav bar on scroll
  $(document).on("scroll", () => {
    ($(document).scrollTop() > 1) ?
    $("#nav-lg").removeClass("large").addClass("small"):
      $("#nav-lg").removeClass("small").addClass("large");
  });

  // Hamburger menu animation
  $(".hamburger").on("click", () => {
    $(".hamburger").toggleClass("is-active");
    $("#site-nav").toggle({
      effect: "slide",
      direction: "up",
      duration: 500
    });
    $(this).toggleClass("nav");
  });
  $(".nav a").on("click", () => {
    $("#site-nav").hide();
  });

  // Nav bar links
  $("#first, #first-lg").on("click", () => {
    $("html, body").animate({
      scrollTop: ($("#services").first().offset().top)
    }, 1000);
    $(".hamburger").toggleClass("is-active");
  });
  $("#second, #second-lg").on("click", () => {
    $("html, body").animate({
      scrollTop: ($("#about").first().offset().top)
    }, 1000);
    $(".hamburger").toggleClass("is-active");
  });
  $("#third, #third-lg").on("click", () => {
    $("html, body").animate({
      scrollTop: ($("#portfolio").first().offset().top)
    }, 1000);
    $(".hamburger").toggleClass("is-active");
  });
  $("#fourth, #fourth-lg").on("click", () => {
    $("html, body").animate({
      scrollTop: ($("#contact").first().offset().top)
    }, 1000);
    $(".hamburger").toggleClass("is-active");
  });

  // Photo slider
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

  // Sequential Filtering Component
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

  // Keep Filter Links Highlighted
  $("a").click(() => {
    $(this).toggleClass("active");
  });
  // Contact Email Form
  const form = $("#ajax-contact");
  const formMessages = $("#form-messages");
  $(form).submit(function(e) {
    e.preventDefault();
    const formData = $(form).serialize();
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData
    })
    .done(function(response) {
      $(formMessages).removeClass("error");
      $(formMessages).addClass("success");
      $(formMessages).text(response);
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
    })
    .fail(function(data) {
      $(formMessages).removeClass("success");
      $(formMessages).addClass("error");
      if (data.responseText !== "") {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text("Oops! An error occured and your message could not be sent.");
      }
    });
  });

  $(".modal").on("click", () => {
    $(".modal-window").css("display", "block")
    $("body").addClass("no-scroll");
  });  
  $(".modal-close").on("click", () => {
    $(".modal-window").css("display", "none");
    $("body").removeClass("no-scroll");
    window.history.replaceState(null, null, window.location.pathname); 
  });

  // Dynamic copyright year
  $("#year").html(new Date().getFullYear());
});
