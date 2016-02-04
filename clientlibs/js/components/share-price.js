/*
*
* Share Price component related javascript
*
 */

;(function( $ ) {
    $.fn.sharePrice = function( options ) {
		var $t = $(this),
            defaults = {
                debug: false
            };
        if(!$t.length ) {
            return false;
        }
        var settings = $.extend( {}, defaults, options);

        $.getScript( "http://apps.shareholder.com/irxml/irxml.aspx?COMPANYID=ABEA-4TE9XX&PIN=417873022&FUNCTION=StockQuote&OUTPUT=js2&TICKER=LPLA")
            .done( function( data, textStatus, jqxhr ) {

                var ticker = irxmlstockquote[0].ticker,
                    exchange = irxmlstockquote[0].exchange,
                    pchange = irxmlstockquote[0].pchange,
                    nchange = irxmlstockquote[0].change,
                    high = irxmlstockquote[0].high.toFixed(2),
                    low = irxmlstockquote[0].low.toFixed(2),
                    lastprice = irxmlstockquote[0].lastprice,
                    date_time = irxmlstockquote[0].datetime.toString(),
                    date_array = date_time.split(" "),
                    current_time,
                    am_pm,
                    date_string = [],
                    high_low_price,
                    price_change,
                    time_array = date_array[4].split(":"),
                    time_zone = date_array[6].replace(/[()]/g, '');
                //Set debug to true to view values in console and
                //other important information
                if (settings.debug) {
                    console.log(data); // Data returned
                    console.log(textStatus); // Success
                    console.log(jqxhr.status); // 200
                    console.log("Load was performed.");
                    console.log(ticker);
                    console.log(exchange);
                    console.log(pchange);
                    console.log(high);
                    console.log(low);
                    console.log(lastprice);
                    console.log(date_time);
                }
                //Set PM or AM
                if (time_array[0] >= 12 ) {
                    am_pm = "PM";
                    if (time_array[0] > 12) {
                        time_array[0] = time_array[0] - 12;
                    }
                } else {
                    am_pm = "AM"
                }
                current_time = time_array[0] + ":" + time_array[1] + " " + am_pm + " " + time_zone;
                date_string = date_array[1] + " " + date_array[2] + ", " + date_array[3] + " at " + current_time;
                high_low_price = "High " + high + " / Low " + low;

                nchange = checkNegativeNumber(nchange);
                pchange = checkNegativeNumber(pchange);
                price_change = nchange + " / " + pchange + "%";

                //$(".pchange").text(pchange);
                //$(".change").text(nchange);
                //$(".high-price").text(high.toFixed(2));
                //$(".low-price").text(low.toFixed(2));
                $(".date_time_class p").text(date_string);
                $(".price").text("$" + lastprice.toFixed(2));
                $(".exchange").text(exchange + ":");
                $(".ticker").text(ticker);
                $(".price-changes").text(price_change);
                $(".high-low-price").text(high_low_price);
            })
            .always(function(){
                $(".fade-box").addClass("fade-in");
            });


        function checkNegativeNumber(num) {

            num = num.toFixed(2);
            $fa_icon = $(".share_price_component .fa");
            if (num > 0) {
                $fa_icon.addClass("fa-arrow-circle-up");
                num = "+" + num;
            } else {
                $fa_icon.addClass("fa-arrow-circle-down");
            }
            return num;
        }

        return this;
    }
	
	
	
	
})(jQuery);
