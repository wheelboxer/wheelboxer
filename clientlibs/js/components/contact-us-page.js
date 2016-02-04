	// JavaScript Document


	
	function check_for_empty(x){
	var y =$(x).val();
	if ( y == ''){
		$(x).css('border','1px solid #cf4800');
		$('.err-msg').html('Please complete all required fields before submitting.').show().css('color','#cf4800').fadeOut(10000);
		}
		else {
			$(x).css('border','1px solid #999');
			}
	}	


function validate_form() {
	var first_name = $('.first-name').val();
	var last_name = $('.last-name').val();
	var phone = $('.phone-number').val();
	var email = $('.email').val();
	var text_area = $('.text-area').val();
	
	var validater = ['.first-name','.last-name','.phone-number','.email','.text-area'];
	for ( var i =0; i<validater.length;i++){
		$(validater[i]).blur();
		console.log($(validater[i]).val());
		}
	/*if( $('.select-1').val() == "I am/a ...")	{
		$('.select-1').css('border','1px solid #cf4800');
		$('.err-msg').html('You must not leave this field empty').show().css('color','#cf4800').fadeOut(10000);
		
		}
		else {
			$('.select-1').css('border','1px solid #999');
			}
			
	if( $('.select-2').val() == "Preferred Contact Method")	{
		$('.select-2').css('border','1px solid #cf4800');
		$('.err-msg').html('You must not leave this field empty').show().css('color','#cf4800').fadeOut(10000);
		
		}
		else {
			$('.select-3').css('border','1px solid #999');
			}
			*/
			
	if( $('#nature-of-request').find('.dd-selected-text').text() == "Nature of Request*"  || $('#nature-of-request').find('.dd-selected-text').text() == "Nature of Request")	{
		$('#nature-of-request').find('.dd-select').css('border','1px solid #cf4800');
		$('.err-msg').html('You must not leave this field empty').show().css('color','#cf4800').fadeOut(10000);
		
		}
		else {
			$('#nature-of-request').find('.dd-select').css('border','1px solid #005985');
			}				
	}	
	
function clear_color(k) {
	$(k).css('border','1px solid #005985');
	}	
	
function chk_phone_number(k) {
    var e = $(k);
    var r = /(^\+{1}\d{10,18}$)|(^\d{10,18}$)/;
    var v = $.trim(e.val());
   /* if (v == ' '){
		 e.css("border", "1px solid #cf4800");
		$('.err-msg').html('You should not leave this field empty').show().css('color','#cf4800').fadeOut(10000);
		
		}
	 else*/ if (r.test(v) || v == ' ') {
        e.css("border", "1px solid #cf4800");
		$('.err-msg').html('Please enter valid phone number').show().css('color','#cf4800').fadeOut(10000);
        
    }
		
		 else {
        e.css("border", "1px solid #005985");
        
    }
}

function email_check(k) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (k.value.trim() == '') {
        $(k).css("border", "1px solid #cf4800");
		$('.err-msg').html('Please complete all required fields before submitting.').show().css('color','#cf4800').fadeOut(10000);
    } else if (k.value.trim() != '' && regex.test(k.value.trim()) === false) {
        $(k).css("border", "1px solid #cf4800");
		$('.err-msg').html('Please complete all required fields before submitting.').show().css('color','#cf4800').fadeOut(10000);
    } else {
        $(k).css("border", '1px solid #005985');
    }
}

	
	
	 $(document).ready(function(){
	$('.dd-selected').find("label:contains('*')").each(function () {
    $(this).html($(this).html().replace("*", "<i class='fa fa-asterisk fa-custm-asterisk'></i>"));
});
	
	
	var x = ['#i-am-for','#pre-contact-mthd','#nature-of-request']
	for (var i=0;i<x.length ; i++){
		console.log($(x[i]).find('.dd-selected-text').text())
		
		}
	
	$('#i-am-for,#pre-contact-mthd,#nature-of-request').hover(function(k){
		var title_of_text = $(this).find('.dd-selected-text').text();
		
		$(this).attr('title',title_of_text);
		
		})
	
		 })
		 
