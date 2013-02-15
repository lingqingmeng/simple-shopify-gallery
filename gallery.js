$(document).ready(function() {

	var first_url;
	first_url = $( "ul#thumbs li:first-child a" ).attr( "href" );
 	console.log( first_url );

	$( "img#target" ).attr( 'src', first_url );

	$( "ul#thumbs" ).children().click(function(e) {
		e.preventDefault();
		url = $( this ).find('a').attr( 'href');
		console.log(url);
		$( "img#target" ).attr( 'src', url );
	});

});