/*
* Accordion v1.0
* Developed by Yuriy Vaskevich
* Simple jQuery Accordion plugin
* Date: 02/24/2013
* Usege: $("dl").SimleAccordion();
* This work is licensed under a Creative Commons Attribution-ShareAlike 3.0
* Unported License: http://creativecommons.org/licenses/by-sa/3.0/
*/
(function( $ ) {
	
	$.fn.SimpleAccordion = function () {

		// Cache element
		var accordion = $(this);

		// Fade in on load
		accordion.hide().fadeIn();

		// Open active panel
		accordion.find(".active").show();

		// Listen to onClick
		accordion.find("dt").on("click", function (){
			
			// Cache current
			var current = $(this).next("dd");

			// Check if not active
			if (current.is(":hidden")) {

				// Open curren panel
				current.slideDown().siblings("dd").slideUp();
				
			}
		
		});

	};

})( jQuery );