$(document).ready(function() {
	
	var $window = $(window);

	function boxAdjust() {
		if (860 < $window.width() < 1280) {
			$('.article-link').removeClass('full-width').removeClass('third-width').addClass('half-width');
		}
		if ($window.width() < 860) {
			$('.article-link').removeClass('half-width').removeClass('third-width').addClass('full-width');
		}
		if ($window.width() > 1560) {
			$('.article-link').removeClass('full-width').removeClass('half-width').addClass('third-width');
		}
	}

	boxAdjust();

	$window.resize(boxAdjust);

});