// from data.js
var tableData = data;

// -----------------------------------------------------------------------------------
// append a table to the website, and adds new rows of data for each UFO sighting.
// -----------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// OOPS, BELOW CODE DID NOT WORKED!
//------------------------------------------------------------------------------------
// convert dictionaries to the list within the data array
// var convertedTableData = [];

// for (var key in tableData) {
//     if (tableData.hasOwnProperty(key)) {
//         convertedTableData.push([key, tableData[key]]);
//     }
// };

// check for errors
// console.log(convertedTableData);

//------------------------------------------------------------------------------------
// LET'S TRY BELOW ONE! BUT THIS DIDN'T WORKED AS WELL... '-')"
//------------------------------------------------------------------------------------
// var convertedTableData = Object.values(tableData);
// console.log(convertedTableData);
//------------------------------------------------------------------------------------

// get a reference to the table body
var tableBody = d3.select("tbody");

// check for errors
// console.log(tableBody);

// use forEach function to go through the data.js
tableData.forEach(function (ufoReports) {

    // check for errors
    // console.log(ufoReports);

    // try to add one 'tr' and append to the table using d3
    var row = tableBody.append("tr");

    // use `Object.entries` to console.log each ufo report values
    Object.entries(ufoReports).forEach(function ([key, value]) {

        // check for errors
        // console.log(key, value);

        // use d3 to append 1 cell per ufo sightings values 
        var cell = row.append("td");

        // use d3 to update each cell text with ufo sightings values
        cell.text(key, value);

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
// console.log(ufoForm);
// console.log(tableData);

// create the function to run for events 
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select input info and get raw html node
    var inputUfoInfo = d3.select("#datetime");

    // get value property of the input info
    var inputUfoValue = inputUfoInfo.property("value");

    // use the form input to filter the data by date
    // var filteredResult = tableData.filter(ufo => ufo.datetime === inputUfoValue);

    // check for errors
    // console.log(filteredResult);

    // use forEach function to go through the data.js
    tableData.filter(function (results) {

        if (inputUfoValue === results.datetime) {

            // check for errors
            // console.log(results);

            // try to add one 'tr' and append to the table using d3
            var filteredRow = tableBody.append("tr");

            // use `Object.entries` to console.log each filtered ufo report values
            Object.entries(results).forEach(function ([key, value]) {

                // check for errors
                // console.log(key, value);

                // use d3 to append 1 cell per filtered ufo sightings value
                var filteredCell = filteredRow.append("td");

                // use d3 to update each cell text with filtered ufo sightings value
                filteredCell.text(value);

                // removes the previous filtered table rows
                filteredCell.exit().remove();

                // append the new rows that the user inputs 
                filteredCell.enter().append("td");

            });
        };

    });

};
