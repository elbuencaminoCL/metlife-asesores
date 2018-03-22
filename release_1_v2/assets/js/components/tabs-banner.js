
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


$( '.modalInputExplorer' ).on( 'click', ( e ) => {
  $( 'inputTop' ).addClass('inputTopUp')
});

/*Tabs campañas visitas de servicios*/
$('.tabs-title').on('click', ( e ) => {
  e.preventDefault();

  if( $(e.currentTarget).hasClass('tabDelayed') ) {
    $('.date-picker-row').removeClass('tab-delayed-date-picker')
    console.log($('.date-picker-row').removeClass('tab-delayed-date-picker'))
  }
  else {
    $('.date-picker-row').addClass('tab-delayed-date-picker')
  }
});