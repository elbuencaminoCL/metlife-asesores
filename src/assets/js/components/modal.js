import $ from 'jquery';

if( $('#loginModal').length > 0 ) {
  setTimeout( () => {
    $('#loginModal').foundation('open');
  }, 3000)
}