---
layout: default
parent: Jailbreaking Your Kindle
title: Kindle Models
nav_order: 1
---

# Kindle Models
Identify your Kindle model and the jailbreak method best suited for it

{: .info }
You can find your serial number by going to `Settings` > `Device Options` > `Device Info`
Which will show a window in which you will be able to see your Kindle's serial number

{: .info }
You only need to enter the first 8 characters of your serial number, not all 16 characters

<style>
    #searchResult
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    input[type=text]
    {
        width: 90%;
        height: 100%;
        padding: 0.5em;
        font-size: 16px;
        border: 3px solid #EEE;
        text-align: center;
    }
</style>

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h3>Enter your Kindle's serial number here</h3>
    <p id="searchStatus"></p>
    <input type="text" id="serialNumber"  maxlength="20" spellcheck="false" placeholder="Enter Serial Number..." title="Enter the Kindle serial number without spaces" oninput="searchForSerial()">
    <button class="btn" style="margin-top: 0.5em;" onclick="searchForSerial()">Find Model</button>
</div>

<div id="searchResult">
</div>

<div>
<h2>All Kindle Models</h2>
<div id="fullModelTable" style="overflow: auto;"></div>
</div>


<script src="./modelFinder.js"></script>