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

var initializeSelectableList = function(labelSelectValuePairs, anchorDataType) {
	var setSelectedAndActive = function(index, text) {
		$("div.selectable-list-description").html(text)
		var selectedElement = $('li[data-id='+index+']');
	    selectedElement.addClass("active-text");
	    selectedElement.removeClass("inactive-text");
	}

	var setAllServicesUnselected = function(selectedElements) {
		selectedElements.each(function(index, element){
	        $(element).addClass("inactive-text");
	        $(element).removeClass("active-text");
		});
	}

	labelSelectValuePairs.forEach(function(pair, index) {
		var ul = $($('ul[data-type='+anchorDataType+']')).append(
				"<li class='service-unselected inactive-text' data-type='service-description' data-id='"+
				index+
				"'><i class='fa fa-chevron-right'></i>"+
				pair.label
				+"</li>"
			);

		ul.find("li[data-id="+index+"]").click(function(){
			var serviceLinks = $('li[data-type=service-description]');
			setAllServicesUnselected(serviceLinks);
			setSelectedAndActive(index, pair.text);
		});
	});
	setSelectedAndActive(0, labelSelectValuePairs[0].text)
}