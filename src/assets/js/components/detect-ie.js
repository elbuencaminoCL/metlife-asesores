
import $ from 'jquery';

function tkObjectFit() {
  $('img.objFit').each( function(){
    var imgSrc = $(this).attr('src');
    var fitType = 'cover';

    if($(this).data('fit-type')) {
      fitType = $(this).data('fit-type');
    }

    $(this).parent().addClass('objFitFigure').css({ 'background' : 'transparent url("'+imgSrc+'") no-repeat center center/'+fitType, });
    $(this).remove();
  });
}


function modalInputExplorer() {
  $( '.fieldParent' ).find('.inputIchiro').addClass('input-top-up')
  $( '.inputEmailMetlife' ).addClass('max-height-39')
}


function detectIE() {
  var ua = window.navigator.userAgent;

  // IE 10 or older
  var msie = ua.indexOf('MSIE ');
  // IE 11 or older
  var trident = ua.indexOf('Trident/');
  if (msie > 0 || trident > 0) {
    tkObjectFit();
    modalInputExplorer();
  }

  // other browser
  return false;
}

detectIE();

