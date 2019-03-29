// ANIMATE-INIT.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is  JS file that activates element animation effects used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: TEMPLATE.
// Version: 1.0 Initial Release
// Release Date: 01st Oct 2013
// Author: Designova.
// Website: http://www.designova.net 
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */
jQuery(document).ready(function($) {

	(function(){
	  "use strict";
	  	if( device.mobile() || device.tablet()) {
	  		$('.animated').css('opacity','1');
			$('.activate').css('opacity','1');
	  	}
		if( !device.tablet() && !device.mobile() ) {
			

			setTimeout(function()  {

			    //ANIMATED ELEMENTS TRIGGERING
			    $('.animated').appear(function() {
			     $(this).each(function(){ 
			        $(this).addClass('activate');
			        $(this).addClass($(this).data('fx'));
			       });
			    },{accY: -250});
			}, 400);
			// $(function ($)  : ends
		}
	})();
	//  JSHint wrapper $(function ($)  : ends
});







	

