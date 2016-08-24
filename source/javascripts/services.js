$(function() {
	var servicesTab = $('[data-tab=services]');
	servicesTab.addClass('selected-header-tab');
})

$(function() {
	var services = [{
		label: "Remplazos Servicio Express",
		text: "<h1>Vehiculos Frigorificos</h1>TRANSPORTES YAURIN es un socio logístico lo suficientemente grande como para transportar carga de cualquier tipo y hacia cualquier destino por vía aérea, marítima, terrestre o ferroviaria, y a la vez, capaz de brindar a sus clientes la atención personal que necesitan. Bienvenido a transportesyauri"
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

	initializeSelectableList(services, "services-list");
});

var expandItem = function(iteamName) {
	var itemDetails = $('[data-item-name="' + iteamName +'"]');
	itemDetails.toggleClass('collapsed');
}