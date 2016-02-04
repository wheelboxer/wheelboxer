// JavaScript Document
// JavaScript Document
  $(document).ready(function(){
      $('.main_carousel_class').slick({
     slidesToShow: 3,
	 dots: true,
	 responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
		
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