
import $ from 'jquery'

let $dropdownRow

$( '.heightInput' ).on( 'click', ( e ) => {
  e.preventDefault();
  console.log('sdfshbdf')

  if( $(e.currentTarget).hasClass('dropdownOpen') ) {
    const $bannerContentColTabs = parseInt($('.banner-content-col-tabs').css('bottom'))
    const $result = $bannerContentColTabs + $dropdownRow
    $('.banner-content-col-tabs').css('bottom', $result + 'px')
    $(e.currentTarget).removeClass('dropdownOpen')
  }
  else {
    $dropdownRow = $('.dropdownRow').height()
    const $bannerContentColTabs = parseInt($('.banner-content-col-tabs').css('bottom'))
    const $result = $bannerContentColTabs - $dropdownRow
    $('.banner-content-col-tabs').css('bottom', $result + 'px')

    $(e.currentTarget).addClass('dropdownOpen')
  }
});
