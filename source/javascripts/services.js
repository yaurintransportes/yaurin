$(function() {
	var servicesTab = $('[data-tab=services]');
	servicesTab.addClass('selected-header-tab');
})

$(function() {
	var services = [{
		label: "Remplazos Servicio Express",
		text: "<h1>Bla blah blahhh</h1>TRANSPORTES YAURIN es un socio logístico lo suficientemente grande como para transportar carga de cualquier tipo y hacia cualquier destino por vía aérea, marítima, terrestre o ferroviaria, y a la vez, capaz de brindar a sus clientes la atención personal que necesitan. Bienvenido a transportesyauri"
	},
	{
		label: "Furgonetas de 500kg",
		text: "Furgonetas de 500kg"
	},
	{
		label: "Vehiculo con Conductor",
		text: "Vehiculo con Conductor"
	},
	{
		label: "Furgonetas de 1500kg",
		text: ""
	},
	{ 
		label: "Vehiculos Frigorificos",
		text: ""
	},
	{
		label: "Envios Urgentes",
		text: ""
	},
	{
		label: "Reparto en Plaza",
		text: "last one"
	}];

	var setSelectedAndActive = function(index, text) {
		$("div.service-description").html(text)
		var selectedElement = $('li[data-id='+index+']');
        selectedElement.addClass("active-text");
        selectedElement.removeClass("inactive-text");
	}

	services.forEach(function(service, index){
		var ul = $("ul.services-list").append(
				"<li class='service-unselected inactive-text' data-type='service-description' data-id='"+
				index+
				"'><i class='fa fa-chevron-right'></i>"+
				service.label
				+"</li>"
			);

		ul.find("li[data-id="+index+"]").click(function(){
			var serviceLinks = $('li[data-type=service-description]');
			setAllServicesUnselected(serviceLinks);
			setSelectedAndActive(index, service.text);
		});
	});

	function setAllServicesUnselected(selectedElements) {
		selectedElements.each(function(index, element){
            $(element).addClass("inactive-text");
	        $(element).removeClass("active-text");
		});
	}

	setSelectedAndActive(0, services[0].text);
})