import $ from 'jquery';

if( $('#loginModal').length > 0 ) {
  setTimeout( () => {
    $('#loginModal').foundation('open');
  }, 3000)
}

if( $('#homeModal').length > 0 ) {
  setTimeout( () => {
    $('#homeModal').foundation('open');
  }, 1)
}