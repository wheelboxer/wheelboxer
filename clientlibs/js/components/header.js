/*
 *
 * Header related javascript
 *
 */
 
 
 //variable currentSubmenuHeight - This is height of menu, which is calculated every time on clicking backtomain, getsubmenu, etc..(getting menuheight)
 //setNavigationHeight(currentSubmenuHeight) - This is to set height of $("nav"), $(".nav-inner") height
var currentSubmenuHeight  = 0;

	
	
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
			//"inTeritaryMenu" - using this variable as a flag to disable social links menu inside teritary menu section
			inTeritaryMenu = 0;
			//cloning and appending social links from header to nav-inner class
			//$(".header-socialmedia-links").clone().appendTo("nav");
			$(".header-socialmedia-links").clone().appendTo(".nav-inner");
			//setting nav tag height based on displaying menus based on Tablet/Mobile
			var navHeight = $(".nav-inner").outerHeight(true);
			function setNavigationHeight(currentSubmenuHeight){
				windowWidth = window.innerWidth
				|| document.documentElement.clientWidth
				|| document.body.clientWidth;
				windowHeight = window.innerHeight
				|| document.documentElement.clientHeight
				|| document.body.clientHeight;
				//alert(currentSubmenuHeight);
				//$("nav").css('height',currentSubmenuHeight+60+'px');
				$(".nav-inner").css('height',currentSubmenuHeight+60+'px');
				$("nav").css('max-height',windowHeight-70-60);
				
				//setting height for nav also for custom scrollbar setting
				if((windowHeight > 700) && (windowHeight < 1500)){
					$("nav").css('height',currentSubmenuHeight+60+'px');
				}
				$("nav").css('height',currentSubmenuHeight+60+'px');
				
				/*var nav_height = $("nav").css('height');
				var nav_max_height = $("nav").css('max-height');
				alert(currentSubmenuHeight +' , '+ nav_height);
				alert(nav_max_height);*/
				
				
				//Move scroll to top
				var navScrollPosition = $('nav').scrollTop();
				if(navScrollPosition != 0)
				{
					$('nav').animate({
						scrollTop: 0
					}, 300);
				}
				
				//hiding social menu's for teritarry menu
				if(inTeritaryMenu == 1)
				{
					$(".nav-inner .header-socialmedia-links").hide();
					inTeritaryMenu = 0;
				}
				else
				{
					$(".nav-inner .header-socialmedia-links").show();
					inTeritaryMenu = 0;
				}
			}
		}
		if(windowWidth <= 1200)
		{
			/* menu component */
			$(".smallTabletMenu").click(function(){
				windowWidth = window.innerWidth
				|| document.documentElement.clientWidth
				|| document.body.clientWidth;
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
				
				
				//setting menuheight
					//var currentSubmenuHeight = $("nav").css('height','auto');
					//alert("Main Menu");
					//setNavigationHeight(currentSubmenuHeight);
					$(".nav-inner").css('height','auto');
					setTimeout(function(){
						//getting menuheight
						currentSubmenuHeight = $(".nav-inner").outerHeight(true);
						//alert(currentSubmenuHeight);
						setNavigationHeight(currentSubmenuHeight);
					},500);
				
				
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
					
					//getting menuheight
					currentSubmenuHeight = $(this).next('.submenu').outerHeight(true);
					//alert(currentSubmenuHeight);
					setNavigationHeight(currentSubmenuHeight);
				}
				else
				{
					$(".submenu").hide();
					//$(".submenu").show();
					$(this).next(".submenu").show();
					$(this).next('.submenu').find('.getsubmenu').show();
					$(".backto-mainmenu").show();
					$(this).next('.submenu').find('.submenu-headings-heading').show();
					
					/*$(".backto-submenu-headings").hide();
					$(".submenu-headings-heading").hide();
					$(".tertiarymenu-heading").hide();*/
					/*$(this).closest(".submenu").find("ul").hide();
					//$(".submenu-container, .small-and-medium").show();
					$(this).closest(".submenu").find(".backto-mainmenu").show();
					$(this).closest(".submenu").find('.submenu-headings-heading').show();
					$(this).closest(".submenu").find(".getsubmenu").show();*/
				
				/*//getting menuheight
				var currentSubmenuHeight = $(this).closest('.submenu').outerHeight(true);
				//alert(currentSubmenuHeight);
				setNavigationHeight(currentSubmenuHeight);*/
					
					//getting menuheight
					currentSubmenuHeight = $(this).next('.submenu').outerHeight(true);
					//alert(currentSubmenuHeight);
					setNavigationHeight(currentSubmenuHeight);
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
					console.log($(this).next("ul").show());
					
					inTeritaryMenu = 1;
					//getting menuheight
					currentSubmenuHeight = $(this).closest('.submenu').outerHeight(true);
					//alert(currentSubmenuHeight);
					currentSubmenuHeight = currentSubmenuHeight - 60;
					setNavigationHeight(currentSubmenuHeight);
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
				
				//setting menuheight
					//var currentSubmenuHeight = $("nav").css('height','auto');
					//alert("Main Menu");
					//setNavigationHeight(currentSubmenuHeight);
					$(".nav-inner").css('height','auto');
					
					//getting menuheight
					currentSubmenuHeight = $('.nav-inner').outerHeight(true);
					//alert(currentSubmenuHeight);
					setNavigationHeight(currentSubmenuHeight);
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
				
				//getting menuheight
				currentSubmenuHeight = $(this).closest('.submenu').outerHeight(true);
				//alert(currentSubmenuHeight);
				setNavigationHeight(currentSubmenuHeight);
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
			
			if(windowWidth > 1200){
				if(windowScrollPosition >= topHeaderHeight)
				{
					if(windowScrollPosition_Previous <= windowScrollPosition)
					{
						$("header").css('position','fixed');
						$("header").css('top','-'+topHeaderHeight+'px');
						$(".headerFixedHolder").css('height',total_header_height+'px');
						//console.log('12300');
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
					
					//$("header").css('top','initial');
					$("header").css('top','auto');
				}
			}
			else
			{
				if(windowScrollPosition >= total_header_height)
				{
					if(windowScrollPosition_Previous <= windowScrollPosition)
					{
						$("header").css('position','fixed');
						/*$("header").css('top','-70px');*/
						$("header").css('top','-75px');
						$(".headerFixedHolder").css('height',total_header_height+'px');
						//console.log(2);
						//Just as temperory solution added position relative to login menu 
						//$('.loginMenu').css('position','relative');
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
					
					//$("header").css('top','initial');
					$("header").css('top','auto');
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
		prevWidth = windowWidth;
		$(window).resize(function(){
			prevWidth = windowWidth;
			//search box related functionality at time of resize
			windowWidth = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
			windowHeight = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
			
			//search box related functionality - showing search box in tablet at all time AND showing search box only at time of nav is open and hiding search box at time of nav is close - This is functioning at time of window resized.
			if(windowWidth <= 500)
			{
				navigationOpen = $("nav").css('display');
				if(navigationOpen == "block")
				{
					$(".search").show();
				}
				else
				{
					$(".search").hide();
				}
			}
			if((windowWidth >= 501) && (windowWidth <= 1200))
			{
				//alert(windowWidth);
				$(".search").show();
			}
			
			
			//set nav max height based on window height excluding header and floating navigations AND also Resetting(hiding) Menu Functionality at time of window resizing
			if(windowWidth <= 1200)
			{
				//orientation change check based on width
				if(prevWidth != windowWidth)
				{
					//Setting menu related functionality - Start
						//hide as default	(Reset Menu Functionality)
						$(".submenu-container, .small-and-medium").show();
						$("nav").slideUp();
						if(windowWidth <= 500){
							$(".search").hide();
						}
						$(".submenu").hide();
						
						//hide as default	(Reset Menu Functionality)
						$(".backto-mainmenu").hide();
						$(".backto-submenu-headings").hide();
						$(".submenu-headings-heading").hide();
						$(".getsubmenu").hide();
						$(".tertiarymenu-heading").hide();
						$(".submenu").find("ul").hide();
					//Setting menu related functionality - End
					
					
					//Setting Navigation height and max-height at time of resizing window (//set nav max height based on window height excluding header and floating navigations)
						//variable currentSubmenuHeight - This is height of menu, which is calculated every time on clicking backtomain, getsubmenu, etc.. (written at top of this page)
					$("nav").css('height',currentSubmenuHeight+60+"px");
					$("nav").css('max-height',windowHeight-70-60);
				}
			}
		});
		/* header functionality - end */
    }
	
	
	//set nav max height based on window height excluding header and floating navigations
	$(window).load(function(){
		if(windowWidth <= 1200)
		{
			//setting height, max-height for nav also for custom scrollbar setting
			function setNavigationMaxHeight_and_scrollbar()
			{
				if((windowWidth >= 501) && (windowWidth <= 1200))
				{
					/*var set_nav_maxHeight = windowHeight-80-50;*/
					var set_nav_maxHeight = windowHeight-70-60;
					$("nav").css('max-height',set_nav_maxHeight);
				}
				if((windowWidth >= 0) && (windowWidth <= 500))
				{
					/*var set_nav_maxHeight = windowHeight-135-50;*/
					/*var set_nav_maxHeight = windowHeight-95-50;*/
					var set_nav_maxHeight = windowHeight-70-60;
					$("nav").css('max-height',set_nav_maxHeight);

				}
			}
			//setting height, max-height for nav (calling above written function)
			setNavigationMaxHeight_and_scrollbar();
		}
	});
	
	

})(jQuery);

