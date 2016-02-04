// JavaScript Document
// JavaScript Document

	
	 /*
*
* Text promo Carousel Topics component related javascript
*
 */

;(function( $ ) {
    $.fn.heightMatchCarouselPromo = function( options ) {
		//$('.slick-prev').hide();
        var $t = $(this),
            maxHeight = 0,
            defaults = {
                itemSelector: '.slick-slide', //class of child container
                heightSelector: ['.header', '.carousel-text'] //class or element of container to match heights
            },
            settings = $.extend( {}, defaults, options);

        for (var i = 0; i <= settings.heightSelector.length; i++) {
            var feature_titles = settings.itemSelector
                + ' '
                + settings.heightSelector[i];
            $t.find(feature_titles).each(function(idx) {
                    var featThis = $(this);
                    featThis.css('height', '');
                    maxHeight = maxHeight >= featThis.outerHeight() ? maxHeight : featThis.outerHeight();
                }
            ).height(maxHeight);
            //maxHeight = 0;
        }

        return this;
    }
})(jQuery);
	
$('.slick-arrow').text('');