$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll < 1500 && scroll > 500) {
    	$("#heist").addClass("active")
        $(".text-holder").addClass("james");
    } 
    else {
    	$("#heist").removeClass("active")
        $(".text-holder").removeClass("james");
    }

    if (scroll >= 1500) {
    	$("#passion").addClass("active")
        $(".text-holder").addClass("max");
    } 
    else {
    	$("#passion").removeClass("active")
        $(".text-holder").removeClass("max");
    }
});