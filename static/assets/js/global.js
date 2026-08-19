const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register(`${baseUrl}service_worker.js`, {
                scope: "/",
            });
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

registerServiceWorker();

//Modal Functions
function showDialog(title, description) {
    //Build Modal (from Scratch)
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");
    document.body.appendChild(overlay);

    const modal = document.createElement("div");
    modal.classList.add("modal-container");
    overlay.appendChild(modal);

    const header = document.createElement("div");
    header.classList.add("modal-header");
    const mTitle = document.createElement("h2");
    mTitle.innerHTML = title; header.appendChild(mTitle);
    modal.appendChild(header);

    const body = document.createElement("div");
    body.classList.add("modal-body");
    const mDesc = document.createElement("p");
    mDesc.innerHTML = description; body.appendChild(mDesc);
    modal.appendChild(body);

    const footer = document.createElement("div");
    footer.classList.add("modal-footer");
    const close = document.createElement("button");
    close.onclick = () => closeDialog(); close.innerHTML = "CLOSE"; footer.appendChild(close);
    modal.appendChild(footer);

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    const escHandler = (e) => {
        if (e.key === "Escape") {
            closeDialog();
            window.removeEventListener("keydown", escHandler);
        }
    };
    window.addEventListener("keydown", escHandler);
}

function closeDialog() {
    const modal = document.querySelector(".modal-container");

    const overlay = modal.closest(".modal-overlay");
    if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = ""; 
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
        closeDialog();
    }
});