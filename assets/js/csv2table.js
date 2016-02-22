// This is a customized d3 csv to table from here 
// http://bl.ocks.org/ndarville/7075823


// TODO: Make this work for more than one ID
d3.text("/executiveDashboard.csv", function (data) {
        var rows = d3.csv.parseRows(data);
        var tbl = d3.select("#t01")
            .append("table");

        // headers
        tbl.append("thead").append("tr")
            .selectAll("th")
            .data(rows[0])
            .enter().append("th")
            .text(function(d) {
                return d;
            });

        // data
        tbl.append("tbody")
            .selectAll("tr").data(rows.slice(1))
            .enter().append("tr")

            .selectAll("td")
            .data(function(d){return d;})
            .enter().append("td")
            .text(function(d){return d;})
            fixColors();    
    
    
    function fixColors() {
       $('#t01 td:contains(Complete)').css('background-color', 'green')
       $('#t01 td:contains(Green)').css('background-color', 'green')
       $('#t01 td:contains(Green)').css('color', 'green')
       $('#t01 td:contains(Yellow)').css('color', 'yellow')
       $('#t01 td:contains(Yellow)').css('background-color', 'yellow')
       $('#t01 td:contains(Red)').css('color', 'red')
       $('#t01 td:contains(Red)').css('background-color', 'red')
       
    }
});
