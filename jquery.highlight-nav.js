/*!
 * jQuery Highlight Nav Plugin v0.8
 *
 * Description:
 * For a given nav object, add a class to a links immediate parent, based on
 * whether it matches the current URL.
 *
 */

(function( $ ){

	$.fn.highlight_nav = function( options ) {


		var settings = {
			url: '',
			className: 'current',
			parentSelector: 'li',
			matchOnFilename: false,
			ancestor: {
				highlight: true,
				className: 'current-ancestor',
				selector: 'li'
			}
		};

		var current_url = $.extend({}, {
			url: '',
			withHash: '',
			filename: ''
		});

		$('.primary-nav, .sub-nav-wrapper').find('li > a').each(function() {


		});



		var methods = {

			// set up
		    init : function( options ) {

				settings = $.extend(true, settings, options);

				methods.get_current_url()
		    },

			get_current_url : function () {

				if(settings.url != ''){
					current_url.url = settings.url;
				} else {
					current_url.url = location.href;
				}

				// check to see if there's a # in the location
				var hash_location = location.href.indexOf('#');

				// if so, extract the part of the url before that.
				if(hash_location > 0) {

					current_url.withHash = current_url.url;
					current_url.url = current_url.url.slice(0, hash_location);

				}

				// get filename
				var url_parts_array = current_url.url.split("/");
				if(url_parts_array.length > 0){
					current_url.filename = url_parts_array[url_parts_array.length - 1];
				}

			},

			highlight: function(obj) {

				$(obj).find('a').each(function(i){

					// the link tag and url we're looking at in this iteraction of the each() loop
					var current_link_tag = $(this);
					var link_url = current_link_tag.attr('href');

					// if the link url matches the pages url
					if(link_url == current_url.url || link_url == current_url.withHash || (settings.matchOnFilename && link_url == current_url.filename)) {

						// get all the parents of this link matching the parentSelector
						var parentsWithParentSelector = current_link_tag.parents(settings.parentSelector);

						// only add the 'active' class to the first parent in the tree that matches this element
						parentsWithParentSelector.each(function(i){
							if(i == 0) {
								$(this).addClass(settings.className);
							}
						});

						// if we want to add classes to ancestors as well
						if(settings.ancestor.highlight == true) {

							// all ancestors matching the parent selector from the options
							var ancestors = current_link_tag.parent().parents(settings.ancestor.selector);

							// it's possible the parent selector could match stuff above the nav in the DOM
							// if the selector is broad enough (which it is by default). So limit ancestors
							// to those in the nav tree we're looking at
							var ancestorsWithInTheNav = $(obj).find(settings.ancestor.selector).filter(ancestors);

							// add the class to the ancestors, from the options
							ancestorsWithInTheNav.addClass(settings.ancestor.className);

						}

					}

				});



			}

		};

		methods.init(options);

		// allow chaining
		return this.each(function(i, obj) {

			methods.highlight(obj);

	    });


	};
})( jQuery );
