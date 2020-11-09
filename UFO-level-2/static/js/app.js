// from data.js
var tableData = data;

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
var filterButton = d3.select("#filter-btn");

// create event handlers for clicking the button or pressing the enter key on the keyboard
filterButton.on("click", runEnter);
ufoForm.on("submit", runEnter);

// check for errors
console.log(ufoForm);
console.log(tableData);

//----------------------------------------------------------------------------------
// BELOW FUNCTION WILL APPEND ITS FILTERED DATA ONTO THE EXISTING DATA
// LISTENS TO THE EVENT IN THE CONSOLE.LOG
// ---------------------------------------------------------------------------------

// create the function to run for events 
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select input info and get raw html node
    var inputUfoInfo = d3.select("#datetime");

    // get value property of the input info
    var inputUfoValue = inputUfoInfo.property("value");


    // use forEach function to go through the data.js
    tableData.filter(function (results) {

        if (inputUfoValue === results.datetime) {

            // check for errors
            console.log(results);

            // try to add one 'tr' and append to the table using d3
            var filteredRow = tableBody.append("tr");

            // use `Object.entries` to console.log each filtered ufo report values
            Object.entries(results).forEach(function ([key, value]) {

                // check for errors
                console.log(key, value);

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

// ----------------------------------------------------------------------------------
// DROPDOWN MENU FOR FILTERING DATE/TIME, CITY, STATE, COUNTRY, SHAPE, & COMMENTS
// STILL WORKING ON THE PROGRESS...
// ----------------------------------------------------------------------------------

function datetimeList(tableData, response) {

    var ufoTable = document.getElementById("ufo-table");
    for (var i = 0; i < tableData.datetime.length; i++) {
           var row = ufoTable.insertRow(1);
           var cell1 = row.insertCell(0);
           var cell2 = row.insertCell(1);
           cell1 = "tableData.datetime[i].datetime";
           cell2.innerHTML = '<a href="javascript:void(0);" onclick="readProducts(' + tableData.datetime[i].STATION_ID + ')">' + tableData.datetime[i].datetime + '</a>';

       }
   }
