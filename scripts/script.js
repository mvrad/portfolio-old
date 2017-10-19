$(() => {

  // Titles and iMac slider effects
  $( '#txt-col' ).show( { effect: 'slide', direction: 'left', duration: 1000 } );
  $( '#imac' ).show( { effect: 'slide', direction: 'down', duration: 1000 } );

  // Adds .small class to nav bar on scroll
  // For mobile / tablet
  $( document ).on( 'scroll', function() {
  	if ( $( document ).scrollTop() > 100 ) {
  		$( '#main-nav' ).removeClass( 'large' ).addClass( 'small' );
    } else {
  		$( '#main-nav' ).removeClass( 'small' ).addClass( 'large' );
  	}
  });
  // For desktop
  $( document ).on( 'scroll', function() {
  	if ( $( document ).scrollTop() > 50 ) {
  		$( '#nav-lg' ).removeClass( 'large' ).addClass( 'small' );
  	} else {
  		$( '#nav-lg' ).removeClass( 'small' ).addClass( 'large' );
  	}
  });

  // More titles and effects
  $( document ).on( 'scroll', function() {
    if ( $( document ).scrollTop() > 400 ) {
      $( '#services .section-header' ).show( 'puff' );
    }
  });
  $( document ).on( 'scroll', function() {
  	if ( $( document ).scrollTop() > 600 ) {
      $( '.skill-wrapper' ).show( { effect: 'drop', direction: 'down', duration: 1000 } );
    }
  });
  $( document ).on( 'scroll', function() {
    if ( $( document ).scrollTop() > 1400 ) {
      $( '#about .section-header' ).show( 'puff' );
    }
  });
  $( document ).on( 'scroll', function() {
  	if ( $( document ).scrollTop() > 1600 ) {
      $( '#about p' ).show( { effect: 'drop', direction: 'down', duration: 1000 } );
    }
  });
  $( document ).on( 'scroll', function() {
    if ( $( document ).scrollTop() > 2300 ) {
      $( '#portfolio .section-header' ).show( 'puff' );
    }
  });

  // Animates hamburger menu 'for mobile'
  const $hamburger = $( '.hamburger' );
  $( '.hamburger' ).on( 'click', (e) => {
    $( '.hamburger' ).toggleClass( 'is-active' );
    $( '#site-nav' ).toggle( { effect: 'slide', direction: 'up', duration: 500 } );
    $( this ).toggleClass( 'nav' );
  });
  $( '.nav a' ).on( 'click', (e) => {
    $( '#site-nav' ).hide();
  });

  // Nav bar links
  $( '#first' ).on( 'click', (e) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#services' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#second' ).on( 'click', (e) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#about' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#third' ).on( 'click', (e) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#portfolio' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#fourth' ).on( 'click', (e) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#contact' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });

  // Nav bar links for desktop
  $( '#first-lg' ).on( 'click', (e) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#services' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#second-lg' ).on( 'click', (e) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#about' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#third-lg' ).on( 'click', (e) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#portfolio' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#fourth-lg' ).on( 'click', (e) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#contact' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });

  // Photo slider
  $( document ).ready(() => {
    $( '.slider' ).slick({
      fade: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      dots: false,
      arrows: false,
    });
  });

  var frmvalidator  = new Validator("emailform");
  frmvalidator.addValidation("name","req","Please provide your name");
  frmvalidator.addValidation("email","req","Please provide your email");
  frmvalidator.addValidation("email","email","Please enter a valid email address");

});
