---
layout: post
categories: jekyll update
---
<body>

<ul class="legend">
    <li><span class="status complete"></span> Complete</li>
    <li><span class="status in-progress"></span> In Progress </li>
    <li><span class="status low-risk"></span> Risk of Delay*</li>
    <li><span class="status high-risk"></span> Delayed** </li>
    <li><span class="status not-started"></span> Not Started</li>
</ul>

<p class="note">* Risks being managed by team, but may require escalation<br>
** requires action / assistance</p>

<h3>Product Definition</h3>
<table id="t01"> </table>

<h3>Discovery</h3>
<table id="t02"> </table>

<h3>Prototype</h3>
<table id="t03"> </table>

<h3>Pre Flight</h3>
<table id="t04"> </table>

<h3>Go Live</h3>
<table id="t05"> </table>


<script>
  var URL = window.location.href;
  var title = URL.substring(URL.indexOf("?") + 1);
  fillTable("#t01", "/product_csv_files/" + title + "/product_definition.csv");
  fillTable("#t02", "/product_csv_files/" + title + "/discovery.csv");
  fillTable("#t03", "/product_csv_files/" + title + "/prototype.csv");
  fillTable("#t04", "/product_csv_files/" + title + "/pre_flight.csv");
  fillTable("#t05", "/product_csv_files/" + title + "/go_live.csv");

</script>
</body>


