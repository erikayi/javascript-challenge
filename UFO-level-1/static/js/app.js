// from data.js
var tableData = data;

// YOUR CODE HERE!

// -----------------------------------------------------------------------------------
// append a table to the website, and adds new rows of data for each UFO sighting.
// -----------------------------------------------------------------------------------

// get a reference to the table body
var tableBody = d3.select("tbody");

// check for errors
console.log(tableBody);

// use forEach function to go through the data.js
data.forEach(function (ufoReports) {

    // check for errors
    console.log(ufoReports);

    // try to add one 'tr' and append to the table using d3
    var row = tableBody.append("tr");

    // use `Object.entries` to console.log each ufo report values
    Object.entries(ufoReports).forEach(function ([key, value]) {

        // check for errors
        console.log(key, value);

        // use d3 to append 1 cell per ufo sightings values 
        var cell = row.append("td");

        // use d3 to update each cell text with ufo sightings values
        cell.text(value);

    });

});


// -----------------------------------------------------------------------------------
// listen for events and search through 'date/time' column according to the user input
// -----------------------------------------------------------------------------------

// // select ufo form 
// var ufoForm = d3.select("#ufoForm");

// // select filter button
// var button = d3.select(".btn btn-primary btn-lg");

// // create event handlers for clicking the button or pressing the enter key on the keyboard
// button.on("click", runEnter);
// ufoForm.on("submit",runEnter);

// // create the function to run for events 
// function runEnter() {

//     d3.event.preventDefault();

//     var inputUfoInfo = d3.select("#datetime");

//     var inputUfoValue = inputUfoInfo.property("value");

//     console.log(inputUfoValue);

//     console.log(inputUfoValue);

//     d3.select("#ufo-table>tr").text(inputUfoValue);
// }