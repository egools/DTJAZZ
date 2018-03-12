window.onpagehide = function() {
	audio.pause();
}

$(document).ready(function(){
	$('.scroll').on('click',function (e) {
		e.preventDefault();

		var target = this.dataset.loc;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 55
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});

$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
		autoWidth:true,
		auto: false,
    loop:true,
    slideMargin: 0,
    thumbItem: 7
});


$('.gigs-tab').click(function() {
	if(!$(this).hasClass('active-tab')) {
		$('.gigs-tab').toggleClass('active-tab');
		$('.past-gigs').toggle();
		$('.upcoming-gigs').toggle();
	}
});
