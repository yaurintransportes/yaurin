$(function() {
	var contactTab = $('[data-tab=contact]');
	contactTab.addClass('selected-header-tab');
});

$(function() {
	var contacts = [{
		label: "Contact1",
		text: "do some contacting"
	},
	{
		label: "Furgonetas de 500kg",
		text: "Furgonetas de 500kg"
	}];

	initializeSelectableList(contacts, "contact-list");
})