console.log("I'm a JavaScript file linked to this page!");



var searchformEl = $('#searchform');
var userQuery = $('#userQuery');
var userTypeSelection = $('#userFormatSelection');



function executeSearch(e) {
    e.preventDefault();
    console.log("I got clicked! Doin a search now " + userQuery.val() + ", " + userTypeSelection.val());
    if (userQuery.val() && userTypeSelection.val() != "choose-a-format") {
        location.replace("./search-results.html?q=" + userQuery.val() + "&format=" + userTypeSelection.val());
    } else if (userQuery.val()) {
        location.replace("./search-results.html?q=" + userQuery.val() + "&format=");
    } else {
        console.log("you gotta gimme SOMETHIN");
    }

}

searchformEl.submit(executeSearch);