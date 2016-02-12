$('document').ready(function() {
	$('.catalog__link').magnificPopup({
		type: 'inline'
	});


	$('.catalog-slider').bxSlider({
		mode: 'fade',
		pagerCustom: '.catalog-thumbnails'
	});


	$('.popup-tabs__nav-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.popup-tabs__nav-link').removeClass('popup-tabs__nav-link_active');
		$('.popup-tabs__content').removeClass('popup-tabs__content_active');

		$(this).addClass('popup-tabs__nav-link_active');
		$("#"+tab_id).addClass('popup-tabs__content_active');
		return false;
	});


});
