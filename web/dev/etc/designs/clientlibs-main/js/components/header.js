/*
 *
 * Header related javascript
 *
 */


	
	
;(function( $ ) {
    $.fn.menuDisplayFunctionality = function( options ) {
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
		var windowScrollPosition_Previous = 0, 
			windowScrollPosition = 0;
		/* header functionality */
		//works only for desktop's
		if(windowWidth > 1200)
		{
			$(".header-sections ul li").hover(function(e){
					//$('.submenu').slideUp(150);
					//$(this).find('.submenu').slideDown(150);
					//if ($(this).find(".submenu-container").length > 0){ 
					if ($(this).find(".submenu").length > 0){ 
						//$(this).find('.submenu').show();
						$(this).find('.submenu').slideDown(300);
					}
					else
					{
						//do nothing
					}
				},
				function(e){
					//$('.submenu').slideUp(150);
					//$(this).find('.submenu').slideDown(300);
					//if ($(this).find(".submenu-container").length > 0){ 
					if ($(this).find(".submenu").length > 0){ 
						$(this).find('.submenu').slideUp(300);
					}
					else
					{
						//do nothing
					}
			});
		}
		
		
		
		//works only for tablet and mobile
		if(windowWidth <= 1200)
		{
			/* menu component */
			$(".smallTabletMenu").click(function(){
				$(".submenu-container, .small-and-medium").show();
				$("nav").slideToggle();
				if(windowWidth <= 500){
					$(".search").toggle();
				}
				$(".submenu").hide();
				
				//hide as default	(Reset Menu Functionality)
				$(".backto-mainmenu").hide();
				$(".backto-submenu-headings").hide();
				$(".submenu-headings-heading").hide();
				$(".getsubmenu").hide();
				$(".tertiarymenu-heading").hide();
				$(".submenu").find("ul").hide();
			});
			
			//primary menu click functionality
			$(".submenu-container").click(function(e){
				//prevent link at tablet and mobile devices
				e.preventDefault();
				
				//$(".submenu").hide();
				
				//If the submenu does not contains headings 'if condition' will work, else 'else condition' will work
				if (! $(this).next('.submenu').find('.getsubmenu').length) {
					$(this).next('.submenu').show();
					$(this).next('.submenu').find('*').show();
					//$(this).next('.submenu').find('.tertiarymenu-heading').show();
				}
				else
				{
					$(".submenu").hide();
					//$(".submenu").show();
					$(this).next(".submenu").show();
					$(this).next('.submenu').find('.getsubmenu').show();
					$(".backto-mainmenu").show();
					$(this).next('.submenu').find('.submenu-headings-heading').show();
				}
				//$(".submenu-headings-heading").show();
				
				$(".submenu-container, .small-and-medium").hide();
			});
			
			//secondary menu click functionality
			$(".getsubmenu").click(function(e){
				//prevent link at tablet and mobile devices
				if($(this).next("ul").length > 0)
				{
					e.preventDefault();
					$(".backto-mainmenu").hide();
					$(".backto-submenu-headings").show();
					$(".submenu-headings-heading").hide();
					//$(".tertiarymenu-heading").show();
					$(".getsubmenu").hide();
					$(this).closest(".columns").prev().show();
					$(this).next("ul").show();
				}
				else
				{
					//allow to link to other page's
				}
			});
			
			//back to main menu functionality
			$(".backto-mainmenu").click(function(e){
				//prevent link at tablet and mobile devices
				e.preventDefault();
				
				$(".backto-mainmenu").hide();
				$(".backto-submenu-headings").hide();
				$(".submenu-headings-heading").hide();
				$(".getsubmenu").hide();
				$(".tertiarymenu-heading").hide();
				$(this).closest(".submenu").find("ul").hide();
				$(".submenu-container, .small-and-medium").show();
				
				$(".submenu").hide();
			});
			
			
			//back to submenu headings functionality
			$(".backto-submenu-headings").click(function(e){
				//prevent link at tablet and mobile devices
				e.preventDefault();
				
				$(".backto-submenu-headings").hide();
				$(".submenu-headings-heading").hide();
				$(".tertiarymenu-heading").hide();
				$(this).closest(".submenu").find("ul").hide();
				//$(".submenu-container, .small-and-medium").show();
				$(this).closest(".submenu").find(".backto-mainmenu").show();
				$(this).closest(".submenu").find('.submenu-headings-heading').show();
				$(this).closest(".submenu").find(".getsubmenu").show();
			});
		}
		
		
		//Header fixed setting while scrolling page content
		//windowScrollPosition_Previous = 0;
		//windowScrollPosition = 0;
		function fixedHeaderSettting(){
			windowScrollPosition_Previous = windowScrollPosition;
			windowScrollPosition = $(window).scrollTop();
			//alert(windowScrollPosition);
			
			//header fixed settings at time of scrolling
			var header_social_links_height = $(".header-social-links").height();
			var colored_bar_height = $(".colored-bar").height();
			var total_header_height = $("header").height();
			//alert(header_social_links + ' , ' + colored_bar);
			
			var topHeaderHeight = header_social_links_height + colored_bar_height;
			var bodyPaddingTop = total_header_height - topHeaderHeight;
			
			//alert(topHeaderHeight);
			//alert(total_header_height);
			
			if(windowWidth > 1200)
			{
				if(windowScrollPosition >= topHeaderHeight)
				{
					if(windowScrollPosition_Previous <= windowScrollPosition)
					{
						$("header").css('position','fixed');
						$("header").css('top','-'+topHeaderHeight+'px');
						$(".headerFixedHolder").css('height',total_header_height+'px');
					}
					else
					{
						$("header").css('top','0px');
					}
				}
				else
				{
					$("header").css('position','relative');
					$(".headerFixedHolder").css('height','0px');
					
					$("header").css('top','initial');
				}
			}
			else
			{
				if(windowScrollPosition >= total_header_height)
				{
					if(windowScrollPosition_Previous <= windowScrollPosition)
					{
						$("header").css('position','fixed');
						$("header").css('top','-70px');
						$(".headerFixedHolder").css('height',total_header_height+'px');
						//$("html,body").css('padding-top',total_header_height+'px');
					}
					else
					{
						//$("header").css('position','relative');
						$("header").css('top','0px');
						//$("html,body").css('padding-top','0px');
					}
				}
				else
				{
					$("header").css('position','relative');
					$(".headerFixedHolder").css('height','0px');
					//$("header").css('top','0px');
					//$("html,body").css('padding-top','0px');
					
					$("header").css('top','initial');
				}
			}	
		}
		$(window).scroll(function(){
			fixedHeaderSettting();
		});
		//to make menu work good
		/*$(window).resize(function(){
			window.location.href=window.location.href;
		});*/
		/*$(window).on('resize',function(){
			//location.reload(true);
			window.location.href=window.location.href;
		});*/
		/* header functionality - end */
    }

})(jQuery);

