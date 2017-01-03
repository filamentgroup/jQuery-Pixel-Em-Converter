// https://github.com/0student/jQuery-Pixel-Em-Converter
/*--------------------------------------------------------------------
 * jQuery pixel/em conversion plugins: toEm() and toPx()
 * by Scott Jehl (scott@filamentgroup.com), http://www.filamentgroup.com
 * Copyright (c) Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) or GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * Article: http://www.filamentgroup.com/lab/update_jquery_plugin_for_retaining_scalable_interfaces_with_pixel_to_em_con/
 * Options:
 scope: string or jQuery selector for font-size scoping
 * Usage Example: $(myPixelValue).toEm(); or $(myEmValue).toPx();
 --------------------------------------------------------------------*/

$.fn.toEm = function(settings){
	settings = jQuery.extend({
		scope: 'body'
	}, settings);
	// default 0 is required because $(0) holds jQuery init() function instead of 0 value yeldings this[0] = undefined
	var that = parseInt(this[0] ||0, 10),
			scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
			scopeVal = scopeTest.height();
	scopeTest.remove();
	return (that / scopeVal).toFixed(8);
};



$.fn.toPx = function(settings){
	settings = jQuery.extend({
		scope: 'body'
	}, settings);
	// default 0 is required because $(0) holds jQuery init() function instead of 0 value yeldings this[0] = undefined
	var that = parseFloat(this[0] || 0),
			scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
			scopeVal = scopeTest.height();
	scopeTest.remove();
	return Math.round(that * scopeVal);
};
