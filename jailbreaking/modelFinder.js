// Gets the Kindle model from serial number



function getSerialInfo(serial) {    
    if (serial[0] == "G") { // New-style serial number
        if (serial.length < 6) {
            return -1
        }

        return {
            "serial_version": 1,
            "serial_snippet": serial.substring(3, 6)
        }
    } else if (serial[0] == "B" || serial[0] == "9") {
        if (serial.length < 4) {
            return -1
        }

        return {
            "serial_version": 0,
            "serial_snippet": serial.substring(2, 4)
        }
    } else {
        return -2;
    }
}



function searchForSerial() {
    serialNumber = document.getElementById("serialNumber").value;
    // First remove any spaces in the serial number and make it uppercase
    serialNumber = serialNumber.toUpperCase().replaceAll(' ', '');
    console.log("Searching for", serialNumber);

    const searchResultDiv = document.getElementById("searchResult");
    const searchStatus = document.getElementById("searchStatus");
    searchResultDiv.innerHTML = "";
    searchStatus.innerText = "";

    // Validate serial number
    if (serialNumber.length == 2 || serialNumber.length == 3) { // Allow developers to search serial snippet directly
        serialInfo = {
            serial_version: serialNumber.length == 2 ? 0 : 1, // Kinda messy but it works
            serial_snippet: serialNumber
        }
    } else {
        try {
            serialInfo = getSerialInfo(serialNumber);
        } catch {
            searchStatus.style = "color: red;";
            searchStatus.innerText = "ERROR: Your Kindle serial number is invalid";
        }
    }

    if (serialInfo === -1) {
        searchStatus.style = "color: red;";
        searchStatus.innerText = "ERROR: Your Kindle serial number is too short";
    } else if (serialInfo === -2) {
        searchStatus.style = "color: red;";
        searchStatus.innerText = "ERROR: Your Kindle serial number is invalid";
    } else {
        // Search for serial number
        for (const kindle of window.kindleModels) {
            if (kindle.serial_version < serialInfo.serial_version) {
                continue; // Skip wrong version Kindle models
            } else {
                if (Object.keys(kindle.serial_snippets).includes(serialInfo.serial_snippet)) {
                    // Kindle found
                    
                    // Create header
                    const header = document.createElement('h3');
                    header.innerText = "Kindle Found:";
                    searchResultDiv.appendChild(header);

                    const kindleInfoDisplay = [
                        ["Kindle Name", kindle.amazon_name],
                        ["Released", kindle.release_year.toString()],
                        ["Kindle Nickname(s)", kindle.nicknames.join(', ')], // First element of kindle.nicknames should ALWAYS be the generational nickname
                        ["Recommended Jailbreak", kindle.jailbreak]
                    ]

                    const secondaryKindleInfo = [
                        ["KindleTool Name", kindle.serial_snippets[serialInfo.serial_snippet].kindletool_name],
                        ["Release Firmware", kindle.release_firmware],
                        ["Last Firmware Update", kindle.last_firmware],
                        ["Kindle Platform Name", kindle.platform],
                        ["Kindle Board Name", kindle.board],
                        ["Kindle Serial Snippet", serialInfo.serial_snippet]
                    ]

                    const mainTable = document.createElement("table");
                    for (const kindleInfo of kindleInfoDisplay) {
                        const row = document.createElement('tr');
                        const header = document.createElement('th');
                        const field = document.createElement('td');
                        
                        header.style = "text-align: right;";

                        header.innerText = kindleInfo[0];
                        field.innerHTML = kindleInfo[1];

                        row.appendChild(header);
                        row.appendChild(field);

                        mainTable.appendChild(row);
                    }


                    const secondaryTable = document.createElement("table");
                    for (const kindleInfo of secondaryKindleInfo) {
                        const row = document.createElement('tr');
                        const header = document.createElement('td');
                        const field = document.createElement('td');
                        
                        header.style = "text-align: right;";

                        header.innerText = kindleInfo[0];
                        field.innerHTML = kindleInfo[1];

                        row.appendChild(header);
                        row.appendChild(field);

                        secondaryTable.appendChild(row);
                    }

                    searchResultDiv.appendChild(mainTable);

                    // Additional info
                    const secondaryHeader = document.createElement('h4');
                    secondaryHeader.innerText = "Additional Info";

                    searchResultDiv.appendChild(secondaryHeader);
                    searchResultDiv.appendChild(secondaryTable);

                    searchStatus.style = "color: green;";
                    searchStatus.innerText = "Kindle found!"

                    return;
                }
            }
        }

        // Made it to the end, model not found, contact Bluebotlabz
        searchStatus.style = "color: red;";
        searchStatus.innerText = "ERROR: Your Kindle serial number could not be found, please open a GitHub issue";
    }
}


// Generates the table of all models to display
function generateTable() {
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Create header fields
    const headerLabels = [
        "Amazon Name",
        "Kindle Nickname",
        "Lastest Firmware",
        "Recommended Jailbreak",
        "KindleTool Variants"
    ]

    for (const headerLabel of headerLabels) {
        const headerField = document.createElement('th');
        headerField.innerText = headerLabel;

        headerRow.appendChild(headerField);
    }
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);


    const tableBody = document.createElement("tbody");
    for (const kindle of window.kindleModels) {
        const tableRow = document.createElement("tr");

        const amazonName = document.createElement("td");
        const kindleNickname = document.createElement("td");
        const latestFirmware = document.createElement("td");
        const recommendedJailbreak = document.createElement("td");
        const kindletoolVariants = document.createElement("td");

        amazonName.innerText = kindle.amazon_name;
        kindleNickname.innerText = kindle.nicknames.join(', ');
        latestFirmware.innerText = kindle.last_firmware;
        recommendedJailbreak.innerHTML = kindle.jailbreak;
        kindletoolVariants.innerHTML = `<code>${JSON.stringify(kindle.serial_snippets)}</code>`;

        tableRow.appendChild(amazonName);
        tableRow.appendChild(kindleNickname);
        tableRow.appendChild(latestFirmware);
        tableRow.appendChild(recommendedJailbreak);
        tableRow.appendChild(kindletoolVariants);

        tableBody.appendChild(tableRow);
    }

    table.appendChild(tableBody);
    document.getElementById("fullModelTable").appendChild(table);
}

fetch('/models.json').then(response => response.json()).then((data) => {
    window.kindleModels = data;
    generateTable();
});