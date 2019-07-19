var check_1 = 0;
var check_2 = 0;
var check_3 = 0;
var check_4 = 0;
var check_5 = 0;

$('document').ready(function() {
	$('.content-1').hide()
	$('.title-1').addClass('flex-open')


	$('.content-2').hide()
	$('.title-2').addClass('flex-open')

	$('.content-3').hide()
	$('.title-3').addClass('flex-open')

	$('.content-4').hide()
	$('.title-4').addClass('flex-open')

	$('.content-5').hide()
	$('.title-5').addClass('flex-open')


	$('.rigth-1').click(function() {
		
		
		if(check_1 == 0)
		{
			$('.content-1').hide()
			$('.title-1').addClass('flex-open')
			check_1 = 1;
			return;
		}

		if (check_1 == 1)
		{
			$('.content-1').show()
			$('.title-1').removeClass('flex-open')
			check_1 = 0;
		}
	});

	$('.rigth-2').click(function () {


		if (check_2 == 0) {
			$('.content-2').hide()
			$('.title-2').addClass('flex-open')
			check_2 = 1;
			return;
		}

		if (check_2 == 1) {
			$('.content-2').show()
			$('.title-2').removeClass('flex-open')
			check_2 = 0;
		}
	});

	$('.rigth-3').click(function () {


		if (check_3 == 0) {
			$('.content-3').hide()
			$('.title-3').addClass('flex-open')
			check_3 = 1;
			return;
		}

		if (check_3 == 1) {
			$('.content-3').show()
			$('.title-3').removeClass('flex-open')
			check_3 = 0;
		}
	});

	$('.rigth-4').click(function () {


		if (check_4 == 0) {
			$('.content-4').hide()
			$('.title-4').addClass('flex-open')
			check_4 = 1;
			return;
		}

		if (check_4 == 1) {
			$('.content-4').show()
			$('.title-4').removeClass('flex-open')
			check_4 = 0;
		}
	});

	$('.rigth-5').click(function () {


		if (check_5 == 0) {
			$('.content-5').hide()
			$('.title-5').addClass('flex-open')
			check_5 = 1;
			return;
		}

		if (check_5 == 1) {
			$('.content-5').show()
			$('.title-5').removeClass('flex-open')
			check_5 = 0;
		}
	});
});
	