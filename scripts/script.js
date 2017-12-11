/*==============================================================================
Main Script
==============================================================================*/

$( () => {

  /*============================================================================
  Landing page opening titles and effects
  ============================================================================*/

  // Titles and slider effects
  $( '#txt-col' ).show( { effect: 'slide', direction: 'down', duration: 1000 } );
  $( '#slider-wrapper' ).show( { effect: 'fade', duration: 1000 } );

  /*============================================================================
  Adds .small class to nav bar on scroll
  ============================================================================*/

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

  /*============================================================================
  Title effects
  ============================================================================*/

  $( document ).on( 'scroll', function() {
    if ( $( document ).scrollTop() > 400 ) {
      $( '#services .section-header').show( 'fade' );
    }
  });
  $( document ).on( 'scroll', function() {
  	if ( $( document ).scrollTop() > 700 ) {
      $.each( $( '.skill-wrapper' ), function( i, el ) {
        setTimeout( () => {
          $( el ).show( { effect: 'drop', direction: 'down', duration: 1000 } );
        }, ( i * 250 ) );
      });
    }
  });
  $( document ).on( 'scroll', function() {
    if ( $( document ).scrollTop() > 1400 ) {
      $( '#about .section-header' ).show( 'fade' );
    }
  });
  $( document ).on( 'scroll', function() {
  	if ( $( document ).scrollTop() > 1700 ) {
      $( '#about p' ).show( 'fade' );
    }
  });
  $( document ).on( 'scroll', function() {
    if ( $( document ).scrollTop() > 2200 ) {
      $( '#portfolio .section-header' ).show( 'fade' );
      $( '#portfolio-filter' ).show( 'fade' );
    }
  });
  $( document ).on( 'scroll', function() {
    if ( $( document ).scrollTop() > 2400 ) {
      $( '.grid' ).show( { effect: 'drop', direction: 'down', duration: 1000 } );
    }
  });

  /*============================================================================
  Hamburger menu animation
  ============================================================================*/

  const $hamburger = $( '.hamburger' );
  $( '.hamburger' ).on( 'click', ( e ) => {
    $( '.hamburger' ).toggleClass( 'is-active' );
    $( '#site-nav' ).toggle( { effect: 'slide', direction: 'up', duration: 500 } );
    $( this ).toggleClass( 'nav' );
  });
  $( '.nav a' ).on( 'click', ( e ) => {
    $( '#site-nav' ).hide();
  });

  /*============================================================================
  Nav bar links
  ============================================================================*/

  $( '#first' ).on( 'click', ( e ) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#services' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#second' ).on( 'click', ( e ) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#about' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#third' ).on( 'click', ( e ) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#portfolio' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#fourth' ).on( 'click', ( e ) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#contact' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });

  // Nav bar links for desktop
  $( '#first-lg' ).on( 'click', ( e ) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#services' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#second-lg' ).on( 'click', ( e ) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#about' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#third-lg' ).on( 'click', ( e ) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#portfolio' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });
  $( '#fourth-lg' ).on( 'click', ( e ) => {
    $( 'html, body' ).animate({
      scrollTop: ( $( '#contact' ).first().offset().top )
    }, 1000 );
    $( '.hamburger' ).toggleClass( 'is-active' );
  });

  /*============================================================================
  Photo slider
  ============================================================================*/

  $( '#macbook-slider' ).slick({
    // Disable defaults
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
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    infinite: true,
  });

  /*============================================================================
  Sequential Filtering Component
  ============================================================================*/

  const $filters = $( '.filter [data-filter]' ),
    $boxes = $( '.boxes [data-category]' );

  $filters.on( 'click', function( e ) {
    e.preventDefault();
    const $this = $( this );

    $filters.removeClass( 'active' );
    $this.addClass( 'active' );

    const $filterType = $this.attr( 'data-filter' );

    if ( $filterType == 'all' ) {
      $boxes.fadeOut().finish().promise().done( () => {
        $boxes.each( function( i ) {
          $( this ).delay( ( i++ ) * 500 ).fadeIn();
        });
      });
    } else {
      $boxes.fadeOut().finish().promise().done( () => {
        $boxes.filter( '[data-category = "' + $filterType + '"]' ).each( function( i ) {
          $( this ).delay( ( i++ ) * 500 ).fadeIn();
        });
      });
    }
  });

  /*============================================================================
  Keep Filter Links Highlighted
  ============================================================================*/

  jQuery( 'a' ).click( () => {
    jQuery( this ).toggleClass( 'active' );
  });

  /*============================================================================
  Dynamic copyright year
  ============================================================================*/

  $( '#year' ).html( new Date().getFullYear() );

});
