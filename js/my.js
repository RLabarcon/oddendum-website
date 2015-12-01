$(document).ready(function() {
	
	var $window = $(window);

	function boxAdjust() {
<<<<<<< HEAD
		if (860 < $window.width() < 1280) {
			$('.article-link').removeClass('full-width').removeClass('third-width').addClass('half-width');
		}
		if ($window.width() < 860) {
=======
		if (850 < $window.width() < 1280) {
			$('.article-link').removeClass('full-width').removeClass('third-width').addClass('half-width');
		}
		if ($window.width() < 850) {
>>>>>>> parent of c37e3bd... 2.0.4
			$('.article-link').removeClass('half-width').removeClass('third-width').addClass('full-width');
		}
		if ($window.width() > 1560) {
			$('.article-link').removeClass('full-width').removeClass('half-width').addClass('third-width');
		}
	}

	boxAdjust();

	$window.resize(boxAdjust);

});