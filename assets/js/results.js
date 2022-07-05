console.log("I'm a JavaScript file linked to this page!");



var searchformEl = $('#searchform');
var userQuery = $('#userQuery');
var userTypeSelection = $('#userFormatSelection');

var queryFromURL = window.location.href.split("=", window.location.href.indexOf("&") - window.location.href.indexOf("&"));
// var formatFromURL =;


function executeSearch(e) {
    e.preventDefault();
    console.log("I got clicked! Doin a search now " + userQuery.val() + ", " + userTypeSelection.val());
}

searchformEl.submit(executeSearch);


function init() {
    // var requestURL = 'https://www.loc.gov/' + format + '/' + query + '&fo=json';
    console.log(queryFromURL);
}

init();