---
layout: default
parent: Jailbreaking Your Kindle
title: Kindle Models
nav_order: 2
---

# Kindle Models

{: .highlight }
You can find your serial number by going to `Settings` > `Device Options` > `Device Info`
Which will show a window in which you will be able to see your Kindle's serial number

{: .highlight }
You only need to enter the first 8 characters of your serial number, not all 16 characters

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h3>Enter your Kindle's serial number here</h3>
    <p id="searchStatus"></p>
    <input type="text" id="serialNumber" onchange="searchForSerial()" style="width: 90%; height: 100%; padding: 0.5rem 1rem 0.5rem 2.5rem; font-size: 16px; border: 3px solid #EEE; background: #DDD; text-align: center;">
    <button class="btn" style="margin-top: 0.5em;" onclick="searchForSerial()">Find Model</button>
</div>

<div id="searchResult">
</div>

<div>
<h2>All Kindle Models</h2>
<div id="fullModelTable" class="table-wrapper"></div>
</div>


<script src="./modelFinder.js"></script>