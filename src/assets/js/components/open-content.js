
  import $ from 'jquery'

  let $openContent = $( '.openContent' );

  $openContent.on( 'click', ( e ) => {
    e.preventDefault();

    let $openContentData = $( e.currentTarget ).data( 'open-content' );
    let $toggleContentData = $( '.toggleContent[data-toggle-content=' + $openContentData + ']' );
    let $openContentText = $( e.currentTarget ).find( 'span' );
    let $dataClose = $( e.currentTarget ).find( 'span' ).data( 'close' );

    let $restText = $( e.currentTarget ).find( '.openContentText' ).data( 'rest-text' );
    let $openText = $( e.currentTarget ).find( '.openContentText' ).data( 'open-text' );

    $toggleContentData.toggleClass( 'is-open' );
    $openContentText.toggleClass( 'is-open' );
    $openContentText.closest('td').toggleClass( 'is-open' );

    $( e.currentTarget ).toggleClass( 'is-open' );

    if( $dataClose ) {

      if( !$openContentText.hasClass( 'is-open' ) ) {
        $openContentText.html( $restText );
      }
      else {
        $openContentText.html( $openText );
      }

    }

    else {

      if( $openContentText.hasClass( 'is-open' ) ) {
        $openContentText.html( $restText );
      }
      else {
        $openContentText.html( $openText );
      }

    }

  });



  /*Campañas Expandir todas*/
  $('.allExpand').on( 'click', ( e ) => {
    let $closestParent = $(e.currentTarget).closest('.allToggleOpen')
    let $findOpenContent = $(e.currentTarget).closest('.allToggleOpen').find('.openContent')
    let $findOpenContentText = $(e.currentTarget).closest('.allToggleOpen').find('.openContentText')
    let $findToggleContent = $(e.currentTarget).closest('.allToggleOpen').find('.toggleContent')

    let arrayOpen = []

    $findToggleContent.each( (index, el) => {
      if( $(el).hasClass('is-open') ) {
        arrayOpen.push('true')
      }
      else {
        arrayOpen.push('false')
      }
    })

    let findArrayOpen = $.inArray('false', arrayOpen)

    if( findArrayOpen >= 0 ) {
      $findToggleContent.add($findOpenContent).add($findOpenContentText).addClass('is-open')
      $(e.currentTarget).text('Cerrar Todos')
    }
    else {
      $findToggleContent.add($findOpenContent).add($findOpenContentText).removeClass('is-open')
      $(e.currentTarget).text('Expandir Todos')
    }

  });
