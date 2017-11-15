
import $ from 'jquery'

let $dropdownRow

$( '.heightInput' ).on( 'click', ( e ) => {
  e.preventDefault();

  if( $(e.currentTarget).hasClass('dropdownOpen') ) {
    const $bannerContentColTabs = parseInt($(e.currentTarget).closest('.banner-content-col-tabs').css('bottom'))
    const $result = $bannerContentColTabs + $dropdownRow

    $(e.currentTarget).closest('.banner-content-col-tabs').css('bottom', $result + 'px')
    $(e.currentTarget).removeClass('dropdownOpen')
  }
  else {
    $dropdownRow = $(e.currentTarget).closest('.tabs-panel').find('.dropdownRow').height()

    const $bannerContentColTabs = parseInt($(e.currentTarget).closest('.banner-content-col-tabs').css('bottom'))
    const $result = $bannerContentColTabs - $dropdownRow

    $(e.currentTarget).closest('.banner-content-col-tabs').css('bottom', $result + 'px')
    $(e.currentTarget).addClass('dropdownOpen')
  }
});
