$(document).ready(function() {
	// $('.secNavButton').removeClass('on');

	// $('.buttonContent').slideUp('normal');

	// $('.buttonContent').hide();

	// $('.secNavButton').click( function(event) {
		// event.preventDefault();
		// console.log($('.secNavButton').next().is(':hidden') == true);
		// if($('.secNavButton').next().is(':hidden') == true) {
			// $('.secNavButton').addClass('on');
			// $('.secNavButton').next().slideDown('normal');
		// } else{
			// $('.secNavButton').removeClass('on');
			// $('.buttonContent').slideUp('normal');
		// };
	// }); 
			  
		

	// $('.secNavButton').mouseover(function() {
			// $(this).addClass('over');
			// }).mouseout(function() {
			// $(this).removeClass('over');										s
		// });


$('.tout').on('click', function(){  
	var $link = this;
    $(this).find('.buttonContent p').slideToggle(500);
});				

$('.buttonContent p').hide();

});

