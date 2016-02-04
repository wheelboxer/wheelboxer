/*
 *
 * State Menu Section related javascript -	Recruiters Corner Template
 *
 */
 
 
;(function( $ ) {
    $.fn.recruitersMapFunctionality = function( options ) {
		var $t = $(this);
        if(!$t.length ) {
            return false;
        }
	}
})(jQuery);



$(document).ready(function() {
	//regionId - state Abbrevation
	var regionId;
	var regionStatePathClass;
	
	
	/*//hovering states funcionality
	$(".us-map *").hover(function(){
			var hoveredElementClassAttr = $(this).attr('class');
			if(hoveredElementClassAttr != undefined)
			{
				//alert(hoveredElementClassAttr);
				$(".all-state-paths").css('fill','#A5BD6C');
				hoveredElementClass = hoveredElementClassAttr.split(" ");
				console.log(hoveredElementClass);
				if(regionStatePathClass != hoveredElementClass[1])
				{
					closeRegionCard();
				}
				$("."+hoveredElementClass[1]).css('fill','#d75b00');
			}
		},function(){
			var hoveredElementClassAttr = $(this).attr('class');
			if(hoveredElementClassAttr != undefined)
			{
				//alert(hoveredElementClassAttr);
				hoveredElementClass = hoveredElementClassAttr.split(" ");
				console.log(hoveredElementClass);
				if(regionStatePathClass != hoveredElementClass[1])
				{
					$(".all-state-paths").css('fill','#A5BD6C');
				}
			}
	});
	//Click states funcionality
	$(".us-map *").click(function(){
		var clickedElementClassAttr = $(this).attr('class');
		if(clickedElementClassAttr != undefined)
		{
			$(".all-state-paths").css('fill','#A5BD6C');
			//alert(clickedElementClassAttr);
			clickedElementClass = clickedElementClassAttr.split(" ");
			console.log(clickedElementClass);
			//alert(clickedElementClass[1]);
			$("."+clickedElementClass[1]).css('fill','#d75b00');
			regionStatePathClass = clickedElementClass[1];
			
			//opens region card based on clicked class value
			openRegionCard(regionStatePathClass);
		}
	});*/
	//hovering states funcionality
	$(".us-map *").hover(function(){
			var hoveredElementClassAttr = $(this).parent().attr('class');
			if(hoveredElementClassAttr != undefined && hoveredElementClassAttr != 'us-map')
			{
				//alert(hoveredElementClassAttr);
				$(".all-state-paths path").css('fill','#A5BD6C');
				$(".all-state-paths polygon").css('fill','#A5BD6C');
				$(".all-state-paths polyline").css('fill','#A5BD6C');
				hoveredElementClass = hoveredElementClassAttr.split(" ");
				console.log(hoveredElementClass);
				/*if(regionStatePathClass != hoveredElementClass[1])
				{
					//closeRegionCard();
					$("."+regionStatePathClass+" path").css('fill','#d75b00');
					$("."+regionStatePathClass+" polygon").css('fill','#d75b00');
					$("."+regionStatePathClass+" polyline").css('fill','#d75b00');
				}
				$("."+hoveredElementClass[1]+" path").css('fill','#d75b00');
				$("."+hoveredElementClass[1]+" polygon").css('fill','#d75b00');
				$("."+hoveredElementClass[1]+" polyline").css('fill','#d75b00');*/
				
				$("."+hoveredElementClass[1]+" path").css('fill','#d75b00');
				$("."+hoveredElementClass[1]+" polygon").css('fill','#d75b00');
				$("."+hoveredElementClass[1]+" polyline").css('fill','#d75b00');
				
				
			}
			$("."+regionStatePathClass+" path").css('fill','#d75b00');
			$("."+regionStatePathClass+" polygon").css('fill','#d75b00');
			$("."+regionStatePathClass+" polyline").css('fill','#d75b00');
			if(hoveredElementClassAttr == undefined || hoveredElementClassAttr == 'us-map')
			{
				//alert(hoveredElementClassAttr);
				$("."+regionStatePathClass+" path").css('fill','#d75b00');
				$("."+regionStatePathClass+" polygon").css('fill','#d75b00');
				$("."+regionStatePathClass+" polyline").css('fill','#d75b00');
			}
		},function(){
			var hoveredElementClassAttr = $(this).parent().attr('class');
			if(hoveredElementClassAttr != undefined)
			{
				//alert(hoveredElementClassAttr);
				hoveredElementClass = hoveredElementClassAttr.split(" ");
				console.log(hoveredElementClass);
				if(hoveredElementClass[0] == 'us-map')
				{
					return false;
				}
				if(regionStatePathClass != hoveredElementClass[1])
				{
					$(".all-state-paths path").css('fill','#A5BD6C');
					$(".all-state-paths polygon").css('fill','#A5BD6C');
					$(".all-state-paths polyline").css('fill','#A5BD6C');
				}
			}
			if(hoveredElementClassAttr == undefined || hoveredElementClassAttr == 'us-map')
			{
				//alert(hoveredElementClassAttr);
				$("."+regionStatePathClass+" path").css('fill','#d75b00');
				$("."+regionStatePathClass+" polygon").css('fill','#d75b00');
				$("."+regionStatePathClass+" polyline").css('fill','#d75b00');
			}
	});
	//Click states funcionality
	$(".us-map *").click(function(){
		var clickedElementClassAttr = $(this).attr('class');
		if(clickedElementClassAttr != undefined)
		{
			$(".all-state-paths path").css('fill','#A5BD6C');
			$(".all-state-paths polygon").css('fill','#A5BD6C');
			$(".all-state-paths polyline").css('fill','#A5BD6C');
			//alert(clickedElementClassAttr);
			clickedElementClass = clickedElementClassAttr.split(" ");
			console.log(clickedElementClass);
			//alert(clickedElementClass[1]);
			$("."+clickedElementClass[1]+" path").css('fill','#d75b00');
			$("."+clickedElementClass[1]+" polygon").css('fill','#d75b00');
			$("."+clickedElementClass[1]+" polyline").css('fill','#d75b00');
			regionStatePathClass = clickedElementClass[1];
			
			//opens region card based on clicked class value
			openRegionCard(regionStatePathClass);
		}
	});
	
	
	//close region card functionality
	$(".close-region-card").click(function(){
		closeRegionCard();
	});
	function closeRegionCard(){
		$(".region-card").hide();
		$(".all-state-paths path").css('fill','#A5BD6C');
		$(".all-state-paths polygon").css('fill','#A5BD6C');
		$(".all-state-paths polyline").css('fill','#A5BD6C');
		regionStatePathClass = '';
	}
	//open region card functionality
	function openRegionCard(regionId){
		$(".region-card").hide();
		$("."+regionId+"-info").show();
	}
	/*code for filtering mobile menu's - start*/
	$(".select-menu-mobile select").change(function(){
		var selectedRegion = $(this).val();
		var clickedRegionId = $(".select-menu-mobile select option:selected").data('filter');	//Gets clicked 'data-filter' attribute value
		//alert(clickedStateFilter);
		$(".selectedmenutext").text(selectedRegion);
		
		openRegionCard(clickedRegionId);	//function used for showing Region card based on Region Id
	});
	/*code for filtering mobile menu's - end*/
	
	if (window.matchMedia("(max-width: 500px)").matches) {
	  /* the viewport is at least 500 pixels wide */
	  //openRegionCard('AL');
	} else {
	  /* the viewport is less than 500 pixels wide */
	}
	
	
	
	
});