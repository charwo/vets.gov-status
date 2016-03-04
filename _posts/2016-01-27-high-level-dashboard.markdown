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
<table id="t01"> </table>
<script>fillTable("#t01", "/executiveDashboard.csv"); </script>
</body>


