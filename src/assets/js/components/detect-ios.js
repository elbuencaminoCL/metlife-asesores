
	let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if(iOS) {
		$('.flatpickr-mobile').attr('value', '20/11/2017')
	}