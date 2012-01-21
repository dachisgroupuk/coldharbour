coldharbour = {	
	initFunctionName: function() {
		jQuery();
		yepnope({
		test : Modernizr.mq('@media only screen and (width)'),
		yep  : '',
		nope : 'libs/respond.min.js',
		});
    }

jQuery(document).ready(function() {
	coldharbour.initFunctionName();
});