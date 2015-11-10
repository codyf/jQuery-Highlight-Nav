jQuery Highlight Nav plugin
=======================

Highlight the current page in the nav. For a given nav object, add a class to a links immediate parent, based on whether it matches the current URL.

## General Requirements

You'll need to have jQuery included on your page somewhere:
- jQuery: [http://jquery.com/](http://jquery.com/)

## Usage

Add jQuery and jQuery Highlight Nav to your page.

	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script type="text/javascript" src="./javascript/jquery.highlight-nav.js"></script>

Set up the nav.

	<ul class="nav">
		<li><a href="http://example.com/">Home</a></li>
		<li>
			<a href="http://example.com/services">Services</a>
			<ul>
				<li><a href="http://example.com/services/inspection">Inspection</a></li>
				<li><a href="http://example.com/services/replacement">Replacement</a></li>
			</ul>
		</li>
		<li><a href="http://example.com/about">About</a></li>
		<li><a href="http://example.com/contact">Contact</a></li>
	</ul>


Then call the plugin to highlight the current page within the nav, via a CSS class.

	$(document).ready(function() {

		$('.nav').highlight_nav();

	});

## Options

You can optionally pass an array of options to the function to customize how it works.


	var options = {
		url: '', // Page url to try to match against. By default, location.href is used
		className: 'current', // class name to add to link parent on url match
		parentSelector: 'li', // selector for parent of link to add class to
		matchOnFilename: false, // try to match on the filename part of the url
		ancestor: { // settings for dealing with ancestors
			highlight: true, // add a class to ancestors of link with match
			className: 'current-ancestor', // class name for ancestors
			selector: 'li' // only look for parents matching this selector
		}
	};

	$('.nav').highlight_nav(options);

## Development

Pull requests are welcome!

## License

This library is being provided as is under an MIT license. See LICENSE-MIT.txt for the details of that.
