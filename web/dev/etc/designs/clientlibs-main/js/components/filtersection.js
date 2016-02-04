/*
 *
 * Filter Section related javascript -	Consulting for your business
 *
 */


;(function( $ ) {
    $.fn.filterSectionFunctionality = function( options ) {
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
		/*code for filtering menu's - start*/
		$(".filtering-menus ul li").click(function(){
			var clickedMenuFilter = $(this).data('filter');	//Gets clicked 'data-filter' attribute value
			//alert(clickedMenuFilter);
			
			//Add or remove active class for filter menus
			$(".filtering-menus ul li").removeClass('active');	// Removing active class from all menu's
			$(this).addClass('active');	// Adding active class to clicked menu
			
			filtertopics(clickedMenuFilter);	//function used for filtering
		});
		/*code for filtering menu's - end*/
		
		/*code for filtering mobile menu's - start*/
		$(".filtering-menu-mobile select").change(function(){
			var filteredtextValue = $(this).val();
			var clickedMenuFilter = $(".filtering-menu-mobile select option:selected").data('filter');	//Gets clicked 'data-filter' attribute value
			//alert(clickedMenuFilter);
			$(".filteredtext").text(filteredtextValue);
			
			filtertopics(clickedMenuFilter);	//function used for filtering
		});
		/*code for filtering mobile menu's - end*/
		
		
		//function used for filtering
		function filtertopics(clickedMenuFilter)
		{
			
			$(".filteringtopic").hide();		//hides all topics data
			$("."+clickedMenuFilter).show();	//shows topics data related to clicked menu, based on 'data-filter' attribute which has same class used to recognize filter.
			
			//$(".filtering-topics .columns").css({"clear": "none"});			// Removing 'clear:both' style for every 5th element which was already in css for large screens, tablets and mobile
			//$(".filtering-topics .columns").css({"float": "left"});			// Setting 'float:left' to every column
			
	
			
			//if large screens (setting every filtered 5th element is setting css to clear:both for continuing elements flow)
			if(windowWidth > 900)
			{
				//looping for every 5th element and setting clear and float css values
				var totalFilteringTopics = $( "."+clickedMenuFilter).length;
				for(i = 0;i < totalFilteringTopics;i++)
				{	if(i!=0 && i%4 == 0)
					{
						//$( "."+clickedMenuFilter+":eq("+i+")").css({"clear":"both", "float":"left"});	// Resetting 'clear:both' style to every 5th element related to particular filter type - for large screns
					}
				}
			}
			//if large screens (above 768 and below 900) (setting every filtered 4th element is setting css to clear:both for continuing elements flow)
			if(windowWidth > 768)
			{
				//looping for every 4th element and setting clear and float css values
				var totalFilteringTopics = $( "."+clickedMenuFilter).length;
				for(i = 0;i < totalFilteringTopics;i++)
				{	if(i!=0 && i%3 == 0)
					{
						//$( "."+clickedMenuFilter+":eq("+i+")").css({"clear":"both", "float":"left"});	// Resetting 'clear:both' style to every 4th element related to particular filter type - for large screns (above 768 and below 900)
					}
				}
			}
			//if tablets (setting every filtered 3th element is setting css to clear:both for continuing elements flow)
			else if(windowWidth > 500)
			{
				//looping for every 3rd element and setting clear and float css values
				var totalFilteringTopics = $( "."+clickedMenuFilter).length;
				for(i = 0;i < totalFilteringTopics;i++)
				{	if(i%2 == 0)
					{
						//$( "."+clickedMenuFilter+":eq("+i+")").css({"clear":"both", "float":"left"});	// Resetting 'clear:both' style to every 3rd element related to particular filter type - for tablet screns
					}
				}
			}
			//if mobiles
			else
			{
				//every column in float left for small screens
			}
		}
    }

})(jQuery);
