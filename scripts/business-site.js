/*==============================================================================
Business Site
==============================================================================*/

$(() => {

  /*============================================================================
  Photo slider
  ============================================================================*/

  // Problem: Homepage needs an autoplaying, fullscreen photo slider
  // Solution: Create an autoplaying, fullscreen photo slider

  // ** Autoplay on page load: **

  // When the page loads, autoplay the slider
  var images = [
    "images/01-farmers.jpg",
    "https://www.dropbox.com/s/gksfzsdowt256np/02-first-responders.jpg?dl=1",
    "https://www.dropbox.com/s/q1cxpwm4z7gp15s/03-construction.jpg?dl=1",
    "https://www.dropbox.com/s/4c1cen0ixa6h6nc/04-news-reporters.jpg?dl=1",
    "https://www.dropbox.com/s/b49mumhex290zjt/05-real-estate.jpg?dl=1",
    "https://www.dropbox.com/s/o59azxzehrt4szd/06-filmmakers.jpg?dl=1",
  ];
  var $body = $("body"),
      $bg = $("#bg"),
      n = images.length,
      c = 0;
  for(var i=0; i<n; i++){
    var tImg = new Image();
    tImg.src = images[i];
  }

  $body.css({backgroundImage : "url("+images[c]+")"});

  (function loopBg(){
    $bg.hide().css({backgroundImage : "url("+images[++c%n]+")"}).delay(5000).fadeTo(1200, 1, function(){
      $body.css({backgroundImage : "url("+images[c%n]+")"});
      loopBg();
    });
  }());

  /*============================================================================
  Typing Plugin
  ============================================================================*/

  $('#typeit').typeIt({
    strings: ["farmers.", "first responders.", "construction companies.", "news reporters.", "real estate companies.", "filmmakers."],
    speed: 100,
    cursorSpeed: 750,
    deleteDelay: 4000,
    breakLines: false,
    autoStart: true,
    loop: true,
    loopDelay: 5000,
    lifeLike: true,
    cursor: true
  });

});
