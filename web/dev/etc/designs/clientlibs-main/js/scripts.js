/*
*
* Main JS for document ready code, initializaers, etc.
* Use a namespace if needed. Do not add global objects unnecessarily
*
 */
 
 
var windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var windowHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

$(window).load(function(){
    $(".featured-topics").heightMatch();
	//Menu Functionality - For now use this only for this header menu section
	$(".header-sections").menuDisplayFunctionality();
	//Filter Section Functionality - For now use this only for this filter section
	$(".filtering-topics").filterSectionFunctionality();
	
    $(window).resize(function(){
        $(".featured-topics").heightMatch();
    });
});




$(document).ready(function(){
	/*var windowWidth = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	var windowHeight = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;*/

	


	
	
	/* Header component Hero image video functionality */
	$(".heroVideoButton").click(function(e){
		//prevent link
		e.preventDefault();
			
		$(".videoWrapper").show();
	});

//Fullscreen carousel configuration and initializer
        $('.carousel-class').slick({
            slidesToShow: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1

                    }
                }], autoplay: false,
            autoplaySpeed: 2000
        });

    $('.slick-arrow').text('');
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $(".article-teaser").scrollmate();
    }

    /*
	$(".heroImage-topics").scrollmate({
        scroll_buffer: 0,
        item: '.heroImageDescription',
        onload: true
    });
	*/
	
	
	
	
	// Login section functionality
	$(".login").click(function(e){
		e.preventDefault();
		$(".loginMenu").show();
	});
	$(".closeLogin").click(function(){
		$(".loginMenu").hide();
	});


});