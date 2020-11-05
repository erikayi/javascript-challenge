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
tableData.forEach(function (ufoReports) {

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

// select ufo form 
var ufoForm = d3.select("#ufoForm");

// select filter button
var button = d3.select("#filter-btn");

// create event handlers for clicking the button or pressing the enter key on the keyboard
button.on("click", runEnter);
ufoForm.on("submit", runEnter);

// check for errors
console.log(ufoForm);
console.log(tableData);

// create the function to run for events 
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select input info and get raw html node
    var inputUfoInfo = d3.select("#datetime");

    // get value property of the input info
    var inputUfoValue = inputUfoInfo.property("value");

    // use the form input to filter the data by date
    var filteredResult = tableData.filter(ufo => ufo.datetime === inputUfoValue);
    
    // check if it runs without errors
    console.log(filteredResult);

    // print the value to the console log

    rows = d3.selectAll("tr>td").text(filteredResult);

    // removes the previous filtered table rows
    rows.exit().remove();

    // append the new rows that the user inputs 
    rows.enter().append("tr");

};
