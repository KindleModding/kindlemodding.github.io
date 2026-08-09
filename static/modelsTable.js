function generateTable() {
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headerLabels = [
        "Amazon Name",
        "Kindle Nickname",
        "Latest Firmware",
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