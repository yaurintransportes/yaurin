$(function() {
	var contactTab = $('[data-tab=contact]');
	contactTab.addClass('selected-header-tab');
});

$(function() {
	var contacts = [{
		label: "Contact1",
		text: "Hablanos como te ayudamos  para un mejor servicio en tu progreso para enviar Rapido Directo Confiable"
	},
	{
		label: "Email",
		text: "<h1 class='email'>Email</h1><div>Email us with as much details as you can so we can give you the best help possible</div> <div class='contact-me'><a href='mailto:youremailaddress'>Email Me</a></div>"
	}];

	initializeSelectableList(contacts, "contact-list");
})

// <p attribute1="something" another-attribute="another-thing"></p>