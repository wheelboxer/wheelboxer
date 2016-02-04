// JavaScript Document
  $(document).ready(function(){
      $('.news_carousel_component').slick({
     slidesToShow: 1,
	 dots: true,
	 infinite: false,
	 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		infinite: false,
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
   
 
    
 
 
 
   $('.news_carousel_component').find('.slick-prev').hide();
			   $('.news_carousel_component').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			 
					  if(nextSlide == 0 ) {
						  $(this).find('.slick-prev').fadeOut(600);
						  }
						  else {
							  $(this).find('.slick-prev').fadeIn(600);
							  }
							  
						if ( $(this).find('.slick-dots').find('li').length == (nextSlide + 1))	  {
							$(this).find('.slick-next').fadeOut(600);
							}
							else {
							$(this).find('.slick-next').fadeIn(600);
							}
					
			});
 
   
  
   
 });
	
$('.slick-arrow').text('');




