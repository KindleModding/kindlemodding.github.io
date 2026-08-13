//Alert Modal
const readLander = localStorage.getItem("readLander");
if(!readLander) {
    showDialog(
        "Halt!",
        `We have detected <b>you have not</b> read the <a href="/jailbreaking/">jailbreaking lander</a> informational page yet, and are trying to find your jailbreak.<br>Please head over there now, and the warning will clear. <p class="caution"><b>Do NOT expect any support otherwise.</b></p>`
    );
};

window.info = {};
let current = document.querySelector("#home");

function nav(target) {
    current.classList.add("hidden");

    const el = document.querySelector(target);
    el.classList.remove("hidden");

    current = el;

    if (target === "#results") fillResults();
};

//Helpers, taken from original modelFinder.js. Step 1
function getSerialInfo(serial) {    
    if (serial.length == 2 || serial.length == 3)
        return {
            serial_version: serial.length == 2 ? 0 : 1,
            device_code: serial
        }
        
    if (serial[0] == "G") { 
        if (serial.length < 6)
            return -1

        return {
            "serial_version": 1,
            "device_code": serial.substring(3, 6)
        }
    } else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"].includes(serial[0])) {
        if (serial.length < 4)
            return -1

        return {
            "serial_version": 0,
            "device_code": serial.substring(2, 4)
        }
    }
    else {
        return -2;
    }
}

function searchForSerial() {
    let serial = document.getElementById("serial").value;
    let next = document.querySelector(":not(.hidden).card > .buttons > #next"); //Trickery since a lot of steps require the same UI elements. Not my finest work... But when life gives you new CSS3 selectors make slop

    serial = serial.toUpperCase().replaceAll(" ", "");
    console.log("Searching for", serial);

    const status = document.querySelector(":not(.hidden).card > #status");
    status.innerText = "";

    let info = -2;
    try {
        info = getSerialInfo(serial);
    } catch {
        next.setAttribute("disabled", "");
        status.style = "color: red; font-size: 1.2em;";
        status.innerText = "ERROR: Serial Number Invalid!";
    }

    if (info === -1) {
        next.setAttribute("disabled", "");
        status.style = "color: red; font-size: 1.2em;";
        status.innerText = "ERROR: Serial Number Too Short!";
    } else if (info === -2) {
        next.setAttribute("disabled", "");
        status.style = "color: red; font-size: 1.2em;";
        status.innerText = "ERROR: Serial Number Invalid!";
    } else {
        for (const kindle of window.kindleModels) {
            if (kindle.serial_version < info.serial_version) {
                continue; 
            } else {
                if (Object.keys(kindle.device_codes).includes(info.device_code)) {
                    status.style = "color: green; font-size: 1.2em;";
                    status.innerText = `Kindle Found! - ${kindle.amazon_name}`;
                    window.info.model = kindle.generation_nickname;

                    next.removeAttribute("disabled");

                    gtag("event", "model_search", info);

                    return;
                }
            }
        }

        status.style = "color: red; font-size: 1.2em;";
        if (serial.length < 4) {
            next.setAttribute("disabled", "");
            status.innerText = "ERROR: Serial Number Too Short!";
        } else {
            next.setAttribute("disabled", "");
            status.innerHTML = "ERROR: Serial Number Not Found! Please Open a <a style=\"color: red;\" href=\"https://github.com/KindleModding/kindlemodding.github.io\">GitHub Issue.</a>";
        };
    }
}

//Step 2
function validateFirmware() {
    let firmware = document.getElementById("version");
    let next = document.querySelector(":not(.hidden).card > .buttons > #next");
    let status = document.querySelector(":not(.hidden).card > #status");

    firmware.value = firmware.value.replace(/[^0-9.]/g, ""); //Don't allow non-numbers/dots.

    let value = firmware.value; //The above assignment will not work without new value references
    let validation = /^\d{1,2}(\.\d{1,2}){1,5}$/; //Fun regexp I made up (X.XX.[XX.XX.XX.XX] Format)

    if(validation.test(value) && parseInt(value.split(".")[0]) <= 5) { //Cheap fix for 8.15.6 people
        status.style = "color: green; font-size: 1.2em;";
        status.innerText = "Format Correct! (Still, Ensure No Typos.)";

        window.info.firmware = value;
        next.removeAttribute("disabled");
    } else {
        status.style = "color: red; font-size: 1.2em;";
        status.innerText = "Incorrect Format!";

        next.setAttribute("disabled", "");
    };
};

//Step 3
function isBlacklisted() {
    let option = document.getElementById("registered").value;
    let next = document.querySelector(":not(.hidden).card > .buttons > #next");

    switch(option) {
        case "--":
            next.setAttribute("disabled", "");
            break;
        case "1":
            window.info.blacklisted = false;
            next.removeAttribute("disabled");
            break;
        case "2":
            window.info.blacklisted = true;
            next.removeAttribute("disabled");
            break;
    };
};

//Step 4
function hasAds() {
    let option = document.getElementById("edition").value;
    let next = document.querySelector(":not(.hidden).card > .buttons > #next");

    switch(option) {
        case "--":
            next.setAttribute("disabled", "");
            break;
        case "1":
            window.info.ads = true;
            next.removeAttribute("disabled");
            break;
        case "2":
            window.info.ads = false;
            next.removeAttribute("disabled");
            break;
    };
};

//Helper
function versions(v1, v2) {
    const a = v1.split(".").map(Number);
    const b = v2.split(".").map(Number);
    const len = Math.max(a.length, b.length);
    
    for (let i = 0; i < len; i++) {
        const num1 = a[i] || 0;
        const num2 = b[i] || 0;
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }
    return 0;
}

let text = document.querySelector("#classification");
let tip = document.querySelector("#tip"); 

function fillResults() { //This tickles my brain
    fetch("/jailbreaks.json").then(response => response.json()).then((data) => {
        const matches = data.filter(jb => {
            if(!jb.models.includes(window.info.model)) return false;
            if(jb.registration && window.info.blacklisted) return false;
            if(jb.ads && !window.info.ads) return false;

            return jb.firmwares.some(rule => {
                if (!rule.models.includes("all") && !rule.models.includes(window.info.model)) {
                    return false;
                };

                if(rule.outliers.denied.includes(window.info.firmware)) return false;
                if(rule.outliers.accepted.includes(window.info.firmware)) return true;

                const min = versions(window.info.firmware, rule.min) >= 0;
                const max = versions(window.info.firmware, rule.max) <= 0;
                return min && max;
            });
        });

        let next = document.querySelector(":not(.hidden).card > .buttons > #next");

        if(matches.length > 0) {
            text.innerHTML = `We have determined you should use <b><a href="${matches[0].url}">${matches[0].name}</a></b>!<br/>Please press on a link or click "Finish" to get started.`;
            
            let others = []; matches.forEach((match, i) => i === 0 ? "" : others.push(`<a href="${match.url}">${match.name}</a>`));
            tip.innerHTML = others.length > 0 ? `Alternatively, you can also attempt ${others.join(", ")} if preferred/something went wrong.` : "This is the <i>only</i> jailbreak applicable to this firmware and model combination. Be careful!";

            next.onclick = () => { document.location = matches[0].url; };
            next.removeAttribute("disabled");
        } else {
            text.innerHTML = "Unfortunately, <b>no jailbreaks</b> are available at the moment.";
            tip.innerText = "Please wait and check back until a jailbreak for your model and firmware combination is released! :)"
            next.setAttribute("disabled", "");
        };
    });
};

fetch("/models.json").then(response => response.json()).then((data) => {
    window.kindleModels = data;
});