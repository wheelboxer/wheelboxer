/*
 *
 * Article Teaser scrolling animation related javascript
 *
 */

;(function( $ ) {
    $.fn.scrollmate = function( options ) {
        //scroll animation
        var $t = $(this);
        if(!$t.length ) {
            return false;
        }
        var $target_pos = $t.offset().top,
            scroll_flag = true,
            item_array = [],
            max_height = 0,
            defaults = {
                scroll_buffer: 300,
                item: '.teaser-item',
                onload: false
            },
            settings = $.extend( {}, defaults, options),
            $item = $t.find(settings.item),
            $item_parents = $item.parents('.columns');
        $item.each(function(){
            var _t = $(this),
                item_height = _t.innerHeight();
            item_array.push(item_height);
        });
        max_height = Math.max.apply(null, item_array);
        $item_parents.height(max_height);
        $item.css({
            'visibility': 'hidden',
            'padding-top': max_height,
        });
        if (settings.onload === false) {
            $(window).on('scroll', function () {
                calcScroll();
            });
        } else {
            setTimeout(function () {
                $item.css('visibility', 'visible').addClass('animate');
                $item_parents.css('height', 'auto');
            }, 1000);
        }
        item_array = [];
        function calcScroll() {
            var $vert_pos = $(window).scrollTop();
            if ($vert_pos >= ($target_pos - settings.scroll_buffer) && scroll_flag === true) {
                scroll_flag = false;
                $item.css('visibility', 'visible').addClass('animate');
                setTimeout(function () {
                    $item_parents.css('height', 'auto');
                }, 500);
            }
        }
        return this;
    }

})(jQuery);