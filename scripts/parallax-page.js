/*==============================================================================
Parallax Page
==============================================================================*/

$(() => {

  const pContainerHeight = $( '.lake-container' ).height();
  $( window ).scroll(() => {
    const wScroll = $( this ).scrollTop();
    if ( wScroll <= pContainerHeight ) {
      $( '.logo' ).css({
        'transform' : 'translate( 0px, '+ wScroll /9.5 +'% )'
      });
      $( '.bg-eagle' ).css({
        'transform' : 'translate( 0px, '+ wScroll /4 +'% )'
      });
      $( '.fg-salmon' ).css({
        'transform' : 'translate( 0px, -'+ wScroll /16 +'% )'
      });
      $( '.fg-splash' ).css({
        'transform' : 'translate( 0px, -'+ wScroll /160 +'% )'
      });
    }
  });

});
