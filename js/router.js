  
 /*
  *  Javascript Router.js
  *  
  *  Written By Bart Dority - October, 2017
  * 
  *  This is a Javascript based router that allows you to build a "Single Page App"
  *  Using just a little Javascript and a little PHP.  The Navigation Links are
  *  built dynamically from an array using PHP.  The links are responded to in 
  *  javascript, using JQuery -- and then an AJAX request is sent to the server
  *  to load in the corresponding HTML page.  We use JQuery again to update
  *  the DOM.
  *
  *
  */


 $(document).ready( function()  {

/* Wait until the page is done loading before we start listening for navigation clicks */

  $(".navBar li").on('click', linkMe );
  routeMe('home');

});

/* LinkMe
 *
 * parameter: Take in a jQuery object of the link that made the request for navigation
 *
 */

var linkMe = function() {
    var linker = $(this);

    /* update the style of the link on the page so the user knows we are in this section now */
    $(".navBar li").removeClass('navSelected');
    $(linker).addClass('navSelected');

    /* Push this navigational choice to the browser history so that the URL actually changes */
    var selection = $(this).data('selection');
    var stateObj = { page: "selection" };
    history.pushState(stateObj, "?page="+selection, "?page="+ selection);

    routeMe(selection);
}

/* 
 *  RouteMe
 * 
 *  Open an XMLHTTP Request (Ajax call) to dynamically load in an html page
 *
 *  parameter:  pagename: string of the filename we want loaded
 *
 */

var routeMe = function( pagename ) {    
  	var contentArea = $('#contentArea');

    /*  Make an AJAX call to load in the new content file */
	  var client = new XMLHttpRequest();
    var pagepath = './pages/'+ pagename +'.html';

	  client.open('GET', pagepath);

    /*  When the file is done loading, we get notified here */
	  client.onreadystatechange = function() {

      /* If we're done and everything went as planned, then update the content area */
		  if (client.readyState === XMLHttpRequest.DONE) {
      if (client.status === 200) {
      	updateContent( client.responseText );
      } else {
        alert('There was a problem with the request.');
      }
    }
	}
	client.send();
  	
}

/* LinkMe
 *
 * parameters: the response from the Ajax Request
 *
 */

var updateContent = function( response ) {


  /* Use JQuery to update the html of the content div in the DOM */
	$('#contentArea').html( response );


}









