$(function() {
var pictures = [
		"vans.jpg",
		"ways.jpg",
		"welcome.jpg"
	];

	var getNextImageIndex = function(index) {
		var nextIndex = 0;
		if(index<(pictures.length-1)) {
			nextIndex=index+1;
		}
		return nextIndex;
	}

	var animateBannerPictures = function(index=0) {
		setTimeout(function(){
			divLeft = $('div.left');
			divLeft.animate({opacity: 0}, "fast", function() {
				divLeft
					.css("background-image", "url(../images/"+pictures[index]+")")
					.animate({opacity: 1})
			})

			animateBannerPictures(getNextImageIndex(index));
		}, 3000)
	}
	animateBannerPictures();
})