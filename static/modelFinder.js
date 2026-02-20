function getSerialInfo(serial) {    
    if (serial[0] == "G") { 
        if (serial.length < 6) {
            return -1
        }

        return {
            "serial_version": 1,
            "device_code": serial.substring(3, 6)
        }
    } else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"].includes(serial[0])) {
        if (serial.length < 4) {
            return -1
        }

        return {
            "serial_version": 0,
            "device_code": serial.substring(2, 4)
        }
    } else {
        return -2;
    }
}



function searchForSerial() {
    serialNumber = document.getElementById("serialNumber").value;
    serialNumber = serialNumber.toUpperCase().replaceAll(" ", "");
    console.log("Searching for", serialNumber);

    const searchResultDiv = document.getElementById("searchResult");
    const searchStatus = document.getElementById("searchStatus");
    searchResultDiv.innerHTML = "";
    searchStatus.innerText = "";

    if (serialNumber.length == 2 || serialNumber.length == 3) { 
        serialInfo = {
            serial_version: serialNumber.length == 2 ? 0 : 1,
            device_code: serialNumber
        }
    } else {
        try {
            serialInfo = getSerialInfo(serialNumber);
        } catch {
            searchStatus.style = "color: red; font-size: 1.2em;";
            searchStatus.innerText = "ERROR: Serial Number Invalid!";
        }
    }

    if (serialInfo === -1) {
        searchStatus.style = "color: red; font-size: 1.2em;";
        searchStatus.innerText = "ERROR: Serial Number Too Short!";
    } else if (serialInfo === -2) {
        searchStatus.style = "color: red; font-size: 1.2em;";
        searchStatus.innerText = "ERROR: Serial Number Invalid!";
    } else {
        for (const kindle of window.kindleModels) {
            if (kindle.serial_version < serialInfo.serial_version) {
                continue; 
            } else {
                if (Object.keys(kindle.device_codes).includes(serialInfo.device_code)) {
                    const header = document.createElement("h3");
                    header.innerText = "Kindle Found:";
                    searchResultDiv.appendChild(header);

                    const kindleInfoDisplay = [
                        ["Kindle Name", kindle.amazon_name],
                        ["Released", kindle.release_year.toString()],
                        ["Kindle Nickname(s)", kindle.nicknames.join(", ")],
                        ["Recommended Jailbreak", kindle.jailbreak]
                    ]

                    const secondaryKindleInfo = [
                        ["KindleTool Name", kindle.device_codes[serialInfo.device_code].kindletool_name],
                        ["Release Firmware", kindle.release_firmware],
                        ["Last Firmware Update", kindle.last_firmware],
                        ["Kindle Platform Name", kindle.platform],
                        ["Kindle Board Name", kindle.board],
                        ["Kindle Serial Snippet", serialInfo.device_code]
                    ]

                    const mainTable = document.createElement("table");
                    for (const kindleInfo of kindleInfoDisplay) {
                        const row = document.createElement("tr");
                        const header = document.createElement("th");
                        const field = document.createElement("td");
                        
                        header.style = "text-align: right;";

                        header.innerText = kindleInfo[0];
                        field.innerHTML = kindleInfo[1];

                        row.appendChild(header);
                        row.appendChild(field);

                        mainTable.appendChild(row);
                    }


                    const secondaryTable = document.createElement("table");
                    for (const kindleInfo of secondaryKindleInfo) {
                        const row = document.createElement("tr");
                        const header = document.createElement("td");
                        const field = document.createElement("td");
                        
                        header.style = "text-align: right;";

                        header.innerText = kindleInfo[0];
                        field.innerHTML = kindleInfo[1];

                        row.appendChild(header);
                        row.appendChild(field);

                        secondaryTable.appendChild(row);
                    }

                    searchResultDiv.appendChild(mainTable);

                    /*
                    const secondaryHeader = document.createElement("h4");
                    secondaryHeader.innerText = "Additional Info";

                    searchResultDiv.appendChild(secondaryHeader);
                    searchResultDiv.appendChild(secondaryTable);

                    searchStatus.style = "color: green;";
                    searchStatus.innerText = "Kindle found!"
                    */

                    return;
                }
            }
        }

        searchStatus.style = "color: red; font-size: 1.2em;";
        searchStatus.innerHTML = "ERROR: Serial Number Not Found! Please Open a <a style=\"color: red;\" href=\"https://github.com/KindleModding/kindlemodding.github.io\">GitHub Issue.</a>";
    }
}

function generateTable() {
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headerLabels = [
        "Amazon Name",
        "Kindle Nickname",
        "Lastest Firmware",
        "Recommended Jailbreak",
        "KindleTool Variants"
    ]

    for (const headerLabel of headerLabels) {
        const headerField = document.createElement("th");
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
        kindleNickname.innerText = kindle.nicknames.join(", ");
        latestFirmware.innerText = kindle.last_firmware;
        recommendedJailbreak.innerHTML = kindle.jailbreak;
        kindletoolVariants.innerHTML = `<code>${JSON.stringify(kindle.device_codes)}</code>`;

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

fetch("/models.json").then(response => response.json()).then((data) => {
    window.kindleModels = data;
    generateTable();
});