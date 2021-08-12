// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

function buildTable(data) {
    tbody.html("");

// Loop through "data" and console.log for each UFO Sighting, append rows to the table
data.forEach((dataRow) => {
    var row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
          cell.text(val);
        }
    );
});
}



function handleClick() {

  // Get the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Filter using date entered
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the data that was filtered
  buildTable(filteredData);
}

// Attach event to the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
