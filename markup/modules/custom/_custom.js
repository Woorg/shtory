$('document').ready(function() {
	$('.carousel-second_js').owlCarousel({
		items: 5,
		loop: true,
		nav: true,
		margin: 55,
		autoplay: true
	});

	$('.carousel-second_js .owl-nav a').click(function() {
		return false;
	});

	$('.carousel-third_js').owlCarousel({
		items: 4,
		loop: true,
		nav: true,
		margin: 18,
		stagePadding: 5,
		autoplay: true
	});

	$('.carousel-third_js .owl-nav a').click(function() {
		return false;
	});
});
