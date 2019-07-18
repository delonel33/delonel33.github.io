var check = 0;

$('document').ready(function() {
	$('.section-services-wraper-block-content').hide()
	$('.section-services-wraper-block-title').addClass('flex-open')

	$('.section-services-wraper-block-title-rigth').click(function() {
		
		
		if(check == 0)
		{
			$('.section-services-wraper-block-content').hide()
			$('.section-services-wraper-block-title').addClass('flex-open')
			check = 1;
			return;
		}

		if(check == 1)
		{
			$('.section-services-wraper-block-content').show()
			$('.section-services-wraper-block-title').removeClass('flex-open')
			check = 0;
		}
	});
});

	