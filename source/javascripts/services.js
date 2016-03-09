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
		text: ""
	},
	{
		label: "Vehiculo con Conductor",
		text: ""
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

	services.forEach(function(val, index){ 
		var ul = $("ul.services-list").append(
				"<li class='service-unselected' data-id='"+
				index+
				"'><i class='fa fa-chevron-right'></i>"+
				val.label
				+"</li>"
			);
		ul.find("li[data-id="+index+"]").click(function(){
			$("div.service-description").html(val.text);			
		});
	});	
})