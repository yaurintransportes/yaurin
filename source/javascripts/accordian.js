$(function() {
	$('.tout').on('click', function() { 
		var $link = this;
	    $(this).find('.buttonContent p').slideToggle(500);
	});

	$('.buttonContent p').hide();
});