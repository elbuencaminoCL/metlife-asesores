
import $ from 'jquery'

$( '.openContentInputRut' ).on( 'click', ( e ) => {
  e.preventDefault();

  $('.contentInputRut').removeClass('hide-xs')
  $('.buttonRut').addClass('hide-xs')
  $( '.openContentInputRut' ).removeClass('col-xs-9')
  $( '.openContentInputRut' ).addClass('col-xs-12')

});

$( '.openContentInputPolicy' ).on( 'click', ( e ) => {
  e.preventDefault();

  $('.contentInputPolicy').removeClass('hide-xs')
  $('.buttonPolicy').addClass('hide-xs')
  $( '.openContentInputPolicy' ).removeClass('col-xs-9')
  $( '.openContentInputPolicy' ).addClass('col-xs-12')

});
