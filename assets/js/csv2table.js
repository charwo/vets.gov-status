// This is a customized d3 csv to table from here 
// http://bl.ocks.org/ndarville/7075823

// TODO: Make this work for more than one ID

function fillTable(tableid, fileName) {
  d3.text(fileName, function (data) {
          var rows = d3.csv.parseRows(data);
          var tbl = d3.select(tableid)
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
              .html(function(d){return d;})
          
          fixColors();    
      
      
      function fixColors() {
         $(tableid + ' td:contains(Complete)').css('background-color', '#C0C0C0')
         $(tableid + ' td:contains(Green)').css('background-color', 'green')
         $(tableid + ' td:contains(Green)').css('color', 'green')
         $(tableid + ' td:contains(Yellow)').css('color', 'yellow')
         $(tableid + ' td:contains(Yellow)').css('background-color', 'yellow')
         $(tableid + ' td:contains(Red)').css('color', 'red')
         $(tableid + ' td:contains(Red)').css('background-color', 'red')
         
      }
  });
}
