// from data.js
var tableData = data;



var tbody = d3.select("tbody");

tableData.forEach(function(site){
    var row = tbody.append("tr");
    row.append("td").text(site.datetime);
    row.append("td").text(site.city);
    row.append("td").text(site.state);
    row.append("td").text(site.country);
    row.append("td").text(site.shape);
    row.append("td").text(site.durationMinutes);
    row.append("td").text(site.comments);
});



console.log(tableData);

function updateWeb(inputDate){
    
    
    
    function filterSightings(site){
        return inputDate == site.datetime
    };

    var filteredData = tableData.filter(filterSightings);
    console.log(filteredData);

    

    filteredData.forEach(function(site){
        var row = tbody.append("tr");
        row.append("td").text(site.datetime);
        row.append("td").text(site.city);
        row.append("td").text(site.state);
        row.append("td").text(site.country);
        row.append("td").text(site.shape);
        row.append("td").text(site.durationMinutes);
        row.append("td").text(site.comments);
    });
};





function handleButtonClick(){
    console.log("you clicked!")
    var inputElement = d3.select("#datetime");

    //console.log(inputElement)
    var inputDate = inputElement.property("value");
    console.log(inputDate);
    //var inputDate = "1/2/2010";
    d3.select("tbody").text('');
    updateWeb(inputDate);
    
    
};


d3.selectAll("#filter-btn").on("click",handleButtonClick);









