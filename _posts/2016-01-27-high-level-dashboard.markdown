---
layout: post
title:  "High Level Dashboard"
date:   2016-01-27 19:49:12 -0800
categories: jekyll update
---
<head>
        <meta charset="utf-8">
        <style>
            table {
                border-collapse: collapse;
                border: 2px black solid;
                font: 12px sans-serif;
            }

            td {
                border: 1px black solid;
                padding: 5px;
            }
        </style>
    </head>
<body>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" charset="utf-8">
    d3.text("/executiveDashboard.csv", function(data) {
        var parsedCSV = d3.csv.parseRows(data);

        var container = d3.select("#t01")

            .selectAll("tr")
                .data(parsedCSV).enter()
                .append("tr")

            .selectAll("td")
                .data(function(d) { return d; }).enter()
                .append("td")
                .text(function(d) { return d; });
            fixColors();    
    });
    
    function fixColors() {
       $('#t01 td:contains(Complete)').css('background-color', 'green')
       $('#t01 td:contains(Green)').css('background-color', 'green')
       $('#t01 td:contains(Green)').css('color', 'green')
       $('#t01 td:contains(Yellow)').css('color', 'yellow')
       $('#t01 td:contains(Yellow)').css('background-color', 'yellow')
       $('#t01 td:contains(Red)').css('color', 'red')
       $('#t01 td:contains(Red)').css('background-color', 'red')
       
    }
</script>

<table id="t01"> </table>
<br><br><br><br>
<h3>Legend</h3>
<table class="c">
  <tr>
    <th class="a">Symbol</th>
    <th>Meaning</th>    
  </tr>
  <tr>
    <td bgcolor="#009900">Complete</td>
    <td>Completed</td>    
  </tr>
  <tr>
    <td bgcolor="#009900"></td>
    <td>In Progress - No Blockers</td>    
  </tr>
  <tr>
    <td bgcolor="yellow"></td>
    <td>Low/Moderate risk blockers require possible escalation</td>   
  </tr>
  <tr>
    <td bgcolor="red"></td>
    <td>High risk blockers require escalation</td>    
  </tr>
  <td></td>
  <td>Not Yet Started</td>  
  <tr>
    <td bgcolor="808080"></td>
    <td>Not applicable for this product</td>    
  </tr>
</table>
</body>


