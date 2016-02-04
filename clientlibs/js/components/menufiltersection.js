/*
 *
 * Menu Filter Section related javascript -	Growing your business page
 *
 */


;(function( $ ) {
    $.fn.menuFilterSectionFunctionality = function( options ) {
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
		
		//Growing your business Filter Functionality:
		/*code for filtering menu's - start*/
		$(".menu-list-growing-your-business .menu-list ul li").click(function(){
			var dataFilterMenu = $(this).attr('data-filter'); //Gets clicked 'data-filter' attribute value
			//Add or remove active class for filter menus
			$(".menu-list-growing-your-business .menu-list ul li").removeClass('active');	// Removing active class from all menu's
			$(this).addClass('active');	// Adding active class to clicked menu
			
			
			filtertopics(dataFilterMenu); //function used for filtering
			
			//var filteredtextValue = dataFilterMenu;
			var filteredtextValue = $(this).text();
			$(".menu-list-mobile-selectedtext").text(filteredtextValue); //setting this clicked value to mobile select box.
			
			/*$(".menu-list-growing-your-business .menu-list-mobile select option").each(function() {
				alert(this.text + ' ' + this.value);
			});*/
		});
		/*code for filtering menu's - end*/
		
		/*code for filtering mobile menu's - start*/
		$(".menu-list-growing-your-business .menu-list-mobile select").change(function(){
			var filteredtextValue = $(this).val();
			$(".menu-list-mobile-selectedtext").text(filteredtextValue);
			var dataFilterMenu = $(".menu-list-growing-your-business .menu-list-mobile select option:selected").data('filter');	//Gets clicked 'data-filter' attribute value
			
			//Add or remove active class for filter menus (for desktop versions)
			$(".menu-list-growing-your-business .menu-list ul li").removeClass('active');	// Removing active class from all menu's
			$(".menu-list-growing-your-business .menu-list ul li").each(function() {
				var li_text_value = $(this).find('span').text();
				if(li_text_value == filteredtextValue)
				{
					//alert(li_text_value);
					$(this).addClass('active');	// Adding active class to clicked menu
				}
			});
			
			filtertopics(dataFilterMenu); //function used for filtering
		});
		/*code for filtering mobile menu's - end*/
		
		//function used for filtering
		function filtertopics(clickedMenuFilter)
		{	
			$(".menu-list-and-description .menu-description").hide();		//hides all topics data
			$("."+clickedMenuFilter).show();	//shows topics data related to clicked menu, based on 'data-filter' attribute which has same class used to recognize filter.
		}
    }
})(jQuery);
