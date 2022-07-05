console.log("I'm a JavaScript file linked to this page!");



var searchformEl = $('#searchform');
var userQuery = $('#userQuery');
var userTypeSelection = $('#userFormatSelection');



function executeSearch(e) {
    e.preventDefault();
    console.log("I got clicked! Doin a search now " + userQuery.val() + ", " + userTypeSelection.val());
}

searchformEl.submit(executeSearch);