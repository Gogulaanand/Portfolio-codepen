$(window).on('resize', function() {
	if($(window).width() < 800) {
		$('.fa').addClass('fa-2x');
		$('.fa').removeClass('fa-3x');
	}else{
		$('.fa').addClass('fa-2x');
		$('.fa').removeClass('fa-3x');
	}
})
