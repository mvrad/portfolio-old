/*==============================================================================
Interactive form
==============================================================================*/

$(() => {

  // Problem: Form does not allow for any interactivity
  // Solution: Create user interactivity

  // ** Set focus on the first text field: **

  // When the page loads, give focus to the first text field
  $( '#first_name' ).focus();

  // ** "Job Role" section of the form: **

  // A text field will be revealed when the "Other" option is selected from
  // the "Job Role" drop down menu.
  $( '#title' ).on( 'change', function() {
    if ( $( this ).val() === "other" ) {
      $( '#other-title' ).show( 'slow' );
      $( '#other-title' ).focus();
    } else {
      $( '#other-title' ).hide( 'slow' );
    }
  });

  // ** "T-Shirt info" section of the form: **

  // When the user selects a T-Shirt size, the "Design" menu appears, and when
  // the user selects a design, the "Color" menu appears.
  $( '#size' ).on( 'change', function() {
    $( '#shirt-container__2' ).show( 'slow' );
  });

  // For the T-Shirt color menu, only display the color options that match
  // the design selected in the "Design" menu.
  $( '#design' ).on( 'change', function() {
    $( '#shirt-container__3' ).show( 'slow' );
    if ( $( this ).val() === "wd conf" ) {
      $( '#color' ).val( '' );
      $( '.wd-conf' ).show();
      $( '.heart-wd' ).hide();
    } else {
      $( '#color' ).val( '' );
      $( '.heart-wd' ).show();
      $( '.wd-conf' ).hide();
    }
  });

  // ** "Register for Activities" section of the form: **

  // Some events are at the same time as others. If the user selects a
  // workshop, don't allow selection of a workshop at the same date and time --
  // you should disable the checkbox and visually indicate that the workshop in
  // the competing time slot isn't available.
  $( 'input[name=js-workshop]' ).on( 'click', function() {
    if ( $( this ).is( ':checked' ) ) {
      $( '#ruby' ).hide();
      $( '#ruby-workshop' ).css( 'text-decoration', 'line-through' );
    } else {
      $( '#ruby' ).show();
      $( '#ruby-workshop' ).css( 'text-decoration', 'none' );
    }
  });
  $( 'input[name=php-workshop]' ).on( 'click', function() {
    if ( $( this ).is( ':checked' ) ) {
      $( '#java' ).hide();
      $( '#java-workshop' ).css( 'text-decoration', 'line-through' );
    } else {
      $( '#java' ).show();
      $( '#java-workshop' ).css( 'text-decoration', 'none' );
    }
  });
  $( 'input[name=ruby-workshop]' ).on( 'click', function() {
    if ( $( this ).is( ':checked' ) ) {
      $( '#js' ).hide();
      $( '#js-workshop' ).css( 'text-decoration', 'line-through' );
    } else {
      $( '#js' ).show();
      $( '#js-workshop' ).css( 'text-decoration', 'none' );
    }
  });
  $( 'input[name=java-workshop]' ).on( 'click', function() {
    if ( $( this ).is( ':checked' ) ) {
      $( '#php' ).hide();
      $( '#php-workshop' ).css( 'text-decoration', 'line-through' );
    } else {
      $( '#php' ).show();
      $( '#php-workshop' ).css( 'text-decoration', 'none' );
    }
  });

  // ** Payment info section of the form: **

  // Display payment sections based on the payment option chosen in the
  // select menu.
  $( '#payment' ).on( 'change', function() {
    if ( $( this ).val() === "credit card" ) {
      $( '#credit-card' ).show( 'slow' );
    } else if ( $( this ).val() === "paypal" ) {
      window.open( 'https://www.paypal.com/us/signin', '_blank' );
    } else if ( $( this ).val() === "bitcoin" ) {
      window.open( 'https://www.coinbase.com/signin', '_blank' );
    } else {
      $( '#credit-card' ).hide( 'slow' );
    }
  });

});
