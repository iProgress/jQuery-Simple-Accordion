/*
* Accordion v1.0
* Developed by Yuriy Vaskevich
* Simple accordion plugin
* Usege: $("dl").simleAccordion();
* This work is licensed under a Creative Commons Attribution-ShareAlike 3.0
* Unported License: http://creativecommons.org/licenses/by-sa/3.0/
*/
(function( $ ) {
	
	$.fn.simleAccordion = function () {

		var accordion = $(this);

		accordion.hide().fadeIn();

		accordion.find(".active").show();

		accordion.find("dt").on("click", function (){
		
			var current = $(this).next("dd");

			if (current.is(":hidden")) {
				current.slideDown().siblings("dd").slideUp();
			}
		
		});

	};

})( jQuery );