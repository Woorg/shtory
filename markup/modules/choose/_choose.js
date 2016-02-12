$(document).ready(function(){

	$('.tabs__nav-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs__nav-link').removeClass('tabs__nav-link_active');
		$('.tabs__content').removeClass('tabs__content_active');

		$(this).addClass('tabs__nav-link_active');
		$("#"+tab_id).addClass('tabs__content_active');
		return false;
	});


	$('.carousel').owlCarousel({
		items: 4,
		loop: true,
		nav: true,
		margin: 28,
		autoplay: true
	});

	$('.owl-nav a').click(function() {
		return false;
	});


});
