
$(document).ready(function(){
	$('.information_wraper').on('mouseover',function(){
		$(this).parents().addClass('opacity1');
	});

	$('.information_wraper').on('mouseout',function(){
		$(this).parents().removeClass('opacity1');
	});

	$('.wraper_photo').on('mouseover',function(){
		$(this).addClass('opacity1');
	});

	$('.wraper_photo').on('mouseout',function(){
		$(this).removeClass('opacity1');
	});

});

