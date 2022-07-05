console.log("I'm a JavaScript file linked to this page!");



var searchformEl = $('#searchform');
var userQuery = $('#userQuery');
var userTypeSelection = $('#userFormatSelection');

var param = window.location.href.split("q=");
var queryFromURL = param[1].split("&")[0];
var formatFromURL = param[1].split("=")[1];


function executeSearch(e) {
    e.preventDefault();
    console.log("I got clicked! Doin a search now " + userQuery.val() + ", " + userTypeSelection.val());
}

searchformEl.submit(executeSearch);


function init() {
    // var requestURL = 'https://www.loc.gov/' + format + '/' + query + '&fo=json';
    console.log(queryFromURL + " " + formatFromURL);
}

init();