$(function() {
	document.getElementsByTagName("li")[0].addEventListener("click",function() {
		if(!this.parentNode.getAttribute("class")) {
			this.parentNode.setAttribute("class","slideDown");
		} else {
			this.parentNode.removeAttribute("class");
		}
	});
	
	$( document ).ready(function() {
		$('#chocolate').click(function() {
			$('#respond').toggleClass('expand');
			console.log("test");
		});
	})
});