
	import './../lib/select';
	import $ from 'jquery';

  [].slice.call( document.querySelectorAll( 'select.GeneralSelect.cs-select' ) ).forEach( (el) => {
    new SelectFx(el)
  });

  $(".dropdown dt a").on('click', function() {
    $(".dropdown dd ul").slideToggle('fast')
  });

  $(".dropdown dd ul li a").on('click', function() {
    $(".dropdown dd ul").hide()
  });

  function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html()
  }

  $(document).bind('click', function(e) {
    let $clicked = $(e.target)
    if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide()
  });

  let arraySelectCheckbox = []

  $('.mutliSelect input[type="checkbox"]').on('click', function(e) {

    let title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val()
        title = $(this).val() + ","

    if( $(this).is(':checked') ) {
      let html = `<span title="${title}">${title}</span>`
      $('.multiSel').append(html)
      $('.hida').hide()
    }
    else {
      $('span[title="' + title + '"]').remove()
      let ret = $(".hida")
      $('.dropdown dt a').append(ret)
    }

    $('.mutliSelect li').each( (index, el) => {
      const checkbox = $(el).find('input[type="checkbox"]')

      if( $(checkbox).is(':checked') ) {
        console.log(checkbox, 'checkbox')
      }
    })

    if( $('.multiSel').text().length == 0 ) {
      $(".hida").show()
    }
    else {
      $(".hida").hide()
    }

  });