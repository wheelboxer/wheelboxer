// JavaScript Document
// JavaScript Document
 $(document).ready(function(){
      $('.slide_div').slick({
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
    });
	
$('.slick-arrow').text('');