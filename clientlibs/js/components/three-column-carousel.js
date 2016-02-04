// JavaScript Document
// JavaScript Document
  $(document).ready(function(){
      $('.main_carousel_class').slick({
     slidesToShow: 3,
	 dots: true,
	 infinite: false,
	 responsive: [
    {
      breakpoint: 1024,
      settings: {
  slidesToShow: 3,
  slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
		
       }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1	
      }
    }], autoplay: false,
  autoplaySpeed: 2000
   });
   
    $('.slick-prev').hide();
			   $('.main_carousel_class').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			 
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