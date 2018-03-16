window.onpagehide = function() {
	audio.pause();
}

var modalVisible = false;
var $modal = $(".modal");

$(document).ready(function(){
	$('.scroll').on('click',function (e) {
		e.preventDefault();

		var target = this.dataset.loc;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});


$('.gigs-tab').click(function() {
	if(!$(this).hasClass('active-tab')) {
		$('.gigs-tab').toggleClass('active-tab');
		$('.past-gigs').toggle();
		$('.upcoming-gigs').toggle();
	}
});

$(".gallery img").click(function(e) {
	let loc = $(this).data("loc");
	$modal.html("<img src=" + loc + " class='modal-img'>");
	$modal.fadeIn(200);
	modalVisible = true;
  });
  
  $(".modal").click(function(e) {
	let $img = $(".modal-img").get(0);
	  if (e.target != $img && modalVisible) {
		$modal.fadeOut(200);
		modalVisible = false;
	  }
  });
